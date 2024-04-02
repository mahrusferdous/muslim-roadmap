import React, { useState } from "react";

const Demo = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [skipBeat, setSkipBeat] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
    };

    const handleSkipBeat = () => {
        setSkipBeat(!skipBeat);
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
            }}
        >
            <button
                style={{
                    border: "3px solid #007FFF",
                    backgroundColor: "yellow",
                    padding: "30px 50px",
                    position: "relative",
                    top: "200px",
                    left: "100px",
                }}
                onClick={handleClick}
            >
                Islam
            </button>
            <svg
                height="30"
                width="750"
                style={{ position: "relative", top: "200px", left: "100px" }}
            >
                <line
                    x1="0"
                    y1="25"
                    x2="700"
                    y2="25"
                    style={{ stroke: "#007FFF", strokeWidth: 3 }}
                />
            </svg>

            <button
                style={{
                    border: "3px solid #007FFF",
                    backgroundColor: "yellow",
                    padding: "30px 50px",
                    position: "relative",
                    top: "200px",
                }}
                onClick={handleClick}
            >
                Muslim
            </button>

            {/* <svg height="30" width="100" style={{ marginBottom: "20px" }}>
                {skipBeat ? (
                    <line
                        x1="0"
                        y1="15"
                        x2="100"
                        y2="15"
                        style={{ stroke: "black", strokeWidth: 2, strokeDasharray: "5,5" }}
                    />
                ) : (
                    <line
                        x1="0"
                        y1="15"
                        x2="100"
                        y2="15"
                        style={{ stroke: "black", strokeWidth: 2 }}
                    />
                )}
            </svg> */}
            {/* <button
                style={{ backgroundColor: "yellow", marginRight: "20px" }}
                onClick={handleSkipBeat}
            >
                Skip Beat
            </button> */}
            {/* <button style={{ backgroundColor: "yellow", marginLeft: "20px" }} onClick={handleClick}>
                Salah
            </button> */}
            {/* {showPopup && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "white",
                        padding: "20px",
                        border: "1px solid black",
                    }}
                >
                    Hello, World!
                </div>
            )} */}
        </div>
    );
};

export default Demo;
