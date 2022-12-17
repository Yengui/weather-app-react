import "./App.css";
import Card from "./components/Card";
import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import cloud from "./assets/cloud.png";

function App() {
  const [result, setResult] = useState(null);
  return (
    <div className="app">
      <div className="welcome">
        <img src={cloud} alt="cloud" />
        <h1>Welcome to your weather app!</h1>
        <h3>Type your city name to check the weather</h3>
      </div>
      <div className="searchbar-container">
        <Searchbar setResult={setResult} />
      </div>
      <div className="card-container">{result && <Card result={result} />}</div>
    </div>
  );
}

export default App;
