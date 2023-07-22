import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/NavBar.module.css";
import { ThemeContext } from "../Context/ThemeContext";

interface ThemeContextProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext) as ThemeContextProps;
    const [logoWidth, setLogoWidth] = useState(100);
    const [logoHeight, setLogoHeight] = useState(80);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const updateLogoSize = () => {
            const isSmallScreen = window.innerWidth < 600;
            const width = isSmallScreen ? 50 : 100;
            const height = isSmallScreen ? 40 : 80;
            setLogoWidth(width);
            setLogoHeight(height);
            setIsSmallScreen(isSmallScreen);
        };

        updateLogoSize();
        window.addEventListener("resize", updateLogoSize);

        return () => {
            window.removeEventListener("resize", updateLogoSize);
        };
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const moonEmoji = "☽";
    const sunEmoji = "✹";

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <Image src="/islam.svg" alt="Muslim Roadmap Logo" width={logoWidth} height={logoHeight} />
            </Link>
            <button style={{ width: "30px" }} onClick={toggleTheme}>
                {isDarkMode ? sunEmoji : moonEmoji}
            </button>
            <div className={styles.navbarLinks}>
                {isSmallScreen ? (
                    <div className={styles.navbarRight}>
                        <button
                            style={
                                isDarkMode
                                    ? { borderColor: "transparent", backgroundColor: "black", borderRadius: "5px" }
                                    : { borderColor: "transparent", backgroundColor: "white", borderRadius: "5px" }
                            }
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className={isDarkMode ? styles.hamburgerDark : styles.hamburger}></div>
                            <div className={isDarkMode ? styles.hamburgerDark : styles.hamburger}></div>
                            <div className={isDarkMode ? styles.hamburgerDark : styles.hamburger}></div>
                        </button>
                        {isOpen && (
                            <div className={isDarkMode ? styles.menuDark : styles.menu}>
                                <Link onClick={() => setIsOpen(!isOpen)} href="/roadmaps" passHref className={styles.navbarLink}>
                                    Roadmaps
                                </Link>
                                <Link onClick={() => setIsOpen(!isOpen)} href="/guides" passHref className={styles.navbarLink}>
                                    Guides
                                </Link>
                                <Link onClick={() => setIsOpen(!isOpen)} href="/videos" passHref className={styles.navbarLink}>
                                    Videos
                                </Link>
                                <button className={isDarkMode ? styles.exitbtnDark : styles.exitbtn} onClick={() => setIsOpen(!isOpen)}>
                                    X
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={styles.navbarRight}>
                        <Link href="/roadmaps" passHref className={styles.navbarLink}>
                            Roadmaps
                        </Link>
                        <Link href="/guides" passHref className={styles.navbarLink}>
                            Guides
                        </Link>
                        <Link href="/videos" passHref className={styles.navbarLink}>
                            Videos
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
