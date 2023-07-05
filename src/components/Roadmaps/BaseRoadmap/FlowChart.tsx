import React, { useCallback } from "react";
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Handle,
    Position,
    ReactFlowProvider,
    Connection,
    Edge,
} from "reactflow";

import "reactflow/dist/style.css";

const MuslimNode = ({ data }: any) => {
    return (
        <div
            style={{
                background: "#fff",
                borderRadius: "2px",
                width: "150px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #ddd",
                boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
            }}
        >
            <Handle type="target" position={Position.Top} style={{ background: "#555" }} />
            <Handle type="source" position={Position.Bottom} style={{ background: "#555" }} />
            <Handle id="a" type="source" position={Position.Right} style={{ background: "#555" }} />
            <Handle id="b" type="source" position={Position.Left} style={{ background: "#555" }} />
            <div style={{ color: "black", fontSize: "12px" }}>{data.label}</div>
        </div>
    );
};

const CustomNode = ({ data }: any) => {
    return (
        <div
            style={{
                background: "#fff",
                borderRadius: "2px",
                width: "150px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #ddd",
                boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
            }}
        >
            <Handle type="target" position={Position.Right} style={{ background: "#555" }} />
            <Handle id="a" type="target" position={Position.Left} style={{ background: "#555" }} />
            <Handle type="source" position={Position.Left} style={{ background: "#555" }} />
            <Handle id="a" type="source" position={Position.Right} style={{ background: "#555" }} />
            <div style={{ color: "black", fontSize: "12px" }}>{data.label}</div>
        </div>
    );
};

const nodeTypes = {
    muslimNode: MuslimNode,
    customNode: CustomNode,
};

const initialNodes: any = [
    {
        id: "1",
        type: "input",
        position: { x: 550, y: 50 },
        data: {
            label: "Islam",
        },
    },
    {
        id: "2",
        type: "muslimNode",
        position: { x: 450, y: 250 },
        data: {
            label: "Muslim",
        },
    },
    {
        id: "3",
        type: "customNode",
        position: { x: 200, y: 200 },
        data: {
            label: "Pillars",
        },
    },
    {
        id: "4",
        type: "customNode",
        position: { x: 800, y: 300 },
        data: {
            label: "Iman",
        },
    },
    {
        id: "5",
        position: { x: 550, y: 450 },
        data: {
            label: "Quran",
        },
    },
    {
        id: "6",
        type: "output",
        position: { x: 450, y: 550 },
        data: {
            label: "Muhammad",
        },
    },

    //Pillars
    {
        id: "7",
        type: "output",
        position: { x: 0, y: 100 },
        data: {
            label: "Shahada",
        },
        targetPosition: Position.Right,
    },
    {
        id: "8",
        type: "output",
        position: { x: 0, y: 190 },
        data: {
            label: "Salah",
        },
        targetPosition: Position.Right,
    },
    {
        id: "9",
        type: "output",
        position: { x: 0, y: 280 },
        data: {
            label: "Zakat",
        },
        targetPosition: Position.Right,
    },
    {
        id: "10",
        type: "output",
        position: { x: 0, y: 370 },
        data: {
            label: "Sawm",
        },
        targetPosition: Position.Right,
    },
    {
        id: "11",
        type: "output",
        position: { x: 0, y: 450 },
        data: {
            label: "Hajj",
        },
        targetPosition: Position.Right,
    },

    //Iman
    {
        id: "12",
        type: "output",
        position: { x: 1000, y: 75 },
        data: {
            label: "Belief in Allah",
        },
        targetPosition: Position.Left,
    },
    {
        id: "13",
        type: "output",
        position: { x: 1000, y: 150 },
        data: {
            label: "Belief in Angels",
        },
        targetPosition: Position.Left,
    },
    {
        id: "14",
        type: "output",
        position: { x: 1000, y: 225 },

        data: {
            label: "Belief in the Divine Books",
        },
        targetPosition: Position.Left,
    },
    {
        id: "15",
        type: "output",
        position: { x: 1000, y: 300 },
        data: {
            label: "Belief in the Prophets",
        },
        targetPosition: Position.Left,
    },
    {
        id: "16",
        type: "output",
        position: { x: 1000, y: 375 },
        data: {
            label: "Belief in the Day of Judgement",
        },
        targetPosition: Position.Left,
    },
    {
        id: "17",
        type: "output",
        position: { x: 1000, y: 450 },
        data: {
            label: "Belief in Qadr",
        },
        targetPosition: Position.Left,
    },
];
const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3", type: "smoothstep", animated: true, sourceHandle: "b" },
    { id: "e2-4", source: "2", target: "4", type: "smoothstep", animated: true, sourceHandle: "a", targetHandle: "a" },
    { id: "e2-5", source: "2", target: "5", animated: true },
    { id: "e5-6", source: "5", target: "6", animated: true },

    { id: "e3-7", source: "3", target: "7" },
    { id: "e3-8", source: "3", target: "8" },
    { id: "e3-9", source: "3", target: "9" },
    { id: "e3-10", source: "3", target: "10" },
    { id: "e3-11", source: "3", target: "11" },

    { id: "e4-12", source: "4", target: "12", sourceHandle: "a" },
    { id: "e4-13", source: "4", target: "13", sourceHandle: "a" },
    { id: "e4-14", source: "4", target: "14", sourceHandle: "a" },
    { id: "e4-15", source: "4", target: "15", sourceHandle: "a" },
    { id: "e4-16", source: "4", target: "16", sourceHandle: "a" },
    { id: "e4-17", source: "4", target: "17", sourceHandle: "a" },
];

export default function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

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
}
