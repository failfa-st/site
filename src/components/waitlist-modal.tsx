import { CustomSvg } from "@/components/custom-svg";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";

export function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={{
					position: "absolute" as "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: 400,
					bgcolor: "background.paper",
					border: "2px solid #000",
					boxShadow: 24,
					p: 4,
				}}
			>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Sign up for waitlist
				</Typography>

				<Alert severity="info">
					Feature coming soon. For updates, join our Discord. Waitlist news will be
					announced there.
				</Alert>

				<Button
					href="https://discord.com/invite/m3TBB9XEkb"
					target="_blank"
					startIcon={<CustomSvg variant="discord" />}
					variant="outlined"
					sx={{ mt: 2 }}
				>
					Join us on Discord
				</Button>
			</Box>
		</Modal>
	);
}
