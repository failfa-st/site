import { useCookieConsentContext } from "@use-cookie-consent/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function CodesandboxEmbed({ src }: { src: string }) {
	const { consent, acceptCookies } = useCookieConsentContext();

	return (
		<Box sx={{ position: "relative", paddingBottom: `${(100 / 16) * 9}%` }}>
			{consent.thirdParty ? (
				<Box
					component="iframe"
					src={`${src}?codemirror=1&hidedevtools=1&hidenavigation=1&runonclick=1&module=script.js`}
					allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
					sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
					sx={{
						height: "100%",
						width: "100%",
						position: "absolute",
						inset: 0,
						color: "primary.main",
						border: 0,
						overflow: "hidden",
					}}
				/>
			) : (
				<Box
					sx={{
						height: "100%",
						width: "100%",
						position: "absolute",
						inset: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{!consent.thirdParty && (
						<Button
							onClick={() => {
								acceptCookies({ ...consent, thirdParty: true });
							}}
						>
							Allow Third Party Cookies
						</Button>
					)}
				</Box>
			)}
		</Box>
	);
}
