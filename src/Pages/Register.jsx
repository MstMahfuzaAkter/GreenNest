import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import {  FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { signup, updateUserProfile, setUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setNameError("");

    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (name.length < 3) {
      setNameError("Name must be at least 3 characters");
      return;
    }
    if (!/(?=.*[a-z])/.test(password) || !/(?=.*[A-Z])/.test(password) || password.length < 6) {
      setError("Password must include uppercase, lowercase, and be at least 6 characters long");
      toast.error("Invalid password format!");
      return;
    }

    try {
      // ✅ Firebase Signup
      const res = await signup(email, password);

      // ✅ Update Profile
      await updateUserProfile({ displayName: name, photoURL: photo });

      setUser(res.user);
      toast.success("Signup successful! 🎉");
      navigate("/");
    } catch (err) {
      setError("Email already in use or invalid!");
      toast.error("Signup failed. Please try again.");
    }
  };

  // ✅ Google Signup/Login
  const handleGoogleSignup = async () => {
    try {
      const res = await googleLogin();
      setUser(res.user);
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (err) {
      setError("Google signup failed!");
      toast.error("Something went wrong with Google signup.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
      <div className="bg-white w-full max-w-md shadow-lg p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Signup</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border text-gray-400 border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Enter your full name"
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              className="w-full border text-gray-400 border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Enter photo URL"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
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
              className="w-full border border-gray-300  text-gray-400 rounded px-3 py-2 pr-10 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Must be Min 6 chars, 1 Uppercase, 1 Lowercase"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 text-white font-semibold py-2 rounded transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">or</div>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} className="text-green-600" />
          <span className="font-medium text-gray-700">Signup with Google</span>
        </button>

        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
