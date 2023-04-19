import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import Layout from "@/components/layout";
export default function SignIn() {
	return (
		<Layout>
			<Stack
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<Button variant="outlined" sx={{ px: 4, py: 2 }} startIcon={<GitHubIcon />}>
					LOGIN WITH GITHUB
				</Button>
			</Stack>
		</Layout>
	);
}
