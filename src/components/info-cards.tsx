import { CustomSvg } from "@/components/custom-svg";
import CampaignIcon from "@mui/icons-material/Campaign";
import CircularProgress from "@mui/material/CircularProgress";
import ConstructionIcon from "@mui/icons-material/Construction";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import Face2Icon from "@mui/icons-material/Face2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import ImageIcon from "@mui/icons-material/Image";
import LanguageIcon from "@mui/icons-material/Language";
import LinkIcon from "@mui/icons-material/Link";
import MailIcon from "@mui/icons-material/Mail";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import useSWR from "swr";

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

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> =>
	fetch(...args).then((res: Response) => res.json());

const iconSize = { width: 40, height: 40 };

export function InfoCards({ onOpenModal }: { onOpenModal: () => void }) {
	const { data: failfastStats, isLoading } = useSWR("/api/failfast-stats", fetcher);

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
			links: [],
			action: (
				<Button startIcon={<MailIcon />} onClick={onOpenModal} variant="outlined">
					Sign up for Waitlist
				</Button>
			),
		},
		{
			title: "Hyv",
			headerTitle: (
				<Chip label="Soon: Chat Docs" color="success" variant="outlined" size="small" />
			),
			shortDescription:
				"The JavaScript Hub for Your AI Models. Start buidling next level apps today.",
			icon: <CustomSvg variant="hyv" iconSize={iconSize} />,
			shield: (
				<Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
					<Chip icon={<LanguageIcon />} label={`All AI Models`} size="small" />
					<Chip icon={<PsychologyIcon />} label={`Endless Memory`} size="small" />
					<Chip icon={<Face2Icon />} label={`AI Personas`} size="small" />
					<Chip icon={<LinkIcon />} label={`Agent Chaining`} size="small" />
					<Chip icon={<Diversity2Icon />} label={`Parallel Agents`} size="small" />
					<Chip
						icon={<GitHubIcon />}
						label={
							isLoading ? (
								<>
									<CircularProgress size={8} sx={{ mr: 1 }} />
									stars
								</>
							) : (
								`${failfastStats.hyvStars} stars`
							)
						}
						size="small"
					/>
				</Stack>
			),
			links: [
				{
					text: "Get Started",
					link: "https://github.com/failfa-st/hyv",
					icon: <CustomSvg variant="hyv" />,
				},
			],
			action: (
				<Button
					startIcon={<CustomSvg variant="discord" />}
					href="https://discord.com/invite/m3TBB9XEkb"
					sx={{ ml: 2 }}
				>
					Get Help
				</Button>
			),
		},
		{
			title: "Discord",
			headerTitle: (
				<Chip
					variant="outlined"
					label={
						isLoading ? (
							<>
								<CircularProgress size={8} sx={{ mr: 1 }} />
								online
							</>
						) : (
							`${failfastStats.discord} online`
						)
					}
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
			headerTitle: (
				<>
					<Chip
						icon={<GitHubIcon />}
						label={
							isLoading ? (
								<>
									<CircularProgress size={8} sx={{ mr: 1 }} />
									stars
								</>
							) : (
								`${failfastStats.orgStars} stars`
							)
						}
						size="small"
						variant="outlined"
					/>
				</>
			),
			shortDescription: "Our software that can be used by everyone, for free.",
			icon: <GitHubIcon sx={iconSize} />,
			links: [{ text: "GitHub", link: "https://github.com/failfa-st", icon: <GitHubIcon /> }],
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
		<Grid container spacing={2}>
			{infoCards.map(card => {
				return (
					<Grid key={card.title} xs={12} md={6} lg={4}>
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
									>
										{link.text}
									</Button>
								))}
								{card.action && card.action}
							</CardActions>
						</Card>
					</Grid>
				);
			})}
		</Grid>
	);
}
