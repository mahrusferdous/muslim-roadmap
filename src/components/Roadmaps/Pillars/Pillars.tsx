import React, { useState } from "react";
import ReactFlow, { ReactFlowProvider, Background } from "reactflow";
import PillarsComponent from "./PillarsComponent";
import "reactflow/dist/style.css";
import { initialNodes, initialEdges } from "../../../data/PillarData";
import MiniMaps from "../../Context/MiniMaps";

function DiagramComponent() {
    const [selectedNode, setSelectedNode] = useState<Object>(false);

    const handleNodeClick = (event: any, node: { data: React.SetStateAction<Object> }) => {
        setSelectedNode(node);
    };

    const isSidebarOpen = selectedNode !== false;

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
                    <ReactFlow
                        style={{ fontWeight: "bold" }}
                        nodes={initialNodes}
                        edges={initialEdges}
                        onNodeClick={handleNodeClick}
                        fitView
                    />
                    <MiniMaps />
                </div>
                {isSidebarOpen && (
                    <PillarsComponent
                        selectedNode={selectedNode}
                        setSelectedNode={setSelectedNode}
                    />
                )}
            </div>
        </ReactFlowProvider>
    );
}

export default DiagramComponent;
