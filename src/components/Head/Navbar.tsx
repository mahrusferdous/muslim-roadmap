import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/NavBar.module.css";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeToggle = () => {
        setIsDarkMode((prevMode) => !prevMode);
        // You can implement logic here to toggle the dark/light mode styles or theme
    };

    const moonEmoji = "☽";
    const sunEmoji = "✹";

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <Image src="/islam.svg" alt="Muslim Roadmap Logo" width={100} height={80} />
            </Link>
            <div className={styles.navbarLinks}>
                <div className={styles.navbarRight}>
                    <button style={{ width: "30px" }} onClick={handleModeToggle}>
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
