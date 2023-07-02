import Footer from "@/components/footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import HiveIcon from "@mui/icons-material/Hive";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Grid from "@mui/material/Unstable_Grid2";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FlockingSimulation from "@/components/flocking-simulation";
import Image from "next/image";

const iconSize = { width: 40, height: 40 };

const team = [
	{
		name: "NERDDISCO",
		github: "TimPietrusky",
		image: "https://avatars.githubusercontent.com/u/492378?v=4",
	},
	{
		name: "Pixelass",
		github: "pixelass",
		image: "https://avatars.githubusercontent.com/u/1148334?v=4",
	},
	{
		name: "Doemser",
		github: "doemser",
		image: "https://avatars.githubusercontent.com/u/93415777?v=4",
	},
];

const infoCards = [
	{
		title: "Working on",
		shortDescription: "Next Level, AI powered Streaming Experiences.",
		icon: <LiveTvIcon sx={iconSize} />,
		links: [
			{
				text: "twitch",
				link: "https://www.twitch.tv/failfa_st",
				icon: (
					<SvgIcon viewBox="0 0 24 24">
						<path d="M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14Z" />
					</SvgIcon>
				),
			},
			{ text: "YouTube", link: "https://www.youtube.com/@failfa-st", icon: <YouTubeIcon /> },
		],
		shield: (
			<>
				<Typography>
					<img
						alt="failfa.st twitch status"
						src="https://img.shields.io/twitch/status/failfa_st?color=000000&logo=twitch&logoColor=fff&style=for-the-badge"
					/>
				</Typography>
				<Typography>
					<img
						alt="youtube subscribers"
						src="https://img.shields.io/youtube/channel/subscribers/UCe7AJWRNZDNMZoH6FNvJKfg?color=000000&logo=youtube&logoColor=fff&style=for-the-badge"
					/>
				</Typography>
			</>
		),
	},
	{
		title: "Discord",
		shortDescription: "Connect, Collaborate, Communicate. Get in touch with us.",
		icon: (
			<SvgIcon viewBox="0 0 127.14 96.36" sx={iconSize}>
				<path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
			</SvgIcon>
		),
		links: [
			{
				text: "Join us on Discord",
				link: "https://discord.com/invite/m3TBB9XEkb",
				icon: (
					<SvgIcon viewBox="0 0 127.14 96.36">
						<path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
					</SvgIcon>
				),
			},
		],
		shield: (
			<Typography>
				<img
					alt="discord stats"
					src="https://img.shields.io/discord/1091306623819059300?color=000000&label=Discord&logo=discord&logoColor=fff&style=for-the-badge"
				/>
			</Typography>
		),
	},
	{
		title: "Hyv",
		shortDescription: "Elevate Development with AI & API Synergy.",
		icon: <HiveIcon sx={iconSize} />,
		links: [
			{
				text: "Getting Started",
				link: "https://github.com/failfa-st/hyv",
				icon: <HiveIcon />,
			},
		],
		shield: (
			<Typography>
				<img
					alt="hyv github stars"
					src="https://img.shields.io/github/stars/failfa-st/hyv?color=000000&logo=github&logoColor=fff&style=for-the-badge"
				/>
			</Typography>
		),
		headerTitle: <Chip label="Soon: Discord Chat Docs" color="success" variant="outlined" />,
	},
	{
		title: "Open Source",
		shortDescription: "Our software that can be used by everyone, for free.",
		icon: <GitHubIcon sx={iconSize} />,
		links: [{ text: "GitHub", link: "https://github.com/failfa-st", icon: <GitHubIcon /> }],
		shield: (
			<Typography>
				<img
					alt="failfa.st stars"
					src="https://img.shields.io/github/stars/failfa-st?color=000000&label=failfa.st Stars&logo=github&logoColor=fff&style=for-the-badge"
				/>
			</Typography>
		),
	},
	{
		title: "Team",
		shortDescription: "",
		icon: (
			<SvgIcon
				viewBox="0 0 24 24"
				sx={{
					fontSize: "2em",
					...iconSize,
				}}
			>
				<path
					fill="currentColor"
					d="m8,12c-.55,0-1-.45-1-1,0,0,0,0,0,0h-1v-1h4v1h-1s0,0,0,0c0,.55-.45,1-1,1Zm-4-2v4l.97,1.56-.02-4.03-.96-1.53Zm4,8h4v-1h-4v1Zm4,2v2s3,0,3,0l2.5-4h-4.3l-1.2,2Zm8-12v6l-1.28,2.05-4.33-.04.61-1.01h-3s0-13,0-13c7,0,8,6,8,6Zm-2,3l-2-2-2,2.01,2,1.99,2-2Zm-7,4h-1v1h1v-1Z"
				/>
			</SvgIcon>
		),
		links: [],
		shield: (
			<Stack gap={1}>
				{team.map(member => {
					return (
						<Stack key={member.github} flexDirection="row" alignItems="center" gap={2}>
							<Image
								alt={member.name}
								src={member.image}
								width={40}
								height={40}
								style={{ borderRadius: "50%" }}
							/>
							<Stack>
								<Typography>{member.name}</Typography>
								<a
									href={`https://github.com/${member.github}`}
									target="blank"
									rel="noopener"
								>
									<img
										alt={member.name}
										src={`https://img.shields.io/github/followers/${member.github}?color=000000&label=followers&logo=github&logoColor=fff&style=for-the-badge`}
									/>
								</a>
							</Stack>
						</Stack>
					);
				})}
			</Stack>
		),
	},
];

export default function Home() {
	return (
		<>
			<Box
				sx={{
					position: "relative",
					background:
						"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(15,15,15,1) 35%, rgba(25,25,25,1) 100%)",
				}}
			>
				<FlockingSimulation />

				<Container>
					<Stack p={2}>
						<Stack
							flexDirection="row"
							justifyContent="center"
							alignItems="center"
							sx={{ zIndex: 2 }}
						>
							<SvgIcon
								viewBox="0 0 24 24"
								sx={{
									fontSize: "2em",
									height: "2em",
									width: "2em",
								}}
							>
								<path
									fill="currentColor"
									d="m8,12c-.55,0-1-.45-1-1,0,0,0,0,0,0h-1v-1h4v1h-1s0,0,0,0c0,.55-.45,1-1,1Zm-4-2v4l.97,1.56-.02-4.03-.96-1.53Zm4,8h4v-1h-4v1Zm4,2v2s3,0,3,0l2.5-4h-4.3l-1.2,2Zm8-12v6l-1.28,2.05-4.33-.04.61-1.01h-3s0-13,0-13c7,0,8,6,8,6Zm-2,3l-2-2-2,2.01,2,1.99,2-2Zm-7,4h-1v1h1v-1Z"
								/>
							</SvgIcon>
							<Typography
								variant="h3"
								component="h1"
								mt={1.5}
								sx={{
									fontSize: "4em",
									textShadow: "0 0 5px #888, 0 0 10px #888",
								}}
							>
								failfa.st
							</Typography>
						</Stack>
						<Typography variant="h4" component="h2" textAlign="center">
							Rapid AI powered Development
						</Typography>
					</Stack>
					<Grid container spacing={2}>
						{infoCards.map(card => {
							return (
								<Grid key={card.shortDescription} xs={12} sm={6} md={4}>
									<Card
										sx={{
											backgroundColor: "rgba(255, 255, 255, 0.0125)",
											backdropFilter: "blur(10px)",
											border: "1px solid rgba(255, 255, 255, 0.2)",
											borderRadius: "10px",
											padding: "20px",
										}}
									>
										<CardHeader
											avatar={
												<Avatar
													sx={{
														width: 50,
														height: 50,

														bgcolor: "transparent",
														color: "white",
														overflow: "visible",
														mb: -2,
													}}
												>
													{card.icon}
												</Avatar>
											}
											title={card.headerTitle && card.headerTitle}
										/>

										<CardContent sx={{ minHeight: "240px" }}>
											<Typography variant="h5" component="h2" mb={2}>
												{card.title}
											</Typography>
											<Typography>{card.shortDescription}</Typography>
											<Stack mt={2}>{card.shield}</Stack>
										</CardContent>
										<CardActions sx={{ pl: 2, pb: 2 }}>
											{card.links.map(link => (
												<Button
													key={link.link}
													href={link.link}
													target="_blank"
													rel="noopener"
													variant="outlined"
													startIcon={link.icon}
												>
													{link.text}
												</Button>
											))}
										</CardActions>
									</Card>
								</Grid>
							);
						})}
					</Grid>
				</Container>
				<Footer />
			</Box>
		</>
	);
}
