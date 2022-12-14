import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App() {
  const [showNavLogin, setShowNavLogin] = useState(false);
  return (
    <div>
      <ProSidebarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ProSidebarProvider>
    </div>
  );
}
