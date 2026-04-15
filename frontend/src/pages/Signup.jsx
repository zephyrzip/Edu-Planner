import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const role = new URLSearchParams(useLocation().search).get("role");

  return (
    <>
      <Navbar />

      <div className="container fade">
        <div className="form-box">
          <h2>{role?.toUpperCase()} SIGNUP</h2>

          <input className="input" placeholder="Name" />
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Password" />

          <button className="btn" onClick={() => navigate("/otp")}>
            Send OTP
          </button>

          <p className="link" onClick={() => navigate(`/login?role=${role}`)}>
            Already have account? Login
          </p>
        </div>
      </div>
    </>
  );
}