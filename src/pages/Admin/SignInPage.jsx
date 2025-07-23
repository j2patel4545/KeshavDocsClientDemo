import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock, FaMoon, FaSun } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Header from "components/ui/Header";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7867/admin", { email, password });
      if (res.data.token) {
        localStorage.setItem("admin_token", res.data.token);
        navigate("/admin");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
        <Header/>
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-gray-900 px-6 transition-colors duration-500">
        <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl flex overflow-hidden transition-all">

          {/* Left Section with Toggle */}
          <div className="w-1/2 hidden md:flex flex-col items-start justify-between p-10 bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white rounded-l-3xl relative">
            <div className="absolute top-5 right-5">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:scale-105 transition"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-600" />}
              </button>
            </div>
            <div className="space-y-4 z-10 mt-20">
              <h1 className="text-4xl font-extrabold">Welcome</h1>
              <p className="text-sm leading-relaxed">
                Enter your credentials to access the admin panel. We're happy to see you again!
              </p>
            </div>
            <div className="absolute w-32 h-32 bg-purple-300 dark:bg-purple-700 rounded-full top-10 left-10 blur-2xl opacity-30"></div>
            <div className="absolute w-24 h-24 bg-indigo-300 dark:bg-pink-600 rounded-full bottom-10 right-20 blur-2xl opacity-30"></div>
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-10 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">Sign in</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Access your admin dashboard securely.
            </p>

            <form onSubmit={handleSignIn} className="space-y-4">
              {/* Email */}
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-slate-50 dark:bg-gray-700">
                <FaUser className="text-gray-500 dark:text-gray-300" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full ml-3 bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400"
                />
              </div>

              {/* Password */}
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-slate-50 dark:bg-gray-700">
                <FaLock className="text-gray-500 dark:text-gray-300" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full ml-3 bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs text-indigo-600 dark:text-pink-400 font-semibold ml-2 focus:outline-none"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>

              {/* Error */}
              {error && <p className="text-red-500 text-center text-sm animate-pulse">{error}</p>}

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-indigo-500 dark:accent-pink-500" />
                  Remember me
                </label>
                <span className="text-indigo-600 dark:text-pink-400 hover:underline cursor-pointer">
                  Forgot Password?
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 dark:bg-pink-500 hover:bg-indigo-700 dark:hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                Sign In
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
              or
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
            </div>

            {/* Sign in with Google */}
            <button className="w-full border border-gray-300 dark:border-gray-600 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <FcGoogle size={22} />
              <span className="font-medium text-gray-700 dark:text-white">Sign in with Google</span>
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Don’t have an account?{" "}
              <span className="text-indigo-600 dark:text-pink-400 hover:underline cursor-pointer">Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
