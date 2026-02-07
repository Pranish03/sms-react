// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10">
      {/* Top Footer */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 px-6">
        {/* Left Side */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-lg font-semibold text-white mb-2">
            Student Management System
          </h2>
          <p className="text-gray-400">
            Manage students, teachers, attendance, and more all in one place.
            Simplify your school management with ease and efficiency.
          </p>
        </div>

        {/* Right Side Quick Links */}
        <div className="flex-1 min-w-[150px] text-right">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/home" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/teachers" className="hover:text-blue-500 transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2026 Student Management System. All rights reserved.
      </div>
    </footer>
  );
}
