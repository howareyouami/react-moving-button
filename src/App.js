import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactMovingButton from "./react-moving-button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "70%",
      }}
    >
      <ReactMovingButton radius={200}>
        <button>Apply</button>
      </ReactMovingButton>
      <ReactMovingButton radius={300}>
        <button>End</button>
      </ReactMovingButton>
      <ReactMovingButton radius={30}>
        <button>End</button>
      </ReactMovingButton>
      <ReactMovingButton radius={100}>
        <button>End</button>
      </ReactMovingButton>
      Î{" "}
    </div>
  );
}

export default App;
