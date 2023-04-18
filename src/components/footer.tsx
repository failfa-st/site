import NextLink, { LinkProps } from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { ReactNode } from "react";

function Link({ children, ...props }: LinkProps & { children: ReactNode }) {
	return (
		<NextLink {...props} legacyBehavior passHref>
			<MuiLink>{children}</MuiLink>
		</NextLink>
	);
}

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				display: "flex",
				gap: 1,
				flexWrap: "wrap",
				p: 2,
			}}
		>
			<Typography>© 2023 failfa.st</Typography>
			<Stack sx={{ flex: 1 }}>
				<Box
					sx={{
						display: "flex",
						gap: 1,
						flexWrap: "wrap",
						justifyContent: "flex-end",
						p: 2,
					}}
				>
					<Link href="/legal/data-policy">Data Policy</Link>
					<Link href="/legal/imprint">Imprint</Link>

					<MuiLink
						href="https://twitter.com/failfa_st"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</MuiLink>
					<MuiLink
						href="https://www.youtube.com/@failfa-st"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</MuiLink>
					<MuiLink
						href="https://discord.com/invite/m3TBB9XEkb"
						target="_blank"
						rel="noopener noreferrer"
					>
						Discord
					</MuiLink>
				</Box>
			</Stack>
		</Box>
	);
};

export default Footer;
