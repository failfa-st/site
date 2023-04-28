import Layout from "@/components/layout";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
const YoutubeEmbed = dynamic(async () => await import("@/components/youtube-embed"), {
	ssr: false,
});

const ydIds = ["wHgwfotfxe8", "5_o53N6C0M0", "5JFSUOt08rc"];

export default function Page() {
	return (
		<Layout>
			<Container sx={{ mt: 6 }}>
				<Typography variant="h1">Videos</Typography>

				<NextLink passHref legacyBehavior href="/projects/fail4">
					<Button
						disableElevation
						disableTouchRipple
						component="a"
						color="primary"
						variant="contained"
					>
						Try fail4 now
					</Button>
				</NextLink>
				<Grid container columns={{ xs: 1, md: 2 }} spacing={2} sx={{ mt: 6 }}>
					{ydIds.map(ytId => (
						<Grid
							key={ytId}
							xs={1}
							sx={{
								alignItems: "stretch",
								display: "flex",
								justifyContent: "stretch",
							}}
						>
							<Card sx={{ flex: 1 }}>
								<CardMedia>
									<YoutubeEmbed ytId={ytId} />
								</CardMedia>
							</Card>
						</Grid>
					))}
					<Grid
						xs={1}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<NextLink
							passHref
							legacyBehavior
							href="https://www.youtube.com/channel/UCe7AJWRNZDNMZoH6FNvJKfg"
						>
							<Button
								disableElevation
								disableTouchRipple
								component="a"
								color="primary"
								endIcon={<YouTubeIcon fontSize="large" />}
							>
								Find us on YouTube
							</Button>
						</NextLink>
					</Grid>
				</Grid>
			</Container>
		</Layout>
	);
}
