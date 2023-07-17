import React, { useState } from "react";
import ReactFlow, { ReactFlowProvider, Background, MiniMap } from "reactflow";
import PillarsComponent from "./PillarsComponent";
import "reactflow/dist/style.css";
import { initialNodes, initialEdges } from "../../../data/PillarData";

function DiagramComponent() {
    const [selectedNode, setSelectedNode] = useState<Object>(false);

    const handleNodeClick = (event: any, node: { data: React.SetStateAction<Object> }) => {
        setSelectedNode(node);
    };

    const isSidebarOpen = selectedNode !== false;

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
                    // position: "relative",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Background color="#aaa" gap={40} style={{ pointerEvents: "none" }} />
                    <ReactFlow style={{ fontWeight: "bold" }} nodes={initialNodes} edges={initialEdges} onNodeClick={handleNodeClick} fitView />
                    <MiniMap style={minimapStyle} zoomable pannable />
                </div>
                {isSidebarOpen && <PillarsComponent selectedNode={selectedNode} setSelectedNode={setSelectedNode} />}
            </div>
        </ReactFlowProvider>
    );
}

export default DiagramComponent;
