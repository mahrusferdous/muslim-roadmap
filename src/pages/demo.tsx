import React from "react";
import Demos from "../components/Roadmaps/Demo/Demo";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

const Demo = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Demos />
            <Footer />
        </div>
    );
};

export default Demo;
