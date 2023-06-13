import React, { useState } from "react";
import ReactFlow, { ReactFlowProvider, Background, MiniMap } from "reactflow";

import "reactflow/dist/style.css";
import PillarsComponent from "./PillarsComponent";

const initialNodes = [
    {
        id: "1",
        position: { x: 500, y: 100 },
        data: {
            label: "Islam 5 Pillars",
        },
    },
    {
        id: "2",
        position: { x: 100, y: 200 },
        data: {
            label: "Shahada (Faith)",
            paragraph:
                "The declaration of faith, stating that there is no god but Allah, and Muhammad is his prophet. It's not directly stated in one specific verse but the concepts are found throughout the Quran.",
            point: {
                1: `"There is no deity except Him, the Exalted in Might, the Wise." (Quran 3:62)`,
                2: `"Muhammad is not the father of [any] one of your men, but [he is] the Messenger of Allah and last of the prophets. And ever is Allah, of all things, Knowing." (Quran 33:40)`,
            },
        },
    },
    { id: "3", position: { x: 300, y: 300 }, data: { label: "Salah (Prayer)" } },
    { id: "4", position: { x: 500, y: 400 }, data: { label: "Zakat (Charity)" } },
    { id: "5", position: { x: 700, y: 500 }, data: { label: "Sawm (Fasting)" } },
    { id: "6", position: { x: 900, y: 600 }, data: { label: "Hajj (Hajj)" } },
];
const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e1-4", source: "1", target: "4" },
    { id: "e1-5", source: "1", target: "5" },
    { id: "e1-6", source: "1", target: "6" },
];

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
                    <ReactFlow style={{ fontWeight: "bold" }} nodes={initialNodes} edges={initialEdges} onNodeClick={handleNodeClick} />
                    <MiniMap style={minimapStyle} zoomable pannable />
                </div>
                {isSidebarOpen && <PillarsComponent selectedNode={selectedNode} setSelectedNode={setSelectedNode} />}
            </div>
        </ReactFlowProvider>
    );
}

export default DiagramComponent;
