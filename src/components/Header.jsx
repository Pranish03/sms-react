// src/components/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Title */}
        <h1
          className="text-2xl font-bold text-green-600 cursor-pointer"
          onClick={() => navigate("")}
        >
          S.M.S
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <button
            className="text-gray-700 hover:text-blue-600 transition font-medium"
            onClick={() => navigate("")}
          >
            Home
          </button>
          <button
            className="text-gray-700 hover:text-blue-600 transition font-medium"
            onClick={() => navigate("")}
          >
            About Us
          </button>
          {/* <button
            className="text-gray-700 hover:text-blue-600 transition font-medium"
            onClick={() => navigate("")}
          >
            Students
          </button>
          <button
            className="text-gray-700 hover:text-blue-600 transition font-medium"
            onClick={() => navigate("")}
          >
            Teachers
          </button>
          <button
            className="text-gray-700 hover:text-blue-600 transition font-medium"
            onClick={() => navigate("")}
          >
            Attendance
          </button> */}


          {/* Login / Signup */}
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold"
            onClick={() => navigate("/signin")}
          >
            Login
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition font-semibold"
            onClick={() => navigate("/signup")}
          >
            Admin Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}
