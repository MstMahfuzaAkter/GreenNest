import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50 text-center px-4">

      <h1 className="text-8xl font-extrabold text-red-700 mb-4 animate-bounce">404</h1>
      <p className="text-2xl md:text-3xl text-gray-700 mb-6">
        Oops! Page Not Found
      </p>
      
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
