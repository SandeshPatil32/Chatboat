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
    try {
      const response = await axios.post("http://localhost:5000/save", form);
      console.log("Response from backend", response.data);

      setForm({
        userName: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.log("Axios error", error);
    }
  };

  return (
    <div className="bg-white max-w-md mx-auto shadow-2xl p-6 mb-10 rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Sign in for up to date
      </h1>
      <div className="space-y-4">
        <form>
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            name="userName"
            className="mt-1 block w-full border-2 border-blue-600 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </form>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border-2 border-blue-600 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
            onChange={handleChange}
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
            id="password"
            name="password"
            className="mt-1 block w-full border-2 border-blue-600 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 p-2 rounded-2xl text-white font-medium hover:bg-blue-600 transition-colors hover:cursor-pointer" onClick={submitForm}
        onChange={handleChange} >
          Sign Up
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Sign;
