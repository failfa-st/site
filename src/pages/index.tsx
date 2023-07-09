import FlockingSimulation from "@/components/flocking-simulation";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { InfoCards } from "@/components/info-cards";
import { WaitlistModal } from "@/components/waitlist-modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";

export default function Home() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box
			sx={{
				position: "relative",
				background:
					"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(15,15,15,1) 35%, rgba(25,25,25,1) 100%)",
			}}
		>
			<FlockingSimulation />
			<Container>
				<HeroSection />
				<InfoCards onOpenModal={handleOpen} />
				<WaitlistModal open={open} onClose={handleClose} />
			</Container>
			<Footer />
		</Box>
	);
}
