import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>failfast</title>
        <meta name="description" content="AI powered tools and services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            AI powered tools and services
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.glitch1}></div>
          <div className={styles.glitch2}></div>
          <h1 className={styles.logo}>
                failfast
          </h1>
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/failfa-st/fail1"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              fail1 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Build JavaScript Apps 100% prompt driven (GPT)
            </p>
          </a>

          <a
            href="https://twitch.tv/failfa_st"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Watch <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Witness incredible AI technology in action as we generate any app you can imagine – live on Twitch!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
