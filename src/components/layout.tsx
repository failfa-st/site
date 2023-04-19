import Footer from "@/components/footer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Box sx={{ minHeight: "100vh", a: { color: "currentColor", fontWeight: "bold" } }}>
				<AppBar position="fixed" sx={{ background: "transparent" }} elevation={0}>
					<Toolbar>
						<Link href="/" aria-label="home" style={{ color: "inherit" }}>
							<Box
								component="svg"
								viewBox="0 0 24 24"
								sx={{ fontSize: "2em", height: "1em", width: "1em" }}
							>
								<path
									fill="currentColor"
									d="m8,12c-.55,0-1-.45-1-1,0,0,0,0,0,0h-1v-1h4v1h-1s0,0,0,0c0,.55-.45,1-1,1Zm-4-2v4l.97,1.56-.02-4.03-.96-1.53Zm4,8h4v-1h-4v1Zm4,2v2s3,0,3,0l2.5-4h-4.3l-1.2,2Zm8-12v6l-1.28,2.05-4.33-.04.61-1.01h-3s0-13,0-13c7,0,8,6,8,6Zm-2,3l-2-2-2,2.01,2,1.99,2-2Zm-7,4h-1v1h1v-1Z"
								/>
							</Box>
						</Link>
					</Toolbar>
				</AppBar>
				{children}{" "}
			</Box>
			<Footer />
		</>
	);
}
