import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Muslim Roadmap</title>
                <meta name="description" content="Generated by Muslim Roadmap team" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Image className={styles.img} src="/islam.png" alt="Islam" width={500} height={400} />

                <h1 className={styles.title}>
                    May <code className={styles.al}>Allah</code> Guild You
                </h1>

                <p className={styles.description}>
                    <code className={styles.code}>Muslim Roadmap</code> is a community effort to collect resources for anyone to learn about Islam.
                </p>

                <div className={styles.grid}>
                    <a href="https://quran.com/" className={styles.card} target="_blank" rel="noopener noreferrer">
                        <h2>Quran &rarr;</h2>
                        <p>This website provides Quran in various different language.</p>
                    </a>

                    <a href="https://hadithcollection.com/" className={styles.card} target="_blank" rel="noopener noreferrer">
                        <h2>Hadith &rarr;</h2>
                        <p>Collections of Hadith to learn more about Quran and Islam.</p>
                    </a>

                    <a href="https://islamqa.info/en" className={styles.card} target="_blank" rel="noopener noreferrer">
                        <h2>Questions &rarr;</h2>
                        <p>If you have any questions, go ahead and ask away.</p>
                    </a>

                    <a href="https://seekersguidance.org/" className={styles.card}>
                        <h2>Courses &rarr;</h2>
                        <p>Free courses to guild you through your questions.</p>
                    </a>

                    <a href="https://topquranclasses.com/" className={styles.card} target="_blank" rel="noopener noreferrer">
                        <h2>Classes &rarr;</h2>
                        <p>This site provides classes regarding Quran.</p>
                    </a>

                    <a href="https://iou.edu.gm/" className={styles.card} target="_blank" rel="noopener noreferrer">
                        <h2>University &rarr;</h2>
                        <p>Affordable university to get your degree on Islamic studies.</p>
                    </a>

                    <a href="https://www.onemessagefoundation.com/" className={styles.card} target="_blank" rel="noopener noreferrer">
                        <h2>Content Creator &rarr;</h2>
                        <p>One of the Islamic content creator answers questions in very entertaining format.</p>
                    </a>

                    <a href="https://corpus.quran.com/" className={styles.card} target="_blank" rel="noopener noreferrer">
                        <h2>Corpus &rarr;</h2>
                        <p>Break down of Quranic knowledge.</p>
                    </a>

                    <a href="https://islamic.network/" className={styles.card} target="_blank" rel="noopener noreferrer">
                        <h2>Open Source Community &rarr;</h2>
                        <p>Feel free to contribute to open source community.</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="https://muslimroadmap.com" target="_blank" rel="noopener noreferrer">
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/islam.png" alt="Muslim Roadmap Logo" width={19} height={18} />
                    </span>
                    Muslim Roadmap
                </a>
            </footer>
        </div>
    );
};

export default Home;
