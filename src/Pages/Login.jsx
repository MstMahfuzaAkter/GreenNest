import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {  FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { login, googleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await login(email, password);
      setUser(res.user);
      toast.success("Login successful! ");
      navigate(location.state?.from || "/");
    } catch (err) {
      setError("Invalid email or password!");
      toast.error("Login failed. Please check your credentials.");
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setError("");
    try {
      const res = await googleLogin();
      setUser(res.user);
      toast.success("Logged in with Google!");
      navigate(location.state?.from || "/");
    } catch (err) {
      setError("Google login failed!");
      toast.error("Something went wrong with Google login.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
      <div className="bg-white w-full max-w-md shadow-lg p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-gray-200">Email</label>
            <input 
              type="email"
              name="email"
              required
              className="w-full border text-gray-400 border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="w-full border text-gray-400 border-gray-300 rounded px-3 py-2 pr-10 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <p className="text-right mt-2 text-sm">
            <Link to="/forgot-password" className="text-green-600 font-semibold hover:underline">
              Forgot Password?
            </Link>
          </p>

          <button
            type="submit"
            className="w-full  bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} className="text-green-600" />
          <span className="font-medium text-gray-700">Login with Google</span>
        </button>

        <p className="text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
