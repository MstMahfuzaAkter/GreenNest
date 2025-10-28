import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-6">About GreenNest</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-green-700"><Link to='/'>GreenNest</Link></span> — your digital
          companion for creating a healthier, greener living space. Our mission is to connect plant
          lovers with the beauty and benefits of indoor gardening. We provide insights, care tips,
          and access to a curated collection of plants to make your home a true green nest.
        </p>
        <p className="mt-4 text-gray-600">
          Whether you’re a seasoned gardener or just starting, GreenNest helps you nurture nature —
          one leaf at a time.
        </p>
      </div>
    </section>
  );
};

export default About;
