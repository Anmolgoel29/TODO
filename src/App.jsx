import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Body from "./components/body";

function App() {
  function zoom() {
    document.body.style.zoom = "80%";
  }

  return (
    <div className="app flex 2xl:h-svh pb-10" onload="zoom()">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
