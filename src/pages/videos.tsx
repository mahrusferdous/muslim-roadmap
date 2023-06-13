import type { NextPage } from "next";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

const Videos: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Footer />
        </div>
    );
};

export default Videos;
