import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Image className={styles.img} src="/islam.svg" alt="Islam" width={500} height={400} />

                <h1 className={styles.title}>
                    May <code className={styles.al}>Allah</code> Guide You
                </h1>

                <p className={styles.description}>
                    <code className={styles.code}>Muslim Roadmap</code> is a community effort in collecting resources for anyone to learn about Islam.
                </p>
            </main>
        </div>
    );
};

export default Home;
