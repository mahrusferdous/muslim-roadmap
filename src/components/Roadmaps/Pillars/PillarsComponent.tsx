import { MouseEventHandler } from "react";

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
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#f0f0f0",
                    padding: "20px",
                    boxSizing: "border-box",
                    color: "#000",
                }}
            >
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
