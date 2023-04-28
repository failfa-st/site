import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import { signOut, useSession } from "next-auth/react";
import { MouseEvent, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function UserMenu() {
	const { data: session } = useSession();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		session && (
			<>
				<IconButton
					edge="end"
					aria-label="Info"
					id="infoMenu-button"
					aria-controls={open ? "infoMenu-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-haspopup="true"
					sx={{ p: 0 }}
					onClick={handleClick}
				>
					<Avatar src={session.user?.image ?? undefined} sx={{ height: 32, width: 32 }} />
				</IconButton>
				<Menu
					id="infoMenu-menu"
					MenuListProps={{
						"aria-labelledby": "infoMenu-button",
					}}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					PaperProps={{
						style: {
							width: "20ch",
						},
					}}
				>
					<MenuItem
						onClick={() => {
							void signOut();
						}}
					>
						Logout
					</MenuItem>
				</Menu>
			</>
		)
	);
}
export default function UserLogin() {
	return (
		<Stack
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "end",
				position: "absolute",
				top: 15,
				right: 20,
			}}
		>
			<UserMenu />
		</Stack>
	);
}
