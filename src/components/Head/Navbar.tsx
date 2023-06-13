import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/NavBar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <Image src="/islam.png" alt="Muslim Roadmap Logo" width={100} height={80} />
            </Link>
            <div className={styles.navbarLinks}>
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
            </div>
        </nav>
    );
};

export default Navbar;
