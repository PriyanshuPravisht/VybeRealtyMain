import React from "react";
import { useState } from "react";
import api from "../../../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      console.log("logggg: ", res);
      localStorage.setItem("token", res.data.token);
      setMessage("✅ Login successful!");
      navigate("/");
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account ? <Link to="/admin/signup">Go to SignUp</Link>
        </p>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
