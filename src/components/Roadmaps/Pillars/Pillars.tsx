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
            paragraph: "The 5 pillars of Islam are the foundation of the religion. They are the basic acts that are mandatory for all Muslims.",
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
    {
        id: "3",
        position: { x: 300, y: 300 },
        data: {
            label: "Salah (Prayer)",
            paragraph: "Muslims are expected to pray five times a day. This is mentioned in multiple verses.",
            point: {
                1: `"And establish prayer and give zakat and bow with those who bow [in worship and obedience]." (Quran 2:43)`,
            },
        },
    },
    {
        id: "4",
        position: { x: 500, y: 400 },
        data: {
            label: "Zakat (Charity)",
            paragraph: "The practice of charitable giving based on accumulated wealth.",
            point: {
                1: `"Take, [O, Muhammad], from their wealth a charity by which you purify them and cause them increase, and invoke [Allah's blessings] upon them. Indeed, your invocations are reassurance for them. And Allah is Hearing and Knowing." (Quran 9:103)`,
            },
        },
    },
    {
        id: "5",
        position: { x: 700, y: 500 },
        data: {
            label: "Sawm (Fasting)",
            paragraph: "During the holy month of Ramadan, Muslims are expected to fast from dawn to sunset.",
            point: {
                1: `"O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous." (Quran 2:183)`,
            },
        },
    },
    {
        id: "6",
        position: { x: 900, y: 600 },
        data: {
            label: "Hajj (Hajj)",
            paragraph: "If physically and financially able, a Muslim is required to make a pilgrimage to Mecca at least once in their lifetime.",
            point: {
                1: `"And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way." (Quran 3:97)`,
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
