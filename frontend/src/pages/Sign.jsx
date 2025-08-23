import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Sign() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    if (!form.userName || !form.password) {
      alert("Username and Password required");
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(
        `${API_URL}/api/auth/signup`,
        form
      );
      alert(response.data.message);
      setForm({ userName: "", email: "", password: "" });
    } catch (error) {
      console.log("Axios error", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="bg-white max-w-md mx-auto shadow-2xl p-6 mb-10 rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Sign in for up to date
      </h1>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="userName"
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
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full border-2 border-blue-600 rounded-md p-2"
            placeholder="Enter your email"
            onChange={handleChange}
            value={form.email}
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
          onClick={submitForm}
        >
          Sign Up
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Sign;
