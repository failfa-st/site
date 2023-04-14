import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "@/atoms/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>failfast</title>
        <meta name="description" content="AI powered tools and services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.glitch1}></div>
          <div className={styles.glitch2}></div>
          <h1 className={styles.logo}>failfast</h1>
          <p>Rapid AI-powered development & innovation</p>
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/failfa-st"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Open Source <span>🤖</span>
            </h2>
            <p className={inter.className}>
              Explore our GitHub organization, where you'll find all of our open
              source projects. Contribute, collaborate, and stay up-to-date with
              the latest in failfast innovations.
            </p>
          </a>

          <a
            href="https://youtube.com/@failfa-st"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn & Experience <span>🎥</span>
            </h2>
            <p className={inter.className}>
              Experience the fascinating world of failfast through our YouTube
              channel, demonstrating our tools in action and the power of
              AI-driven development. Keep an eye out for more insightful
              updates!
            </p>
          </a>

          <a
            href="https://discord.gg/m3TBB9XEkb"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Connect & Grow <span>💬</span>
            </h2>
            <p className={inter.className}>
              Join our thriving Discord community to connect with like-minded
              people, share ideas, and collaborate on exciting AI-driven
              projects. Be part of the failfast family!
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
