import { Handle, Position } from "reactflow";

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

export { MuslimNode, CustomNode };
