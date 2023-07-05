import React from "react";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import FlowChart from "../components/Roadmaps/BaseRoadmap/FlowChart";

const base = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <FlowChart />
            <Footer />
        </div>
    );
};

export default base;
