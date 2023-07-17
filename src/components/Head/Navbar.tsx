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

    useEffect(() => {
        const updateLogoSize = () => {
            const isSmallScreen = window.innerWidth < 600;
            const width = isSmallScreen ? 50 : 100;
            const height = isSmallScreen ? 40 : 80;
            setLogoWidth(width);
            setLogoHeight(height);
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
            <div className={styles.navbarLinks}>
                <div className={styles.navbarRight}>
                    <button style={{ width: "30px" }} onClick={toggleTheme}>
                        {isDarkMode ? sunEmoji : moonEmoji}
                    </button>
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
            </div>
        </nav>
    );
};

export default Navbar;
