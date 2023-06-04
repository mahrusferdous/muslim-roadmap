import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Navbar />

            <main className={styles.main}>
                <Image className={styles.img} src="/islam.png" alt="Islam" width={500} height={400} />

                <h1 className={styles.title}>
                    May <code className={styles.al}>Allah</code> Guild You
                </h1>

                <p className={styles.description}>
                    <code className={styles.code}>Muslim Roadmap</code> is a community effort in collecting resources for anyone to learn about Islam.
                </p>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
