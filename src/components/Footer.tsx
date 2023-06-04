import Image from "next/image";
import styles from "../styles/Home.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://muslimroadmap.com" target="_blank" rel="noopener noreferrer">
                Powered by{" "}
                <span className={styles.logo}>
                    <Image src="/islam.png" alt="Muslim Roadmap Logo" width={19} height={18} />
                </span>
                Muslim Roadmap
            </a>
        </footer>
    );
};

export default Footer;
