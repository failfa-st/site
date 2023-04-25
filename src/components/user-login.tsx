import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function UserLogin() {
	const [showLogOut, setShowLogOut] = useState(false);
	const { data: session } = useSession();
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
			{session?.user ? (
				<>
					<Avatar
						src={session?.user.image as string}
						onClick={() => {
							void setShowLogOut(previousValue => !previousValue);
						}}
					/>
					{showLogOut ? (
						<Button
							sx={{ mt: 1 }}
							onClick={() => {
								void signOut();
							}}
						>
							Logout
						</Button>
					) : null}
				</>
			) : (
				<>
					<Button
						onClick={() => {
							void signIn();
						}}
					>
						Login
					</Button>
				</>
			)}
		</Stack>
	);
}
