import { Fira_Code, Poppins } from "next/font/google";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

export const poppins = Poppins({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: "#2c90fc",
				},
				secondary: {
					main: "#b827fc",
				},
			},
		},
		dark: {
			palette: {
				primary: {
					main: "#2c90fc",
				},
				secondary: {
					main: "#b827fc",
				},
				text: {
					secondary: "#ffffff",
				},
			},
		},
	},

	typography: {
		...poppins.style,
		h1: {
			fontSize: "3em",
			marginBottom: 24,
		},
		h2: {
			fontSize: "4.2em",
			marginBottom: 12,
		},
		h3: {
			fontSize: "1.7em",
			marginBottom: 12,
		},
		h4: {
			fontSize: "1.25em",
			marginBottom: 12,
		},
		h5: {
			fontSize: "1.75em",
		},
		h6: {
			fontSize: "0.8em",
			marginBottom: 12,
		},
	},
});

export default theme;
export const fontMono = Fira_Code({
	subsets: ["latin"],
});
