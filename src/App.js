import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={`${process.env.PUBLIC_URL}/islam.png`} className="App-logo" alt="Islam" />
                {/* <img src={"./images/islam.jpg"} className="App-logo" alt="islam" /> */}
                <p>Are you living in a Godless society?</p>
                <a className="App-link" href="https://quran.com/" target="_blank" rel="noopener noreferrer">
                    Learn Islam
                </a>
            </header>
        </div>
    );
}

export default App;
