import React from "react";
import ReactFlow, { ReactFlowProvider, Controls } from "reactflow";
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

const initialNodes = prophets.map((prophet, i) => ({
    id: `${i}`,
    position: { x: 500, y: 70 * i },
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
                    <ReactFlow nodes={initialNodes} edges={initialEdges} />
                    <Controls />
                </div>
            </div>
        </ReactFlowProvider>
    );
}

export default DiagramComponent;
