import React from "react";
import ReactFlow, { ReactFlowProvider, Background, MiniMap } from "reactflow";
import "reactflow/dist/style.css";

const prophets = [
    "Adam",
    "Idris",
    "Nuh",
    "Hud",
    "Salih",
    "Ibrahim",
    "Lut",
    "Ismail",
    "Ishaq",
    "Yaqub",
    "Yusuf",
    "Shu'aib",
    "Ayyub",
    "Musa",
    "Harun",
    "Dhu'l-Kifl",
    "Dawud",
    "Sulayman",
    "Ilyas",
    "Alyasa",
    "Yunus",
    "Zakariya",
    "Yahya",
    "Isa",
    "Muhammad",
];

interface Node {
    id: string;
    position: { x: number; y: number };
    data: { label: string };
}

interface Edge {
    id: string;
    source: string;
    target: string;
}

const initialNodes = prophets.map((prophet, i) => ({
    id: `${i}`,
    position: { x: i * 150, y: i * 100 },
    data: { label: prophet },
}));

const initialEdges = prophets
    .map((_, i) => ({
        id: `e${i}-${i + 1}`,
        source: `${i}`,
        target: `${i + 1}`,
    }))
    .slice(0, -1); // remove the last edge, which is invalid

function DiagramComponent() {
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
}

export default DiagramComponent;
