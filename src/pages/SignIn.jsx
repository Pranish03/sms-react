const SignIn = () => {
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

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label
            for="email"
            class="block max-w-fit text-sm text-gray-800 sm:text-base font-medium mb-2"
          >
            Enter your email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:border-blue-600 focus:outline-1 focus:outline-blue-600"
              />
            </div>

            {/* Password */}
            <div>
              <label
            for="password"
            class="block max-w-fit text-sm text-gray-800 sm:text-base font-medium mb-2"
          >
            Enter your password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:border-blue-600 focus:outline-1 focus:outline-blue-600"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
