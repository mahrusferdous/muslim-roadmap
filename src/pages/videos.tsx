import type { NextPage } from "next";
import Navbar from "../components/Head/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import VideoComponent from "../components/Videos/VideoComponent";

const Videos: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <VideoComponent />
            <Footer />
        </div>
    );
};

export default Videos;
