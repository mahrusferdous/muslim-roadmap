import React from "react";
import styles from "../../styles/Diagram.module.css";
import Link from "next/link";

const DiagramNode: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/pillars" className={styles.card}>
                        <h2>Pillars</h2>
                        {/* <p>The Five Pillars are the foundation of a Muslim&apos;s faith and practice.</p> */}
                    </Link>
                    <Link href="/iman" className={styles.card}>
                        <h2>Iman</h2>
                        {/* <p>Iman refers to a person&apos;s faith or belief.</p> */}
                    </Link>
                    <Link href="/prophets" className={styles.card}>
                        <h2>Prophets</h2>
                        {/* <p>Prophets are the messengers of God.</p> */}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DiagramNode;
