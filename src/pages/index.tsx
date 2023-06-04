import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
};

export default Index;
