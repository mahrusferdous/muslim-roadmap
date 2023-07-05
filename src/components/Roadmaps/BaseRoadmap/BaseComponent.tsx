import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, { MiniMap, Background, useNodesState, useEdgesState, addEdge, ReactFlowProvider, Connection, Edge } from "reactflow";
import { initialNodes, initialEdges, nodeTypes } from "../../../data/BaseComponentData";
import "reactflow/dist/style.css";

const BaseComponentData: React.FC = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);

        if (typeof window !== "undefined") {
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const minimapStyle: React.CSSProperties = {
        height: isMobile ? 80 : 120,
        width: isMobile ? 100 : 180,
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
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        fitView
                    ></ReactFlow>
                    <MiniMap style={minimapStyle} zoomable pannable />
                </div>
            </div>
        </ReactFlowProvider>
    );
};

export default BaseComponentData;
