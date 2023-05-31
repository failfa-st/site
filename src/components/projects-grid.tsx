import React from "react";
import {
	Grid,
	Card,
	CardHeader,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@mui/material";

export interface Project {
	title: string;
	content: string;
	color: string;
	link: string;
	type: "repo" | "demo";
}

interface ProjectsGridProps {
	projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
	return (
		<Grid container spacing={2} sx={{ mt: 4, mb: 10 }}>
			{projects.map(({ title, content, color, link, type }, index) => {
				const buttonText = type === "repo" ? "View Code" : "Live Demo";
				return (
					<Grid item md={4} key={index}>
						<Card
							sx={{
								display: "flex",
								flexDirection: "column",
								height: "100%",
							}}
						>
							<CardHeader
								title={title}
								sx={{ background: color, textAlign: "center" }}
							/>
							<CardContent sx={{ flex: 1 }}>
								<Typography variant="body1">{content}</Typography>
							</CardContent>
							<CardActions sx={{ justifyContent: "center" }}>
								<Button
									variant="contained"
									color="secondary"
									href={link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{buttonText}
								</Button>
							</CardActions>
						</Card>
					</Grid>
				);
			})}
		</Grid>
	);
}
