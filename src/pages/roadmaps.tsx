import type { NextPage } from "next";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import DiagramNode from "../components/Roadmaps/DiagramNode";

const Roadmaps: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <DiagramNode />
            <Footer />
        </div>
    );
};

export default Roadmaps;
