import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const role = new URLSearchParams(location.search).get("role");

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);

      alert(res.data.message);

      // store token
      localStorage.setItem("token", res.data.token);

      // role-based redirect (from backend user)
      const userRole = res.data.user.role;

      if (userRole === "student") {
        navigate("/student");
      } else if (userRole === "teacher") {
        navigate("/teacher");
      } else if (userRole === "admin") {
        navigate("/admin");
      }

    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container fade">
        <div className="form-box">
          <h2>{role?.toUpperCase()} LOGIN</h2>

          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

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