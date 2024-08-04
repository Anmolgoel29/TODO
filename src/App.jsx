import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Body from "./components/body";

function App() {
  function setZoomLevel(level) {
    document.body.zoom(level)
  }

  return (
    <div className="app flex 2xl:h-svh pb-10" onLoad="setZoomLevel(.8)">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
