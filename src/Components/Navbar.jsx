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

  const activeClass = "text-green-800 font-semibold underline";

  return (
    <nav className="bg-green-100 text-green-900 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 md:px-24 flex justify-between items-center py-3 flex-wrap">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GreenNest Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-bold">GreenNest</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`w-full md:w-auto md:flex gap-6 mt-3 md:mt-0 ${isMenuOpen ? "block" : "hidden"} md:block`}>
          <NavLink to="/" end onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? activeClass : "block hover:text-green-600"}>
            Home
          </NavLink>
          {user && (
            <NavLink to="/plants" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? activeClass : "block hover:text-green-600"}>
              All Items
            </NavLink>
          )}
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? activeClass : "block hover:text-green-600"}>
            About Us
          </NavLink>
          {user && (
            <NavLink to="/profile" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? activeClass : "block hover:text-green-600"}>
              My Profile
            </NavLink>
          )}
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? activeClass : "block hover:text-green-600"}>
            Contact
          </NavLink>
          {user && (
            <NavLink to="/privacy" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? activeClass : "block hover:text-green-600"}>
             Privacy-Policy
            </NavLink>
          )}
        </div>

        {/* Auth Buttons */}
        <div className={`mt-3 md:mt-0 md:flex md:items-center ${isMenuOpen ? "block" : "hidden"} md:block`}>
          {user ? (
            <>
              {/* Dropdown (Desktop) */}
              <div className="relative hidden md:block">
                <img
                  src={user.photoURL || "https://i.ibb.co/YR6M8kV/avatar.png"}
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                <div className={`absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-40 z-10 ${isDropdownOpen ? "block" : "hidden"}`}>
                  <p className="p-2 border-b text-center font-semibold">{user.displayName || "User"}</p>
                  <button
                    onClick={handleLogout}
                    className="block w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 text-white font-semibold py-2 rounded-lg hover:from-emerald-600 hover:via-teal-700 hover:to-green-800 transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>

              {/* Mobile inline */}
              <div className="md:hidden flex items-center gap-3 mt-2">
                <img
                  src={user.photoURL || "https://i.ibb.co/YR6M8kV/avatar.png"}
                  alt="User"
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
                <span className="font-semibold">{user.displayName || "User"}</span>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:from-emerald-600 hover:via-teal-700 hover:to-green-800 transition duration-300"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="flex gap-3 flex-col md:flex-row mt-2">
              <Link to="/login" className="bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:from-emerald-600 hover:via-teal-700 hover:to-green-800 transition duration-300 text-center">
                Login
              </Link>
              <Link to="/register" className="bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:from-emerald-600 hover:via-teal-700 hover:to-green-800 transition duration-300 text-center">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
