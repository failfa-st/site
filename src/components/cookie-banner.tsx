import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CookieIcon from "@mui/icons-material/Cookie";
import { Link } from "@/components/link";
import { useCookieConsentContext } from "@use-cookie-consent/react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
import Typography from "@mui/material/Typography";

export function CookieSettings() {
	const { acceptCookies, acceptAllCookies, declineAllCookies, consent } =
		useCookieConsentContext();
	const [dialogOpen, setDialogOpen] = useState(false);
	function handleClose() {
		setDialogOpen(false);
	}
	return (
		<>
			<Button
				variant="contained"
				onClick={() => {
					setDialogOpen(true);
				}}
			>
				Configure
			</Button>
			<Dialog open={dialogOpen} onClose={handleClose}>
				<DialogTitle>Manage Cookies</DialogTitle>
				<Box px={2} pb={1} sx={{ maxWidth: 400 }}>
					<Typography mb={2}>
						You can choose which types of cookies you would like to accept or decline by
						selecting the appropriate checkboxes below:
					</Typography>
					<Box>
						<FormControlLabel
							label="Necessary"
							control={<Switch checked={consent.necessary} />}
						/>
					</Box>
					<Box>
						<FormControlLabel
							label="Session"
							control={
								<Switch
									checked={consent.session}
									onChange={event => {
										acceptCookies({
											...consent,
											session: event.target.checked,
										});
									}}
								/>
							}
						/>
					</Box>
					<Box>
						<FormControlLabel
							label="First Party"
							control={
								<Switch
									checked={consent.firstParty}
									onChange={event => {
										acceptCookies({
											...consent,
											firstParty: event.target.checked,
										});
									}}
								/>
							}
						/>
					</Box>
					<Box>
						<FormControlLabel
							label="Third Party"
							control={
								<Switch
									checked={consent.thirdParty}
									onChange={event => {
										acceptCookies({
											...consent,
											thirdParty: event.target.checked,
										});
									}}
								/>
							}
						/>
					</Box>

					<Box>
						<FormControlLabel
							label="Marketing"
							control={
								<Switch
									checked={consent.marketing}
									onChange={event => {
										acceptCookies({
											...consent,
											marketing: event.target.checked,
										});
									}}
								/>
							}
						/>
					</Box>
					<Box>
						<FormControlLabel
							label="Preferences"
							control={
								<Switch
									checked={consent.preferences}
									onChange={event => {
										acceptCookies({
											...consent,
											preferences: event.target.checked,
										});
									}}
								/>
							}
						/>
					</Box>
					<Box>
						<FormControlLabel
							label="Statistics"
							control={
								<Switch
									checked={consent.statistics}
									onChange={event => {
										acceptCookies({
											...consent,
											statistics: event.target.checked,
										});
									}}
								/>
							}
						/>
					</Box>
				</Box>
				<DialogActions>
					<Button color="primary" variant="contained" onClick={acceptAllCookies}>
						Accept all
					</Button>
					<Button onClick={declineAllCookies}>Decline all</Button>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

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
