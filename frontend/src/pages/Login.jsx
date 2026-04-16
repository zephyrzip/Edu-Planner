import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const role = new URLSearchParams(location.search).get("role");

  // ✅ NEW: proper role-based login function
  const handleLogin = () => {
    if (role === "student") {
      navigate("/student");
    } else if (role === "teacher") {
      navigate("/teacher");
    } else if (role === "admin") {
      navigate("/admin");
    } else {
      alert("Role not found");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container fade">
        <div className="form-box">
          <h2>{role?.toUpperCase()} LOGIN</h2>

          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />

          {/* ✅ UPDATED BUTTON */}
          <button className="btn" onClick={handleLogin}>
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