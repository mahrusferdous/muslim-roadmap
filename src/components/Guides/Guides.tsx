import styles from "../../styles/Guide.module.css";
import GuideNode from "./GuideNode";

const Guides = () => {
    return (
        <div className={styles.main}>
            <h1>Book</h1>
            <GuideNode
                site={"https://theclearquran.org/"}
                name={"The Clear Quran"}
                paragraph={`"The Clear Quran" offers modern and accurate English translations.`}
            />
            <h1>Online Resources</h1>
            <div className={styles.grid}>
                <GuideNode site={"https://quran.com/"} name={"Quran"} paragraph={"This website provides Quran in various different language."} />
                <GuideNode
                    site={"https://hadithcollection.com/"}
                    name={"Hadith"}
                    paragraph={"Collections of Hadith to learn more about Quran and Islam."}
                />
                <GuideNode site={"https://islamqa.info/en"} name={"Questions"} paragraph={"If you have any questions, go ahead and ask away."} />
                <GuideNode site={"https://seekersguidance.org/"} name={"Courses"} paragraph={"Free courses to guild you through your questions."} />
                <GuideNode site={"https://topquranclasses.com/"} name={"Classes"} paragraph={"This site provides classes regarding Quran."} />
                <GuideNode
                    site={"https://iou.edu.gm/"}
                    name={"University"}
                    paragraph={"Affordable university to get your degree on Islamic studies."}
                />
                {/* <GuideNode
                    site={"https://www.onemessagefoundation.com/"}
                    name={"Content Creator"}
                    paragraph={"One of the Islamic content creator answers questions in very entertaining format."}
                /> */}
                {/* <GuideNode site={"https://corpus.quran.com/"} name={"Corpus"} paragraph={"Break down of Quranic knowledge."} /> */}
                <GuideNode site={"https://islamic.network/"} name={"Open Source Community"} paragraph={"Feel free to contribute."} />
            </div>
        </div>
    );
};

export default Guides;
