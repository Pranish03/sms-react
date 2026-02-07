import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formVal);

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: formVal.email,
        password: formVal.password,
      }),
    });

    const data = await response.json();
    console.log(data.message);
  };

  return (
    <>
      <title>Sign In</title>

      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-4xl font-bold text-center text-green-600 mb-6">
            S.M.S
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-900 mb-10">
            Sign in to your account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block max-w-fit text-sm text-gray-800 sm:text-base font-medium mb-2"
              >
                Enter your email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:border-blue-600 focus:outline-1 focus:outline-blue-600"
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
                Enter your password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:border-blue-600 focus:outline-1 focus:outline-blue-600"
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <Link className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to={"/signup"} className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
