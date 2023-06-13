import React from "react";
import ReactFlow, { ReactFlowProvider, Controls } from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
    { id: "1", position: { x: 500, y: 100 }, data: { label: "Islam 5 Pillars" } },
    { id: "2", position: { x: 100, y: 200 }, data: { label: "Shahada" } },
    { id: "3", position: { x: 300, y: 300 }, data: { label: "Salah" } },
    { id: "4", position: { x: 500, y: 400 }, data: { label: "Zakat" } },
    { id: "5", position: { x: 700, y: 500 }, data: { label: "Sawm" } },
    { id: "6", position: { x: 900, y: 600 }, data: { label: "Hajj" } },
];
const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e1-4", source: "1", target: "4" },
    { id: "e1-5", source: "1", target: "5" },
    { id: "e1-6", source: "1", target: "6" },
];

export default function DiagramComponent() {
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