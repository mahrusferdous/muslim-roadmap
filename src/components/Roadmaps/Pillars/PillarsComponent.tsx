import { MouseEventHandler } from "react";
import styles from "../../../styles/Diagram.module.css";

interface PillarsComponentProps {
    selectedNode: any;
    setSelectedNode: React.Dispatch<React.SetStateAction<any>>;
}

function PillarsComponent({ selectedNode, setSelectedNode }: PillarsComponentProps) {
    const handleCloseSidebar: MouseEventHandler<HTMLButtonElement> = (event) => {
        setSelectedNode(false);
    };
    return (
        <div>
            <div className={styles.side}>
                <h2>{selectedNode.data.label}</h2>
                <p>{selectedNode.data.paragraph}</p>
                {selectedNode.data.point && (
                    <ul>
                        {Object.values(selectedNode.data.point).map((point) => (
                            <li key={selectedNode.id}>{point as string}</li>
                        ))}
                    </ul>
                )}

                <button onClick={handleCloseSidebar}>Close</button>
            </div>
        </div>
    );
}

export default PillarsComponent;
