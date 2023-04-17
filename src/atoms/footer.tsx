import styles from "@/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>© 2023 failfast</div>
        <div className={styles.right}>
          <Link href="/legal/data-policy">Legal</Link>
          <a
            href="https://twitter.com/failfa_st"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
