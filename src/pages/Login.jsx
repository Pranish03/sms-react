import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formVal),
      });

      const data = await res.json();

      if (data.role === "admin") navigate("/dashboard/admin");
      if (data.role === "teacher") navigate("/dashboard/teacher");
      if (data.role === "student") navigate("/dashboard/student");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <title>Login</title>

      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
            S.M.S
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800 mb-10">
            Login to your account
          </h2>

          <form className="space-y-4 text-gray-800" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block max-w-fit text-sm text-gray-800 sm:text-base font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2.5 border border-gray-300 rounded-lg text-sm sm:text-base focus:border-green-600 focus:outline-1 focus:outline-green-600"
                value={formVal.email}
                onChange={(e) =>
                  setFormVal((prev) => {
                    return {
                      ...prev,
                      email: e.target.value,
                    };
                  })
                }
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block max-w-fit text-sm text-gray-800 sm:text-base font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 sm:px-4 py-2.5 border border-gray-300 rounded-lg text-sm sm:text-base focus:border-green-600 focus:outline-1 focus:outline-green-600"
                value={formVal.password}
                onChange={(e) =>
                  setFormVal((prev) => {
                    return {
                      ...prev,
                      password: e.target.value,
                    };
                  })
                }
              />
            </div>

            <div className="flex items-center justify-between text-base">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <Link className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
