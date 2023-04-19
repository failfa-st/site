import Layout from "@/components/layout";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import Link from "next/link";
import Button from "@mui/material/Button";

const CodesandboxEmbed = dynamic(async () => await import("@/components/codesandbox-embed"), {
	ssr: false,
});

export default function Page() {
	return (
		<Layout>
			<Container sx={{ mt: 6 }}>
				<Typography variant="h1">100% Prompt driven Codesandboxes</Typography>
				<Typography variant="h2">
					Welcome to the Future of Coding: &quot;fail4&quot; Generated Codesandboxes!
				</Typography>
				<Typography my={2}>
					Dive into the world of AI-driven coding with &quot;fail4&quot;, our innovative
					prompt-driven tool that revolutionizes the way you create canvas experiments.
					Customize your code generation with options like temperature and watch as the AI
					crafts fully interactive codesandboxes tailored to your needs.
				</Typography>
				<Typography my={2}>
					Explore, experiment, and elevate your coding skills with our diverse collection
					of &quot;fail4&quot; generated codesandboxes. Embrace the future of AI-powered
					development and unleash your creativity today!
				</Typography>
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
					<Grid xs={1}>
						<CodesandboxEmbed src="https://codesandbox.io/embed/infinite-running-connected-dots-animation-is-in-darkmode-is-for-codepen-io-oovdz1"></CodesandboxEmbed>
						<Typography mt={2} variant="h4" component="h3">
							infinite running &quot;connected dots&quot; animation, is in darkmode,
							is for codepen.io
						</Typography>
					</Grid>
					<Grid xs={1}>
						<CodesandboxEmbed src="https://codesandbox.io/embed/matrix-code-8rgb8t"></CodesandboxEmbed>
						<Typography mt={2} variant="h4" component="h3">
							matrix code
						</Typography>
					</Grid>
					<Grid xs={1}>
						<CodesandboxEmbed src="https://codesandbox.io/embed/cool-click-effect-add-dark-background-write-click-into-the-middle-ss4m9b"></CodesandboxEmbed>
						<Typography mt={2} variant="h4" component="h3">
							cool click effect, add dark background, write &quot;click&quot; into the
							middle
						</Typography>
					</Grid>
					<Grid xs={1}>
						<CodesandboxEmbed src="https://codesandbox.io/embed/rainbow-colored-balls-in-various-sizes-bouncing-on-the-walls-and-colliding-with-each-other-91ydi2"></CodesandboxEmbed>
						<Typography mt={2} variant="h4" component="h3">
							rainbow colored balls in various sizes, bouncing on the walls and
							colliding with each other
						</Typography>
					</Grid>
					<Grid xs={1}>
						<CodesandboxEmbed src="https://codesandbox.io/embed/fancy-visual-effect-for-codepen-io-dark-background-infinite-motion-endless-world-9pbzpr"></CodesandboxEmbed>
						<Typography mt={2} variant="h4" component="h3">
							fancy visual effect for codepen.io, dark background, infinite motion,
							endless world
						</Typography>
					</Grid>
					<Grid xs={1}>
						<CodesandboxEmbed src="https://codesandbox.io/embed/flow-field-slow-motion-animation-rainbow-colors-dark-background-wsneu3"></CodesandboxEmbed>
						<Typography mt={2} variant="h4" component="h3">
							flow field, slow motion, animation, rainbow colors, dark background
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Layout>
	);
}
