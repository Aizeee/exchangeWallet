import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavbarLogin() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">DBS</span>
        <span className="header">eXchange wallet</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <Link to="/login">
            <button className="navButton">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
