import React from "react";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import BaseComponent from "../components/Roadmaps/BaseRoadmap/BaseComponent";

const base = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <BaseComponent />
            <Footer />
        </div>
    );
};

export default base;
