import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import Layout from "@/components/layout";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default function SignIn({
	providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
				<Button
					variant="outlined"
					sx={{ px: 4, py: 2 }}
					startIcon={<GitHubIcon />}
					onClick={() => {
						void signIn("github");
					}}
				>
					LOGIN WITH GITHUB
				</Button>
			</Stack>
		</Layout>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions);

	if (session) {
		return { redirect: { destination: "/" } };
	}

	const providers = await getProviders();

	return {
		props: { providers: providers ?? [] },
	};
}
