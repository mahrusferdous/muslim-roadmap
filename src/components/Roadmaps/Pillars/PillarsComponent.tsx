import { MouseEventHandler } from "react";

interface PillarsComponentProps {
    selectedNodeId: string | boolean;
    setSelectedNodeId: (value: string | boolean) => void;
}

function PillarsComponent({ selectedNodeId, setSelectedNodeId }: PillarsComponentProps) {
    const handleCloseSidebar: MouseEventHandler<HTMLButtonElement> = (event) => {
        setSelectedNodeId(false);
    };
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "700px",
                    height: "100%",
                    backgroundColor: "#f0f0f0",
                    padding: "20px",
                    boxSizing: "border-box",
                    color: "#000",
                }}
            >
                <h2>{selectedNodeId}</h2>
                <button onClick={handleCloseSidebar}>Close</button>
            </div>
        </div>
    );
}

export default PillarsComponent;
