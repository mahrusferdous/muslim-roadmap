import React from "react";
import ReactFlow, { ReactFlowProvider, Background } from "reactflow";
import "reactflow/dist/style.css";
import { initialNodes, initialEdges } from "../../../data/ProphetData";
import MiniMaps from "../../Context/MiniMaps";

const Prophets = () => {
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
                    <MiniMaps />
                </div>
            </div>
        </ReactFlowProvider>
    );
};

export default Prophets;
