import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";


export default function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

