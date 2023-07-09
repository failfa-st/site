import Footer from "@/components/footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import HiveIcon from "@mui/icons-material/Hive";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Divider, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BuildIcon from "@mui/icons-material/Build";
import ChatIcon from "@mui/icons-material/Chat";
import MailIcon from "@mui/icons-material/Mail";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Grid from "@mui/material/Unstable_Grid2";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import FlockingSimulation from "@/components/flocking-simulation";
import Image from "next/image";
import LinkIcon from "@mui/icons-material/Link";
import useSWR from "swr";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Face2Icon from "@mui/icons-material/Face2";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LanguageIcon from "@mui/icons-material/Language";
import QuizIcon from "@mui/icons-material/Quiz";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CampaignIcon from "@mui/icons-material/Campaign";
import ConstructionIcon from "@mui/icons-material/Construction";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> =>
	fetch(...args).then((res: Response) => res.json());

interface GithubUser {
	avatar_url: string;
	bio: string;
	blog: string;
	company: string | null;
	created_at: string;
	email: string | null;
	events_url: string;
	followers: number;
	followers_url: string;
	following: number;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	hireable: boolean | null;
	html_url: string;
	id: number;
	location: string;
	login: string;
	name: string;
	node_id: string;
	organizations_url: string;
	public_gists: number;
	public_repos: number;
	received_events_url: string;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	twitter_username: string;
	type: string;
	updated_at: string;
	url: string;
}

const iconSize = { width: 40, height: 40 };

type IconType = "twitch" | "discord" | "failfast" | "hyv" | "api";

interface IconSize {
	width: number;
	height: number;
}

interface CustomSvgProps {
	variant: IconType;
	iconSize?: IconSize;
}

const paths = {
	twitch: {
		viewbox: "0 0 24 24",
		path: "M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14Z",
	},
	discord: {
		viewbox: "0 0 127.14 96.36",
		path: "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z",
	},
	failfast: {
		viewbox: "0 0 24 24",
		path: "m8,12c-.55,0-1-.45-1-1,0,0,0,0,0,0h-1v-1h4v1h-1s0,0,0,0c0,.55-.45,1-1,1Zm-4-2v4l.97,1.56-.02-4.03-.96-1.53Zm4,8h4v-1h-4v1Zm4,2v2s3,0,3,0l2.5-4h-4.3l-1.2,2Zm8-12v6l-1.28,2.05-4.33-.04.61-1.01h-3s0-13,0-13c7,0,8,6,8,6Zm-2,3l-2-2-2,2.01,2,1.99,2-2Zm-7,4h-1v1h1v-1Z",
	},
	hyv: {
		viewbox: "0 0 247.34 247.34",
		path: "M123.62,33.9c23.85,0,47.71,.03,71.56-.05,2.29,0,3.47,.75,4.64,2.74,11.59,19.74,23.3,39.41,35.03,59.06,.75,1.26,1.09,2.33,.31,3.66-12.09,20.88-24.06,41.83-36.47,62.53-1.41,2.35-2.94,3.06-5.54,3.03-11.14-.12-22.27,0-33.41-.05-2.03,0-3.31,.62-4.48,2.39-9.77,14.87-19.36,29.87-29.6,44.42-1.78,2.52-1.78,2.5-3.55-.14-9.94-14.86-19.92-29.7-29.81-44.59-1.09-1.64-2.44-1.99-4.21-1.99-11.89,.02-23.77-.03-35.66,0-1.46,0-2.41-.31-3.21-1.7-12.28-21.28-24.61-42.53-36.95-63.77-.7-1.21-.74-2.2,.02-3.44,12.08-19.73,23.82-39.67,35.43-59.68,1.01-1.74,2.08-2.41,4.09-2.41,23.94,.06,47.88,.04,71.81,.04v-.04Zm-43.82,15.44s0,.05,0,.07c-6.32,0-12.63,.04-18.94-.03-1.68-.02-2.72,.57-3.63,2.02-9.26,14.78-18.58,29.52-27.93,44.24-.79,1.25-.74,2.21,0,3.41,2.53,4.07,4.97,8.19,7.48,12.27,7.32,11.89,14.68,23.77,21.97,35.68,1.04,1.69,2.12,2.66,4.32,2.56,4.56-.21,9.14-.08,13.71-.12,.7,0,1.64,.41,2.02-.46,.35-.79-.45-1.31-.87-1.92-10.85-15.84-21.95-31.51-32.3-47.69-.99-1.54-.88-2.55,.08-3.99,6.13-9.24,12.16-18.54,18.22-27.82,.69-1.06,1.51-2.01,2.68-2.52,10.85-4.73,21.71-9.44,32.58-14.13,.53-.23,1.27-.28,1.19-1.01-.09-.82-.85-.58-1.4-.58-6.4,0-12.79,0-19.19,0Zm87.46,.14s0-.03,0-.05c-6.4,0-12.79,0-19.19,0-.54,0-1.31-.29-1.48,.47-.17,.77,.61,.8,1.14,1.01,11.06,4.45,21.95,9.32,32.8,14.26,1.38,.63,2.42,1.61,3.28,2.92,5.91,8.99,11.84,17.97,17.86,26.88,1.03,1.52,1.12,2.58,.08,4.2-10.55,16.34-21.51,32.4-32.79,48.25-.39,.55-.94,1.05-.54,1.74,.35,.62,1.05,.34,1.6,.34,5.07,0,10.14-.07,15.21,0,1.33,.02,2.23-.42,2.89-1.49,10.15-16.55,20.29-33.11,30.5-49.63,.7-1.13,.32-1.78-.23-2.64-9.56-14.69-19.14-29.37-28.64-44.11-1.03-1.6-2.14-2.24-4.03-2.21-6.15,.1-12.3,.04-18.45,.04Zm-7.22,89.64c2.94-4.24,5.89-8.49,8.84-12.75,.4-.57,.43-1.23,.43-1.9-.02-15.27-.05-30.55-.04-45.82,0-1.16-.31-2.1-1.15-2.89-8.97-8.37-17.93-16.75-26.88-25.13-.77-.72-1.61-1.13-2.67-1.13-3.57,0-7.14-.04-10.71-.03-.55,0-1.28-.2-1.51,.51-.21,.67,.48,.97,.87,1.38,5.69,6,11.78,11.6,17.6,17.47,4.06,4.08,8.25,8.09,12.54,11.97,1.32,1.19,1.88,2.51,1.88,4.35-.03,17.35,.04,34.7,.09,52.05,0,.63-.31,1.35,.72,1.94Zm-80.88-37.88h-.02c0,7.56,.03,15.12-.02,22.68-.01,1.64,.32,3.06,1.29,4.42,2.39,3.37,4.68,6.83,7.02,10.24,.31,.45,.39,1.26,1.16,1.09,.97-.22,.53-1.05,.53-1.65,0-17.69,.01-35.38-.09-53.08-.01-2.2,.7-3.66,2.25-5.17,9.66-9.35,19.23-18.81,28.81-28.25,.45-.45,1.27-.83,1.03-1.57-.32-.95-1.27-.53-1.96-.53-2.99-.03-5.99,.11-8.97-.04-2.09-.11-3.61,.59-5.09,2.02-8.05,7.79-16.15,15.52-24.28,23.23-1.18,1.12-1.69,2.29-1.68,3.93,.07,7.56,.03,15.12,.03,22.68Zm44.83,90.7c.67-.15,.82-.8,1.11-1.26,4.86-7.67,9.66-15.38,14.54-23.03,.77-1.21,.52-2.02-.25-3.08-4.81-6.63-9.57-13.29-14.32-19.96-1.6-2.25-1.63-2.27-3.13-.1-4.57,6.59-9.12,13.2-13.77,19.73-.81,1.14-.89,2.02-.19,3.14,4.91,7.83,9.81,15.67,14.71,23.51,.32,.51,.66,.94,1.3,1.04Zm-8.89-80.56c-.38-1.12-1.26-.75-1.91-.75-6.13-.02-12.26-.01-18.39,.01-.62,0-1.5-.3-1.72,.51-.11,.39,.39,1.04,.74,1.46,3.01,3.54,5.42,7.54,8.68,10.91,1.29,1.33,1.83,1.18,2.82-.04,2.96-3.66,5.97-7.28,8.95-10.93,.31-.38,.57-.8,.83-1.17Zm29.52-.8h0c-3.15,.01-6.3,0-9.45,.02-.54,0-1.24-.21-1.53,.48-.28,.66,.3,1.05,.65,1.49,2.94,3.68,5.94,7.31,8.81,11.05,1.13,1.48,1.81,1.18,2.8-.11,2.86-3.75,5.81-7.42,8.7-11.14,.32-.41,1.05-.77,.6-1.45-.31-.46-.9-.33-1.38-.33-3.07,0-6.13,0-9.2,0Zm-75.91-13.06h-.04c0-3.74,0-7.47,0-11.21,0-.54,.32-1.26-.45-1.49-.52-.16-.94,.28-1.2,.71-2.11,3.47-4.62,6.66-7.09,9.88-.66,.86-.54,1.68,0,2.53,2.36,3.69,4.71,7.38,7.09,11.06,.3,.46,.66,1.1,1.35,.82,.56-.23,.34-.86,.34-1.33,0-3.65,0-7.31,0-10.96Zm110.47-13.14l-.55,.3v25.27c.96-.18,1.29-.76,1.65-1.28,1.63-2.39,3.31-4.75,4.86-7.19,3.43-5.41,3.5-3.33-.08-8.62-1.93-2.85-3.92-5.65-5.88-8.47Z",
	},
	api: {
		viewbox: "0 0 24 24",
		path: "M7 7H5A2 2 0 0 0 3 9V17H5V13H7V17H9V9A2 2 0 0 0 7 7M7 11H5V9H7M14 7H10V17H12V13H14A2 2 0 0 0 16 11V9A2 2 0 0 0 14 7M14 11H12V9H14M20 9V15H21V17H17V15H18V9H17V7H21V9Z",
	},
};

function CustomSvg({ variant, iconSize }: CustomSvgProps) {
	return (
		<SvgIcon viewBox={paths[variant].viewbox} sx={iconSize}>
			<path d={paths[variant].path} />
		</SvgIcon>
	);
}

export default function Home() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const { data } = useSWR("/api/failfast-stats", fetcher);
	const failfastStats = data ? data : { discord: 0, hyvStars: 0, orgStars: 0, team: [] };

	const infoCards = [
		{
			title: "Join Waitlist",
			headerTitle: (
				<Chip label="Coming soon" color="warning" variant="outlined" size="small" />
			),
			shortDescription: "We are working on hosting AI Services that perfectly fit Hyv.",
			icon: <CustomSvg variant="api" iconSize={iconSize} />,
			shield: (
				<Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
					<Chip icon={<RecordVoiceOverIcon />} label={`Voice API`} size="small" />
					<Chip icon={<ImageIcon />} label={`Image API`} size="small" />
					<Chip icon={<OndemandVideoIcon />} label={`Video API`} size="small" />
					<Chip icon={<MusicNoteIcon />} label={`Music API`} size="small" />
				</Stack>
			),
			links: [
				{
					text: "Sign up for Waitlist",
					link: "",
					icon: <MailIcon />,
					action: () => handleOpen(),
				},
			],
		},
		{
			title: "Hyv",
			headerTitle: (
				<Chip label="Soon: Chat Docs" color="success" variant="outlined" size="small" />
			),
			shortDescription: "The JavaScript Hub for Your AI Models.",
			icon: <CustomSvg variant="hyv" iconSize={iconSize} />,
			links: [
				{
					text: "Get Started",
					link: "https://github.com/failfa-st/hyv",
					icon: <CustomSvg variant="hyv" />,
				},
				{
					text: "Get Help",
					link: "https://discord.com/invite/m3TBB9XEkb",
					icon: <CustomSvg variant="discord" />,
				},
			],
			shield: (
				<Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
					<Chip icon={<LanguageIcon />} label={`All AI Models`} size="small" />
					<Chip icon={<PsychologyIcon />} label={`Endless Memory`} size="small" />
					<Chip icon={<Face2Icon />} label={`AI Personas`} size="small" />
					<Chip icon={<LinkIcon />} label={`Agent Chaining`} size="small" />
					<Chip icon={<Diversity2Icon />} label={`Parallel Agents`} size="small" />
					<Chip
						icon={<GitHubIcon />}
						label={`${failfastStats.hyvStars} stars`}
						size="small"
					/>
				</Stack>
			),
		},
		{
			title: "Discord",
			headerTitle: (
				<Chip
					variant="outlined"
					icon={<FavoriteIcon color="error" />}
					label={`${failfastStats.discord} ONLINE`}
					size="small"
				/>
			),
			shortDescription: "Connect, Collaborate, Communicate. Get in touch with us.",
			icon: <CustomSvg variant="discord" iconSize={iconSize} />,
			links: [
				{
					text: "Join us on Discord",
					link: "https://discord.com/invite/m3TBB9XEkb",
					icon: <CustomSvg variant="discord" />,
				},
			],
			shield: (
				<Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
					<Chip icon={<CampaignIcon />} label={`Announcements`} size="small" />
					<Chip icon={<ConstructionIcon />} label={`Workshops`} size="small" />
					<Chip icon={<PrecisionManufacturingIcon />} label={`AI Content`} size="small" />
					<Chip icon={<SupportAgentIcon />} label={`Support`} size="small" />
				</Stack>
			),
		},
		{
			title: "Open Source",
			headerTitle: "",
			shortDescription: "Our software that can be used by everyone, for free.",
			icon: <GitHubIcon sx={iconSize} />,
			links: [{ text: "GitHub", link: "https://github.com/failfa-st", icon: <GitHubIcon /> }],
			shield: (
				<Chip
					icon={<GitHubIcon />}
					label={`${failfastStats.orgStars} stars`}
					size="small"
				/>
			),
		},
		{
			title: "Team",
			headerTitle: "",
			shortDescription: "",
			icon: <CustomSvg variant="failfast" iconSize={iconSize} />,
			links: [],
			shield: (
				<List sx={{ mt: -2 }}>
					{failfastStats?.team?.map((member: GithubUser) => {
						return (
							<ListItem
								key={member.login}
								alignItems="flex-start"
								secondaryAction={
									<IconButton
										edge="end"
										aria-label={`github: ${member.login}`}
										href={`https://github.com/${member.login}`}
										target="_blank"
									>
										<GitHubIcon />
									</IconButton>
								}
							>
								<ListItemAvatar sx={{ ml: -2 }}>
									<Avatar>
										<Image
											alt={member.login}
											src={member.avatar_url}
											width={40}
											height={40}
										/>
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={member.name}
									secondary={`@${member.login}`}
								/>
							</ListItem>
						);
					})}
				</List>
			),
		},
	];

	return (
		<Box
			sx={{
				position: "relative",
				background:
					"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(15,15,15,1) 35%, rgba(25,25,25,1) 100%)",
			}}
		>
			<FlockingSimulation />

			<Container>
				<Stack p={2} justifyContent="center" alignItems="center" sx={{ minHeight: 550 }}>
					<Stack flexDirection="row" justifyContent="center" alignItems="center">
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
							<Grid key={card.title} xs={12} sm={6} md={4}>
								<Card
									sx={{
										backgroundColor: "rgba(255, 255, 255, 0.0125)",
										backdropFilter: "blur(10px)",
										border: "1px solid rgba(255, 255, 255, 0.2)",
										borderRadius: 2.5,
										p: 2,
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

									<CardContent sx={{ minHeight: "265px" }}>
										<Typography variant="h5" component="h2" mb={2}>
											{card.title}
										</Typography>
										<Typography>{card.shortDescription}</Typography>
										<Box mt={2}>{card.shield}</Box>
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
												onClick={link.action}
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
			<Modal
				open={open}
				onClose={handleClose}
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
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						This feature soon will be available. In the meantime you can join our
						Discord to stay up-to-date.
					</Typography>
					<Typography sx={{ mt: 2 }}>
						There will be announcements on the waitlist status.
					</Typography>
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
			<Footer />
		</Box>
	);
}
