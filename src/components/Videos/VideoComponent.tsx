import styles from "../../styles/Video.module.css";

const VideoComponent = () => {
    return (
        <div>
            <h1>Important Videos</h1>
            <div className={styles.cardMain}>
                <a href="https://www.youtube.com/watch?v=VguyeTH76C0" className={styles.largeCard} target="_blank" rel="noopener noreferrer">
                    <h2>Power of Iman</h2>
                    <p>Quick video on importance of Iman.</p>
                </a>
                <a href="https://www.youtube.com/watch?v=2xS70Zn-jRk" className={styles.largeCard} target="_blank" rel="noopener noreferrer">
                    <h2>How to Wudhu</h2>
                    <p>Video on how to wudhu.</p>
                </a>
                <a href="https://www.youtube.com/watch?v=ZQjK-GlTjEQ" className={styles.largeCard} target="_blank" rel="noopener noreferrer">
                    <h2>How to Pray</h2>
                    <p>Descriptive video on how to pray.</p>
                </a>
            </div>
            <h1>Picked Content Creators</h1>
            <div className={styles.cardMain}>
                <a href="https://www.youtube.com/@OneMessageFoundation" className={styles.largeCard} target="_blank" rel="noopener noreferrer">
                    <h2>One Message Foundation</h2>
                    <p>Delivering insightful da&apos;wah.</p>
                </a>
                <a href="https://www.youtube.com/@muftimenkofficial" className={styles.largeCard} target="_blank" rel="noopener noreferrer">
                    <h2>Mufti Menk</h2>
                    <p>Islam with comedy.</p>
                </a>
                <a href="https://www.youtube.com/@assimalhakeem" className={styles.largeCard} target="_blank" rel="noopener noreferrer">
                    <h2>assimalhakeem</h2>
                    <p>Sticks and stones will break your bones.</p>
                </a>
                <a href="https://www.youtube.com/@HamzasDen" className={styles.largeCard} target="_blank" rel="noopener noreferrer">
                    <h2>Hamza&apos;s Den</h2>
                    <p>Amazing convert giving insightful da&apos;wah.</p>
                </a>
            </div>
        </div>
    );
};

export default VideoComponent;
