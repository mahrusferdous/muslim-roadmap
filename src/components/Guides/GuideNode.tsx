import React from "react";
import styles from "../../styles/Guide.module.css";

interface GuideNodeProps {
    site: string;
    name: string;
    paragraph: string;
}

const GuideNode = ({ site, name, paragraph }: GuideNodeProps) => {
    return (
        <a href={site} className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>{name} &rarr;</h2>
            <p>{paragraph}</p>
        </a>
    );
};

export default GuideNode;
