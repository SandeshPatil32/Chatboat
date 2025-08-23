import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitData = async () => {
        if(!form.userName || !form.password) {
          alert("Username and Password required");
          return;
        }

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await axios.post(
        `${API_URL}/api/auth/login`,
        form
      );
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="bg-white max-w-md mx-auto shadow-2xl p-9 mb-10 rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Login Account
      </h1>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="Username"
            className="block text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            name="userName"
            className="mt-1 block w-full border-2 border-blue-600 rounded-md p-2"
            placeholder="Enter your name"
            onChange={handleChange}
            value={form.userName}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="mt-1 block w-full border-2 border-blue-600 rounded-md p-2"
            placeholder="Enter your password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 p-2 rounded-2xl text-white font-medium hover:bg-blue-600"
          onClick={submitData}
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Create Account?{" "}
          <Link to="/sign" className="text-blue-600 hover:underline">
            create
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
