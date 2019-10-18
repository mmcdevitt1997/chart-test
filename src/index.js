import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import WorkLifeBalance from "./WorkLifeBalance";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="lineChart">
        <WorkLifeBalance />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
