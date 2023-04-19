import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CookieIcon from "@mui/icons-material/Cookie";
import { Link } from "@/components/link";
import { useCookieConsentContext } from "@use-cookie-consent/react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function CookieBanner() {
	const { acceptCookies, acceptAllCookies, consent } = useCookieConsentContext();
	function acceptNecessary() {
		acceptCookies({
			necessary: true,
		});
	}

	return (
		<Snackbar open={!consent.necessary} sx={{ maxWidth: 700 }}>
			<Alert onClose={acceptNecessary} severity="info" icon={<CookieIcon />}>
				We only use cookies to improve this site. Read more about the cookies we use on our{" "}
				<Link href="/legal/cookie-policy">Cookie Policy</Link> and{" "}
				<Link href="/legal/data-policy">Data Policy</Link> page.
				<Box mt={2}>
					<Button onClick={acceptNecessary}>Accept necessary</Button>
					<Button
						onClick={() => {
							acceptAllCookies();
						}}
					>
						Accept all
					</Button>
				</Box>
			</Alert>
		</Snackbar>
	);
}
