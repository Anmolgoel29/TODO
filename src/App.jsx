import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Body from "./components/body";

function App() {
  function zoom() {
    document.body.style.zoom = "100%";
  }

  return (
    <div className="app flex 2xl:h-svh pb-10" onLoad={zoom}>
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
