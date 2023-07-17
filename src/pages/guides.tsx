import type { NextPage } from "next";
import Guides from "../components/Guides/Guides";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
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
