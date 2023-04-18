import styles from "@/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.left}>© 2023 failfa.st</div>
				<div className={styles.right}>
					<Link href="/legal/data-policy">Data Policy</Link>
					<Link href="/legal/imprint">Imprint</Link>
					<Link
						href="https://twitter.com/failfa_st"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</Link>
					<Link
						href="https://www.youtube.com/@failfa-st"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
