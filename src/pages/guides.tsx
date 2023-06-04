import type { NextPage } from "next";
import Guides from "../components/Guides";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const GuidesPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Guides />
            <Footer />
        </div>
    );
};

export default GuidesPage;
