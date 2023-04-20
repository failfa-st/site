import Layout from "@/components/layout";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function Page() {
	return (
		<Layout>
			<Container sx={{ mt: 6 }}>
				<Typography variant="h1">Videos</Typography>
				<Typography variant="h2">Videos</Typography>
				<Typography my={2}>Videos Videos Videos</Typography>
				<Link passHref legacyBehavior href="/projects/fail4">
					<Button
						disableElevation
						disableTouchRipple
						component="a"
						color="primary"
						variant="contained"
					>
						Try fail4 now
					</Button>
				</Link>
				<Grid container columns={{ xs: 1, md: 2 }} spacing={2} sx={{ mt: 6 }}>
					<Grid xs={1}>Video</Grid>
					<Grid xs={1}>Video</Grid>
					<Grid xs={1}>Video</Grid>
					<Grid xs={1}>Video</Grid>
				</Grid>
			</Container>
		</Layout>
	);
}
