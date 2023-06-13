import React, { useState } from "react";
import ReactFlow, { ReactFlowProvider, Background, MiniMap } from "reactflow";
import ImanComponent from "./ImanComponent";

import "reactflow/dist/style.css";

const initialNodes = [
    {
        id: "1",
        position: { x: 500, y: 50 },
        data: {
            label: "Iman (Faith)",
            paragraph: "Iman, or faith, in Islam is traditionally broken down into belief in six articles of faith. ",
        },
    },
    {
        id: "2",
        position: { x: 50, y: 150 },
        data: {
            label: "Belief in Allah (God)",
            paragraph: "The fundamental belief in Islam is that there is only one God, Allah.",
            point: {
                1: `"Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.'" (Quran 112:1-4)`,
            },
        },
    },
    {
        id: "3",
        position: { x: 200, y: 250 },
        data: {
            label: "Belief in the Angels",
            paragraph: "Muslims believe in the existence of angels as beings created by Allah.",
            point: {
                1: `"The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], 'We make no distinction between any of His messengers.'" (Quran 2:285)`,
            },
        },
    },
    {
        id: "4",
        position: { x: 400, y: 350 },
        data: {
            label: "Belief in the Divine Books",
            paragraph:
                "Muslims believe in the books that Allah sent to various prophets throughout history, including the Quran, which was sent to the Prophet Muhammad.",
            point: {
                1: `"Say, 'We have believed in Allah and in what was revealed to us and what was revealed to Abraham, Ishmael, Isaac, Jacob, and the Descendants, and in what was given to Moses and Jesus and to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [submitting] to Him.'" (Quran 3:84)`,
            },
        },
    },
    {
        id: "5",
        position: { x: 600, y: 450 },
        data: {
            label: "Belief in the Prophets",
            paragraph: "Muslims believe in all the prophets sent by Allah, including Adam, Noah, Abraham, Moses, Jesus, and Muhammad.",
            point: {
                1: `"Say, [O believers], 'We have believed in Allah and what has been revealed to us and what has been revealed to Abraham and Ishmael and Isaac and Jacob and the Descendants and what was given to Moses and Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [in submission] to Him.'" (Quran 2:136)`,
            },
        },
    },
    {
        id: "6",
        position: { x: 800, y: 550 },
        data: {
            label: "Belief in the Day of Judgment",
            paragraph: "Muslims believe that all humans will be held accountable for their actions in this life on the Day of Judgment.",
            point: {
                1: `"Indeed, those who do not believe in Allah and His messengers and wish to discriminate between Allah and His messengers and say, 'We believe in some and disbelieve in others,' and wish to adopt a way in between - Those are the disbelievers, truly. And We have prepared for the disbelievers a humiliating punishment." (Quran 4:150-151)`,
            },
        },
    },
    ,
    {
        id: "7",
        position: { x: 950, y: 650 },
        data: {
            label: "Belief in Qadar (Divine Predestination)",
            paragraph: "Muslims believe in the divine decree of Allah, the belief that everything that happens is predestined.",
            point: {
                1: `"Indeed, all things We created with predestination." (Quran 54:49)`,
            },
        },
    },
];
const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e1-4", source: "1", target: "4" },
    { id: "e1-5", source: "1", target: "5" },
    { id: "e1-6", source: "1", target: "6" },
    { id: "e1-7", source: "1", target: "7" },
];

function Iman() {
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
                {isSidebarOpen && <ImanComponent selectedNode={selectedNode} setSelectedNode={setSelectedNode} />}
            </div>
        </ReactFlowProvider>
    );
}

export default Iman;
