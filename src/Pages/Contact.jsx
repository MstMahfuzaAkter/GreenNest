import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", { position: "top-center" });
    e.target.reset(); 
  };

  return (
    <section className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions, suggestions, or feedback? We'd love to hear from you!  
          Fill out the form below, and our team will get back to you soon.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none transition duration-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none transition duration-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none transition duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 hover:from-emerald-600 hover:via-teal-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
