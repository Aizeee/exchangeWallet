import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../../components/navbar/NavbarLogin";

import "./home.css";

export default function Home(props) {
  return (
    <>
      <NavbarLogin />

      <div className="mainPage">
        <h1>Home</h1>
        <button>
          <Link to="/login">hello</Link>
        </button>
        <button>
          <Link to="/dashboard">dashboard</Link>
        </button>
      </div>
    </>
  );
}
