import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import DiagramComponent from "../components/DiagramComponent";

const Roadmaps: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <DiagramComponent />
            <Footer />
        </div>
    );
};

export default Roadmaps;
