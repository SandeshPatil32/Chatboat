"use client";
import React from "react";
import { useState } from "react";
import { CgAsterisk } from "react-icons/cg";
import { RxReload } from "react-icons/rx";
import Navbar from "../components/Navbar";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Asterisk Fields required");
      return;
    }
    if (res.ok) {
      alert(" Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Failed: " + result.error);
    }
  };

  return (
      <section id="contact" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
            Contact Me
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Have a question, idea, or project in mind? Let s talk!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
            >
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  <span className="inline-block">Name</span>
                  <span className="ml-1">*</span>
                </label>

                <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  <span className="inline-block">Email</span>
                  <span className="ml-1">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Phone No.
                </label>
                <input
                  onChange={handleChange}
                  value={formData.phone}
                  name="phone"
                  type="number"
                  placeholder="0123456789"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  <span className="inline-block">Message</span>
                  <span className="ml-1">*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  rows={5}
                  placeholder="Why are you contacting me?"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800  hover:cursor-pointer text-white px-6 py-3 rounded-lg shadow-md transition"
              >
                Send Message
              </button>
            </form>

            {/* Right: Info */}
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-bold mb-2">
                  Get in Touch
                </h3>
                <p>
                  I’m open to freelance work, collaborations, or full-time
                  opportunities. Let’s create something amazing together.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p href="rajputsandesh726@gmail.com" className="text-blue-600">
                  rajputsandesh725@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ContactPage;