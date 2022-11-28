import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../../components/navbar/NavbarLogin";

export default function Home(props) {
  return (
    <>
      <NavbarLogin />
      <h1>Home</h1>
      <button>
        <Link to="/login">hello</Link>
      </button>
      <button>
        <Link to="/dashboard">dashboard</Link>
      </button>
    </>
  );
}
