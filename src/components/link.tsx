import NextLink, { LinkProps } from "next/link";
import { ReactNode } from "react";
import MuiLink from "@mui/material/Link";

export function Link({ children, ...props }: LinkProps & { children: ReactNode }) {
	return (
		<NextLink {...props} legacyBehavior passHref>
			<MuiLink>{children}</MuiLink>
		</NextLink>
	);
}
