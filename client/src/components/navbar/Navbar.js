import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">DBS</span>
        <span className="header">eXchange wallet</span>
      </div>
    </div>
  );
}
