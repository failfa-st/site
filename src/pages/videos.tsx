import Layout from "@/components/layout";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import YoutubeEmbed from "@/components/youtube-embed";

const ydIds = ["5_o53N6C0M0", "5JFSUOt08rc"];

export default function Page() {
	return (
		<Layout>
			<Container sx={{ mt: 6 }}>
				<Typography variant="h1">Videos</Typography>
				<Typography variant="h2">Prototypes, Tutorials, and More</Typography>
				<Typography my={2}>
					Explore our curated selection of YouTube videos, designed to offer valuable
					insights and professional guidance on AI-driven development. Our library caters
					to a diverse audience, from experienced developers to curious learners,
					providing high-quality, informative content to enhance your skills.
				</Typography>
				<Typography my={2}>
					Explore our video collection and unlock the full potential of our software to
					elevate your development experience.
				</Typography>
				{/*	<Link passHref legacyBehavior href="/projects/fail4">
					<Button
						disableElevation
						disableTouchRipple
						component="a"
						color="primary"
						variant="contained"
					>
						Try fail4 now
					</Button>
				</Link>*/}
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
				</Grid>
			</Container>
		</Layout>
	);
}
