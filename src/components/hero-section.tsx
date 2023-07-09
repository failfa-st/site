import { CustomSvg } from "@/components/custom-svg";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

export function HeroSection() {
	return (
		<Stack p={2} justifyContent="center" alignItems="center" sx={{ minHeight: 550 }}>
			<Stack flexDirection="row" justifyContent="center" alignItems="center">
				<CustomSvg
					variant="failfast"
					iconSize={{
						height: 80,
						width: 80,
					}}
				/>

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
	);
}
