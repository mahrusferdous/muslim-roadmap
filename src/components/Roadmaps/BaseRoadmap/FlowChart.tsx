import React, { useCallback } from "react";
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, Handle, Position, ReactFlowProvider } from "reactflow";

import "reactflow/dist/style.css";

const MuslimNode = ({ data }) => {
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

const CustomNode = ({ data }) => {
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
            <Handle id="a" type="source" position={Position.Left} style={{ background: "#555" }} />
            <div style={{ color: "black", fontSize: "12px" }}>{data.label}</div>
        </div>
    );
};

const nodeTypes = {
    muslimNode: MuslimNode,
    customNode: CustomNode,
};

const initialNodes: NodeData[] = [
    {
        id: "1",
        type: "input",
        position: { x: 550, y: 50 },
        data: {
            label: "Islam",
            paragraph: "Iman, or faith, in Islam is traditionally broken down into belief in six articles of faith. ",
        },
    },
    {
        id: "2",
        type: "muslimNode",
        position: { x: 450, y: 250 },
        data: {
            label: "Muslim",
            paragraph: "The fundamental belief in Islam is that there is only one God, Allah.",
            point: {
                1: `"Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.'" (Quran 112:1-4)`,
            },
        },
    },
    {
        id: "3",
        type: "customNode",
        position: { x: 200, y: 200 },
        data: {
            label: "Pillars",
            paragraph: "Muslims believe in the existence of angels as beings created by Allah.",
            point: {
                1: `"The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], 'We make no distinction between any of His messengers.'" (Quran 2:285)`,
            },
        },
    },
    {
        id: "4",
        type: "customNode",
        position: { x: 800, y: 300 },
        data: {
            label: "Iman",
            paragraph:
                "Muslims believe in the books that Allah sent to various prophets throughout history, including the Quran, which was sent to the Prophet Muhammad.",
            point: {
                1: `"Say, 'We have believed in Allah and in what was revealed to us and what was revealed to Abraham, Ishmael, Isaac, Jacob, and the Descendants, and in what was given to Moses and Jesus and to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [submitting] to Him.'" (Quran 3:84)`,
            },
        },
    },
    {
        id: "5",
        position: { x: 550, y: 450 },
        data: {
            label: "Quran",
            paragraph: "Muslims believe in all the prophets sent by Allah, including Adam, Noah, Abraham, Moses, Jesus, and Muhammad.",
            point: {
                1: `"Say, [O believers], 'We have believed in Allah and what has been revealed to us and what has been revealed to Abraham and Ishmael and Isaac and Jacob and the Descendants and what was given to Moses and Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [in submission] to Him.'" (Quran 2:136)`,
            },
        },
    },
    {
        id: "6",
        type: "output",
        position: { x: 450, y: 550 },
        data: {
            label: "Muhammad",
            paragraph: "Muslims believe that all humans will be held accountable for their actions in this life on the Day of Judgment.",
            point: {
                1: `"Indeed, those who do not believe in Allah and His messengers and wish to discriminate between Allah and His messengers and say, 'We believe in some and disbelieve in others,' and wish to adopt a way in between - Those are the disbelievers, truly. And We have prepared for the disbelievers a humiliating punishment." (Quran 4:150-151)`,
            },
        },
    },

    {
        id: "7",
        type: "output",
        position: { x: 100, y: 150 },
        data: {
            label: "Shahada",
            paragraph: "Muslims believe that Allah is the Creator of all things, and that He is all-powerful and all-knowing.",
            point: {
                1: `"Allah is the Creator of all things, and He is, over all things, Disposer of affairs." (Quran 39:62)`,
            },
        },
        targetPosition: Position.Right,
    },
];
const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3", type: "smoothstep", animated: true, sourceHandle: "b" },
    { id: "e2-4", source: "2", target: "4", type: "smoothstep", animated: true, sourceHandle: "a", targetHandle: "a" },
    { id: "e2-5", source: "2", target: "5", animated: true },
    { id: "e5-6", source: "5", target: "6", animated: true },
];

export default function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

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
