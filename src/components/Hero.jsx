// src/components/Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-16 bg-gray-50">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center md:text-left">
        Welcome to Student Management System
      </h2>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="flex-1 min-w-[300px]">
          <p className="text-gray-600 text-lg mb-6 max-w-lg">
            Manage students, teachers, attendance, and more all in one place.
            Simplify your school management with ease and efficiency.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 min-w-[300px] text-center md:text-right">
          <img
            src="./heroimage.png"
            alt="Student Management System"
            className="w-full max-w-md rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50 mt-16">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-center text-3xl font-semibold capitalize pt-4">
            Contact Us
          </h1>
          <hr className="w-1/2 mx-auto pt-3 border-gray-300" />

          <div className="flex flex-col lg:flex-row items-start mt-8 gap-8">
            {/* Image */}
            <div className="lg:w-1/2 w-full">
              <img
                src="./public/contact.jpg"
                alt="Contact Illustration"
                className="w-full h-auto shadow-lg rounded-md"
              />
            </div>

            {/* Form */}
            <div className="lg:w-1/2 w-full">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Enter your full name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    We'll never share your email with anyone else.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Enter your message"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full lg:w-auto px-6 py-2 text-white border border-red-600 bg-red-600 hover:bg-red-700 rounded-md transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
