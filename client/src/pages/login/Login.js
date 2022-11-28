import { Link } from "react-router-dom";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <Link to="/">
        <button>Home</button>
      </Link>
      <section className="loginPage">
        <span>
          <h2>login</h2>
        </span>
        <span>
          <h2>login</h2>
        </span>
      </section>
    </div>
  );
}
