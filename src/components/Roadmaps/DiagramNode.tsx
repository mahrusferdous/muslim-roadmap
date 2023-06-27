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
                    </Link>
                    <Link href="/iman" className={styles.card}>
                        <h2>Iman</h2>
                    </Link>
                    <Link href="/prophets" className={styles.card}>
                        <h2>Prophets</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DiagramNode;
