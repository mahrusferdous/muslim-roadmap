import React, { useEffect, useState } from "react";
import { MiniMap } from "reactflow";
import "reactflow/dist/style.css";

const MiniMaps = () => {
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
    return <MiniMap style={minimapStyle} zoomable pannable />;
};

export default MiniMaps;
