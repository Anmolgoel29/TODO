import React from "react";
import "./index.css"
import Navbar from "./components/navbar";
import Body from "./components/body";

function App() {
  return (
    <div className="app flex">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
