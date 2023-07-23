import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, { MiniMap, Background, useNodesState, useEdgesState, addEdge, ReactFlowProvider, Connection, Edge } from "reactflow";
import { initialNodes, initialEdges, nodeTypes } from "../../../data/BaseData";
import MiniMaps from "../../Context/MiniMaps";
import "reactflow/dist/style.css";

const BaseComponentData: React.FC = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

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
                    <MiniMaps />
                </div>
            </div>
        </ReactFlowProvider>
    );
};

export default BaseComponentData;
