import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Footer from "@/components/footer";
import {
	Card,
	CardContent,
	CardHeader,
	Container,
	Unstable_Grid2 as Grid,
	Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import { ReactNode } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import SvgIcon from "@mui/material/SvgIcon";

export default function Home() {
	return (
		<>
			<Container>
				<Stack sx={{ alignItems: "center", height: "100vh" }}>
					<Box
						sx={{
							flex: 1,
							display: "flex",
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box
							component="svg"
							viewBox="0 0 24 24"
							sx={{
								height: "100%",
								width: "100%",
								flex: 1,
								maxWidth: 400,
								margin: "auto",
							}}
						>
							<path
								fill="currentColor"
								d="m8,12c-.55,0-1-.45-1-1,0,0,0,0,0,0h-1v-1h4v1h-1s0,0,0,0c0,.55-.45,1-1,1Zm-4-2v4l.97,1.56-.02-4.03-.96-1.53Zm4,8h4v-1h-4v1Zm4,2v2s3,0,3,0l2.5-4h-4.3l-1.2,2Zm8-12v6l-1.28,2.05-4.33-.04.61-1.01h-3s0-13,0-13c7,0,8,6,8,6Zm-2,3l-2-2-2,2.01,2,1.99,2-2Zm-7,4h-1v1h1v-1Z"
							/>
						</Box>
					</Box>
					{/* <Link passHref legacyBehavior href="/projects/fail4">
						<Button
							disableElevation
							disableTouchRipple
							component="a"
							color="primary"
							variant="contained"
						>
							Try fail4 now
						</Button>
					</Link> */}
					<Stack sx={{ flexDirection: "row", gap: 2 }}>
						<MuiLink
							href="https://twitter.com/failfa_st"
							target="_blank"
							rel="noopener noreferrer"
						>
							<TwitterIcon />
						</MuiLink>
						<MuiLink
							href="https://www.youtube.com/@failfa-st"
							target="_blank"
							rel="noopener noreferrer"
						>
							<YouTubeIcon />
						</MuiLink>
						<MuiLink
							href="https://discord.com/invite/m3TBB9XEkb"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SvgIcon viewBox="0 0 127.14 96.36">
								<path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
							</SvgIcon>
						</MuiLink>
					</Stack>
					<Typography variant="h3" mb={2} mt={6}>
						failfa.st
					</Typography>

					<Typography variant="h5" mb={4}>
						Rapid AI-powered Development & Innovation
					</Typography>
				</Stack>
			</Container>

			<Footer />
		</>
	);
}
