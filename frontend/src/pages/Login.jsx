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

      // ✅ Store token
      localStorage.setItem("token", res.data.token);

      // ✅ Store user (VERY IMPORTANT for ProtectedRoute)
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ✅ Redirect based on role (clean & safe)
      navigate(`/${res.data.user.role}`);

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
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
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