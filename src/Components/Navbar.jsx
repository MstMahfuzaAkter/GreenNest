import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from '../assets/green-nest-logo.jpg';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout().catch(err => console.log(err));
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-green-700 text-white md:px-12 lg:px-24 px-6 py-3 flex justify-between items-center flex-wrap">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="GreenNest Logo" className="w-10 h-10 rounded-full" />
        <span className="text-2xl font-bold">GreenNest</span>
      </Link>

      {/* Mobile menu button */}
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Nav Links */}
      <div className={`w-full md:w-auto md:flex gap-5 mt-3 md:mt-0 ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <NavLink to="/" className="block md:inline hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/plants" className="block md:inline hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Plants</NavLink>
        <NavLink to="/profile" className="block md:inline hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>My Profile</NavLink>
      </div>

      {/* Conditional buttons */}
      <div className={`mt-3 md:mt-0 md:flex md:items-center ${isMenuOpen ? "block" : "hidden"} md:block`}>
        {user ? (
          <>
            {/* For medium+ screens → dropdown */}
            <div className="relative hidden md:block">
              <img
                src={user.photoURL || "https://i.ibb.co/YR6M8kV/avatar.png"}
                alt="Photo"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              <div
                className={`absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-40 z-10 ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <p className="p-2 border-b text-center">
                  {user.displayName || "User"}
                </p>
                <button
                  onClick={handleLogout}
                  className="block w-full text-center px-4 py-2 bg-red-600 text-white hover:bg-gray-600"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* For small screens → inline display */}
            <div className="flex justify-between items-center gap-2 md:hidden">
              <img
                src={user.photoURL || "https://i.ibb.co/YR6M8kV/avatar.png"}
                alt="Photo"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <span className="font-semibold">{user.displayName || "User"}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="flex gap-3 flex-col md:flex-row">
            <Link to="/login" className="bg-white text-green-700 px-4 py-1 rounded-lg text-center">Login</Link>
            <Link to="/register" className="bg-white text-green-700 px-4 py-1 rounded-lg text-center">Register</Link>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
