import React from "react";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import Prophets from "../components/Roadmaps/Prophets/Prophets";

const ProphetsPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Prophets />
            <Footer />
        </div>
    );
};

export default ProphetsPage;
