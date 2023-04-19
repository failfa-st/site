import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "@/components/link";

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
					<Link href="/gallery">Gallery</Link>
					<Link href="/videos">Videos</Link>
				</Box>
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
					<Link href="/legal/cookie-policy">Cookie Policy</Link>
					<Typography>© 2023 failfa.st</Typography>
				</Box>
			</Stack>
		</Box>
	);
};

export default Footer;
