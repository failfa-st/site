import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/lib/createEmotionCache";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "@/lib/theme";
import { CssBaseline } from "@mui/material";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/react";
import Typography from "@mui/material/Typography";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth/core/types";
import { CookieConsentProvider } from "@use-cookie-consent/react";

const CookieBanner = dynamic(async () => await import("@/components/cookie-banner"), {
	ssr: false,
});
interface ComponentProps {
	children?: ReactNode;
}
const components = {
	h1: ({ children }: ComponentProps) => (
		<Typography variant="h1" my={2}>
			{children}
		</Typography>
	),
	h2: ({ children }: ComponentProps) => (
		<Typography variant="h2" my={2}>
			{children}
		</Typography>
	),
	h3: ({ children }: ComponentProps) => (
		<Typography variant="h3" my={2}>
			{children}
		</Typography>
	),
	h4: ({ children }: ComponentProps) => (
		<Typography variant="h4" my={2}>
			{children}
		</Typography>
	),
	h5: ({ children }: ComponentProps) => (
		<Typography variant="h5" my={2}>
			{children}
		</Typography>
	),
	h6: ({ children }: ComponentProps) => (
		<Typography variant="h6" my={1}>
			{children}
		</Typography>
	),
	p: ({ children }: ComponentProps) => (
		<Typography component="p" my={1}>
			{children}
		</Typography>
	),
	ul: ({ children }: ComponentProps) => (
		<Typography component="ul" my={1}>
			{children}
		</Typography>
	),
	li: ({ children }: ComponentProps) => <Typography component="li">{children}</Typography>,
};

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	session?: Session;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps, session } = props;
	const { pathname } = useRouter();
	return (
		<SessionProvider session={session}>
			<CookieConsentProvider
			useCookieConsentHooksOptions={{
				defaultConsent: {},
			}}
		>
			<CacheProvider value={emotionCache}>
				<Head>
					<title>failfa.st</title>
					<meta name="description" content="Rapid AI-powered development & innovation" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/icons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/icons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/icons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/icons/site.webmanifest" />
					<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
				</Head>
				<CssVarsProvider defaultMode="system" theme={theme}>
					<CssBaseline />
					<MDXProvider components={components}>
						<Component {...pageProps} />
					</MDXProvider>
					{pathname !== "/projects/fail4/live" && <CookieBanner />}
				</CssVarsProvider>
			</CacheProvider>
		</CookieConsentProvider>
		</SessionProvider>
	);
}
