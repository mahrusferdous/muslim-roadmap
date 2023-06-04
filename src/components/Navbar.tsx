import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a href="https://muslimroadmap.com" className={styles.logo}>
                <Image src="/islam.png" alt="Muslim Roadmap Logo" width={100} height={80} />
            </a>
            <div className={styles.navbarLinks}>
                <div className={styles.navbarRight}>
                    <Link href="https://muslimroadmap.com" legacyBehavior>
                        <a className={styles.navbarLink}>Home</a>
                    </Link>
                    <Link href="https://muslimroadmap.com" legacyBehavior>
                        <a className={styles.navbarLink}>About</a>
                    </Link>
                    <Link href="https://muslimroadmap.com" legacyBehavior>
                        <a className={styles.navbarLink}>Contact</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
