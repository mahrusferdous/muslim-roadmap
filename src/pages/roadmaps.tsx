import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const Roadmaps: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />

            <Footer />
        </div>
    );
};

export default Roadmaps;
