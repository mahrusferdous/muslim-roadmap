import React from "react";
import ReactFlow, { ReactFlowProvider, Background, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes, initialEdges } from "../../../data/ProphetData";

const Prophets = () => {
    const minimapStyle: React.CSSProperties = {
        height: 120,
        backgroundColor: "transparent",
        position: "absolute",
        bottom: "10px",
        left: "10px",
    };
    return (
        <ReactFlowProvider>
            <div
                style={{
                    width: "100%",
                    height: "80vh",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Background color="#aaa" gap={40} style={{ pointerEvents: "none" }} />
                    <ReactFlow style={{ fontWeight: "bold" }} nodes={initialNodes} edges={initialEdges} fitView />
                    <MiniMap style={minimapStyle} zoomable pannable />
                </div>
            </div>
        </ReactFlowProvider>
    );
};

export default Prophets;
