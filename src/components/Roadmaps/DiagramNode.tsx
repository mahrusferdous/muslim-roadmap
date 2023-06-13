import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const DiagramNode = () => {
    return (
        <div className={styles.main}>
            <div className={styles.grid}>
                <Link href="/diagram" className={styles.card}>
                    <h2>Pillars</h2>
                </Link>
            </div>
        </div>
    );
};

export default DiagramNode;
