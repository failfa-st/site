import NextLink, { LinkProps } from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { ReactNode } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import SvgIcon from "@mui/material/SvgIcon";

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
					<Link href="/legal/imprint">Imprint</Link>
					<Link href="/legal/data-policy">Data Policy</Link>
					<Typography>© 2023 failfa.st</Typography>
				</Box>
			</Stack>
		</Box>
	);
};

export default Footer;
