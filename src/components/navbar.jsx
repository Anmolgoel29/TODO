import React from "react";
import "../index.css"
import "./navbar.css"

function Navbar() {
  return (
    <div className="nav h-svh w-fit flex flex-col gap-6 p-3 fixed"  style={{minWidth:"78px"}}>
      <img
        src="/ovals.png"
        alt="ovals"
        className="w-8 p-3 box-content"
      />
      <img
        src="/Logo.png"
        alt="Logo"
        className="w-6 hover:bg-gray-800 rounded-full p-3 box-content"
      />
      <img
        src="/sidebar.png"
        alt="sidebar icon"
        className="w-6 hover:bg-gray-800 rounded-full p-3 box-content"
      />
    </div>
  );
}

export default Navbar;
