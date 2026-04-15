import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const role = new URLSearchParams(useLocation().search).get("role");

  return (
    <>
      <Navbar />

      <div className="container fade">
        <div className="form-box">
          <h2>{role?.toUpperCase()} LOGIN</h2>

          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />

          <button className="btn" onClick={() => navigate(`/${role}`)}>
            Login
          </button>

          <p className="link" onClick={() => navigate(`/signup?role=${role}`)}>
            Not registered? Sign up
          </p>
        </div>
      </div>
    </>
  );
}