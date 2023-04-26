import Layout from "@/components/layout";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import Link from "next/link";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const CodesandboxEmbed = dynamic(async () => await import("@/components/codesandbox-embed"), {
	ssr: false,
});

export default function Page() {
	return (
		<Layout>
			<Container sx={{ mt: 6 }}>
				<Typography variant="h1">100% Prompt driven Codesandboxes</Typography>

				{/*<Link passHref legacyBehavior href="/projects/fail4">
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
					<Grid
						xs={1}
						sx={{ alignItems: "stretch", display: "flex", justifyContent: "stretch" }}
					>
						<Card sx={{ flex: 1 }}>
							<CardMedia>
								<CodesandboxEmbed src="https://codesandbox.io/embed/infinite-running-connected-dots-animation-is-in-darkmode-is-for-codepen-io-oovdz1"></CodesandboxEmbed>
							</CardMedia>
							<CardContent>
								<Typography mt={2} variant="h4" component="h3">
									infinite running &quot;connected dots&quot; animation, is in
									darkmode, is for codepen.io
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						xs={1}
						sx={{ alignItems: "stretch", display: "flex", justifyContent: "stretch" }}
					>
						<Card sx={{ flex: 1 }}>
							<CardMedia>
								<CodesandboxEmbed src="https://codesandbox.io/embed/matrix-code-8rgb8t"></CodesandboxEmbed>
							</CardMedia>
							<CardContent>
								<Typography mt={2} variant="h4" component="h3">
									matrix code
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						xs={1}
						sx={{ alignItems: "stretch", display: "flex", justifyContent: "stretch" }}
					>
						<Card sx={{ flex: 1 }}>
							<CardMedia>
								<CodesandboxEmbed src="https://codesandbox.io/embed/cool-click-effect-add-dark-background-write-click-into-the-middle-ss4m9b"></CodesandboxEmbed>
							</CardMedia>
							<CardContent>
								<Typography mt={2} variant="h4" component="h3">
									cool click effect, add dark background, write &quot;click&quot;
									into the middle
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						xs={1}
						sx={{ alignItems: "stretch", display: "flex", justifyContent: "stretch" }}
					>
						<Card sx={{ flex: 1 }}>
							<CardMedia>
								<CodesandboxEmbed src="https://codesandbox.io/embed/rainbow-colored-balls-in-various-sizes-bouncing-on-the-walls-and-colliding-with-each-other-91ydi2"></CodesandboxEmbed>
							</CardMedia>
							<CardContent>
								<Typography mt={2} variant="h4" component="h3">
									rainbow colored balls in various sizes, bouncing on the walls
									and colliding with each other
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						xs={1}
						sx={{ alignItems: "stretch", display: "flex", justifyContent: "stretch" }}
					>
						<Card sx={{ flex: 1 }}>
							<CardMedia>
								<CodesandboxEmbed src="https://codesandbox.io/embed/fancy-visual-effect-for-codepen-io-dark-background-infinite-motion-endless-world-9pbzpr"></CodesandboxEmbed>
							</CardMedia>
							<CardContent>
								<Typography mt={2} variant="h4" component="h3">
									fancy visual effect for codepen.io, dark background, infinite
									motion, endless world
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						xs={1}
						sx={{ alignItems: "stretch", display: "flex", justifyContent: "stretch" }}
					>
						<Card sx={{ flex: 1 }}>
							<CardMedia>
								<CodesandboxEmbed src="https://codesandbox.io/embed/flow-field-slow-motion-animation-rainbow-colors-dark-background-wsneu3"></CodesandboxEmbed>
							</CardMedia>
							<CardContent>
								<Typography mt={2} variant="h4" component="h3">
									flow field, slow motion, animation, rainbow colors, dark
									background
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Layout>
	);
}
