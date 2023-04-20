import { useCookieConsentContext } from "@use-cookie-consent/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function YoutubeEmbed({ ytId }: { ytId: string }) {
	const { consent, acceptCookies } = useCookieConsentContext();

	return (
		<Box sx={{ position: "relative", paddingBottom: `${(100 / 16) * 9}%` }}>
			{consent.thirdParty ? (
				<Box
					allowFullScreen
					component="iframe"
					src={`https://www.youtube.com/embed/${ytId}`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
