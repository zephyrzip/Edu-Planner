import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/auth.css";

export default function OTPVerify() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container fade">
        <div className="form-box">
          <h2>Enter OTP</h2>

          <input className="input" placeholder="OTP" />

          <button className="btn" onClick={() => navigate("/login")}>
            Verify
          </button>
        </div>
      </div>
    </>
  );
}