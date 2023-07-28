import React from "react";
import Pillars from "../components/Roadmaps/Pillars/Pillars";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

const PillarsPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Pillars />
            <Footer />
        </div>
    );
};

export default PillarsPage;
