import React from "react";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import Base from "../components/Roadmaps/BaseRoadmap/Base";

const base = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Base />
            <Footer />
        </div>
    );
};

export default base;
