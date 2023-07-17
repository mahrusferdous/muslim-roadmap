import type { NextPage } from "next";
import Header from "../components/Head/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Head/Navbar";
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
