import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Footer from "@/components/footer";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	List,
	ListItem,
	ListItemButton,
	Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MuiLink from "@mui/material/Link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import SvgIcon from "@mui/material/SvgIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import UserLogin from "@/components/user-login";
import { Link } from "@/components/link";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";

const YoutubeEmbed = dynamic(async () => await import("@/components/youtube-embed"), {
	ssr: false,
});
const CodesandboxEmbed = dynamic(async () => await import("@/components/codesandbox-embed"), {
	ssr: false,
});

export default function Home() {
	return (
		<>
			<Container>
				<UserLogin />
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

					<Stack sx={{ textAlign: "center", pt: 4, pb: 8 }}>
						<Typography variant="h2" component="h1" mb={2}>
							failfa.st
						</Typography>

						<Typography variant="h4" component="h2" mb={4}>
							Rapid AI-powered Development & Innovation
						</Typography>
						<Stack sx={{ flexDirection: "row", gap: 2, justifyContent: "center" }}>
							<MuiLink
								href="https://github.com/failfa-st"
								target="_blank"
								rel="noopener noreferrer"
							>
								<GitHubIcon />
							</MuiLink>

							<MuiLink
								href="https://codepen.io/failfa-st"
								target="_blank"
								rel="noopener noreferrer"
							>
								<SvgIcon viewBox="0 0 24 24">
									<path d="M8.21 12L6.88 12.89V11.11L8.21 12M11.47 9.82V7.34L7.31 10.12L9.16 11.36L11.47 9.82M16.7 10.12L12.53 7.34V9.82L14.84 11.36L16.7 10.12M7.31 13.88L11.47 16.66V14.18L9.16 12.64L7.31 13.88M12.53 14.18V16.66L16.7 13.88L14.84 12.64L12.53 14.18M12 10.74L10.12 12L12 13.26L13.88 12L12 10.74M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M18.18 10.12C18.18 10.09 18.18 10.07 18.18 10.05L18.17 10L18.17 10L18.16 9.95C18.15 9.94 18.15 9.93 18.14 9.91L18.13 9.89L18.11 9.85L18.1 9.83L18.08 9.8L18.06 9.77L18.03 9.74L18 9.72L18 9.7L17.96 9.68L17.95 9.67L12.3 5.91C12.12 5.79 11.89 5.79 11.71 5.91L6.05 9.67L6.05 9.68L6 9.7C6 9.71 6 9.72 6 9.72L5.97 9.74L5.94 9.77L5.93 9.8L5.9 9.83L5.89 9.85L5.87 9.89L5.86 9.91L5.84 9.95L5.84 10L5.83 10L5.82 10.05C5.82 10.07 5.82 10.09 5.82 10.12V13.88C5.82 13.91 5.82 13.93 5.82 13.95L5.83 14L5.84 14L5.84 14.05C5.85 14.06 5.85 14.07 5.86 14.09L5.87 14.11L5.89 14.15L5.9 14.17L5.92 14.2L5.94 14.23C5.95 14.24 5.96 14.25 5.97 14.26L6 14.28L6 14.3L6.04 14.32L6.05 14.33L11.71 18.1C11.79 18.16 11.9 18.18 12 18.18C12.1 18.18 12.21 18.15 12.3 18.1L17.95 14.33L17.96 14.32L18 14.3L18 14.28L18.03 14.26L18.06 14.23L18.08 14.2L18.1 14.17L18.11 14.15L18.13 14.11L18.14 14.09L18.16 14.05L18.16 14L18.17 14L18.18 13.95C18.18 13.93 18.18 13.91 18.18 13.88V10.12M17.12 12.89V11.11L15.79 12L17.12 12.89Z" />
								</SvgIcon>
							</MuiLink>
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
					</Stack>
				</Stack>
				<Stack sx={{ alignItems: "center" }}>
					<Stack sx={{ textAlign: "center" }}>
						<Typography gutterBottom variant="h1" component="h3">
							100 % Prompt Driven Development on Canvas2D
						</Typography>
						<Typography gutterBottom variant="h4">
							Preview of fail4, our revolutionary open-source project set to redefine
							web development!
						</Typography>

						<Typography gutterBottom variant="body1">
							Currently in a private beta, will be released soon on GitHub under AGPL.
						</Typography>
					</Stack>
				</Stack>

				<Grid container columns={{ xs: 1, md: 2 }} spacing={2} sx={{ mt: 4 }}>
					<Grid
						xs={1}
						item={true}
						sx={{
							alignItems: "stretch",
							display: "flex",
							justifyContent: "stretch",
						}}
					>
						<Card sx={{ flex: 1 }}>
							<CardMedia>
								<YoutubeEmbed ytId="wHgwfotfxe8" />
							</CardMedia>
						</Card>
					</Grid>

					<Grid
						xs={1}
						item={true}
						sx={{
							alignItems: "stretch",
							display: "flex",
							justifyContent: "stretch",
						}}
					>
						<Card sx={{ flex: 1 }}>
							<CardMedia>
								<CodesandboxEmbed src="https://codesandbox.io/embed/failfa-st-fail4-coming-soon-sdty16"></CodesandboxEmbed>
							</CardMedia>
						</Card>
					</Grid>
				</Grid>

				<Stack sx={{ alignItems: "center", mt: 8 }}>
					<Stack sx={{ textAlign: "center" }}>
						<Typography
							gutterBottom
							variant="h1"
							component="h3"
							sx={{ textAlign: "center" }}
						>
							More projects
						</Typography>

						<Typography component="p" maxWidth={650}>
							Check out <Link href="https://github.com/failfa-st/fail1">fail1</Link>{" "}
							and <Link href="https://github.com/failfa-st/fail2">fail2</Link> to get
							an idea how Prompt Driven Development looks like. You can run these two
							projects on our computer, you only need an{" "}
							<Link href="https://openai.com">OpenAI</Link> API key.
						</Typography>
					</Stack>
				</Stack>

				<Stack sx={{ alignItems: "center", mt: 8 }}>
					<Stack sx={{ textAlign: "center" }}>
						<Typography
							gutterBottom
							variant="h1"
							component="h3"
							sx={{ textAlign: "center" }}
						>
							About us
						</Typography>

						<Typography component="p" maxWidth={650}>
							failfa.st is an open-source community of volunteers who contribute to
							various projects without any monetary compensation. Our primary goal is
							to create open-source software that can be used by anyone for free.
						</Typography>
					</Stack>
				</Stack>
			</Container>

			<Footer />
		</>
	);
}
