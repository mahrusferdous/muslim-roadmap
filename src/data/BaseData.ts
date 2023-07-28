import { Position } from "reactflow";
import { MuslimNode, CustomNode, TopNode, BottomNode, MiddleNode, RightNode, LeftNode } from "../components/Roadmaps/BaseRoadmap/BaseNodes";

const nodeTypes = {
    muslimNode: MuslimNode,
    customNode: CustomNode,
    topNode: TopNode,
    bottomNode: BottomNode,
    middleNode: MiddleNode,
    rightNode: RightNode,
    leftNode: LeftNode,
};

// interface Node {
//     id: string;
//     type?: string;
//     position: { x: number; y: number };
//     data: { label: string };
//     targetPosition?: string;
// }

interface Edge {
    id: string;
    source: string;
    target: string;
    type?: string;
    animated?: boolean;
    sourceHandle?: string;
    targetHandle?: string;
}

const initialNodes: any = [
    {
        id: "1",
        type: "topNode",
        position: { x: 550, y: 50 },
        data: {
            label: "Islam",
        },
        sourcePosition: Position.Bottom,
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
        type: "middleNode",
        position: { x: 550, y: 450 },
        data: {
            label: "Quran",
        },
    },
    {
        id: "6",
        type: "bottomNode",
        position: { x: 450, y: 550 },
        data: {
            label: "Muhammad",
        },
    },

    //Pillars
    {
        id: "7",
        type: "rightNode",
        position: { x: 0, y: 100 },
        data: {
            label: "Shahada",
        },
    },
    {
        id: "8",
        type: "rightNode",
        position: { x: 0, y: 190 },
        data: {
            label: "Salah",
        },
    },
    {
        id: "9",
        type: "rightNode",
        position: { x: 0, y: 280 },
        data: {
            label: "Zakat",
        },
    },
    {
        id: "10",
        type: "rightNode",
        position: { x: 0, y: 370 },
        data: {
            label: "Sawm",
        },
    },
    {
        id: "11",
        type: "rightNode",
        position: { x: 0, y: 450 },
        data: {
            label: "Hajj",
        },
    },

    //Iman
    {
        id: "12",
        type: "leftNode",
        position: { x: 1000, y: 75 },
        data: {
            label: "Belief in Allah",
        },
    },
    {
        id: "13",
        type: "leftNode",
        position: { x: 1000, y: 150 },
        data: {
            label: "Belief in Angels",
        },
    },
    {
        id: "14",
        type: "leftNode",
        position: { x: 1000, y: 225 },

        data: {
            label: "Belief in the Divine Books",
        },
    },
    {
        id: "15",
        type: "leftNode",
        position: { x: 1000, y: 300 },
        data: {
            label: "Belief in the Prophets",
        },
    },
    {
        id: "16",
        type: "leftNode",
        position: { x: 1000, y: 375 },
        data: {
            label: "Belief in the Day of Judgement",
        },
    },
    {
        id: "17",
        type: "leftNode",
        position: { x: 1000, y: 450 },
        data: {
            label: "Belief in Qadr",
        },
    },
];
const initialEdges: Edge[] = [
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

export { initialNodes, initialEdges, nodeTypes };
