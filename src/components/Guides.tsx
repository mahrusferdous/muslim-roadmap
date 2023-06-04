import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Guides: NextPage = () => {
    return (
        <div className={styles.main}>
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
        </div>
    );
};

export default Guides;
