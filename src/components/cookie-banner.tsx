import { useAtom } from "jotai";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CookieIcon from "@mui/icons-material/Cookie";
import { Link } from "@/components/link";
import { atomWithStorage } from "jotai/utils";

export const consentAtom = atomWithStorage(`cookie-consent`, false);

export default function CookieBanner() {
	const [consent, setConsent] = useAtom(consentAtom);

	function handleClose() {
		setConsent(true);
	}

	return (
		<Snackbar open={!consent} sx={{ maxWidth: 300 }}>
			<Alert onClose={handleClose} severity="info" icon={<CookieIcon />}>
				We only use necessary cookies. Read more about the cookies we use on our{" "}
				<Link href="/legal/data-policy">Data Policy</Link> page.
			</Alert>
		</Snackbar>
	);
}
