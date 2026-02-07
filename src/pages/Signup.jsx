import { useState } from "react";
import Button from "../components/Button";

const Signup = () => {
  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formVal);

    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: formVal.name,
        email: formVal.email,
        password: formVal.password,
      }),
    });

    const data = await response.json();
    console.log(data.message);
  };

  return (
    <>
      <title>Signup</title>

      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
            S.M.S
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800 mb-10">
            Signup as admin
          </h2>

          <form className="space-y-4 text-gray-800" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block max-w-fit text-sm text-gray-800 sm:text-base font-medium mb-2"
              >
                Name
              </label>
              <input
                type="name"
                placeholder="Enter your name"
                className="w-full px-3 sm:px-4 py-2.5 border border-gray-300 rounded-lg text-sm sm:text-base focus:border-green-600 focus:outline-1 focus:outline-green-600"
                value={formVal.name}
                onChange={(e) =>
                  setFormVal((prev) => {
                    return {
                      ...prev,
                      name: e.target.value,
                    };
                  })
                }
              />
            </div>

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

            <Button className={"w-full"}>Signup</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
