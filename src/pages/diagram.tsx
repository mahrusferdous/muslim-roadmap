import React from "react";
import DiagramComponent from "../components/Roadmaps/DiagramComponent";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

const DiagramPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <DiagramComponent />;
            <Footer />
        </div>
    );
};

export default DiagramPage;
