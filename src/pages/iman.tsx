import React from "react";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import Iman from "../components/Roadmaps/Iman/Iman";

const ImanPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Iman />
            <Footer />
        </div>
    );
};

export default ImanPage;
