import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="min-h-screen  flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center">
        
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          About GreenNest
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-green-700">
            <Link to="/">GreenNest</Link>
          </span> — your trusted digital companion for discovering, caring for, 
          and collecting beautiful indoor plants. At GreenNest, we believe that 
          plants don’t just decorate a room — they bring life, calmness, and 
          positive energy into your home.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Our goal is simple: to help plant lovers of all levels grow a greener lifestyle. 
          Whether you're a beginner exploring the world of houseplants or a plant parent 
          with years of experience, GreenNest offers valuable guidance, care tips, and 
          access to a curated collection of healthy, home-ready plants.
        </p>

        <h2 className="text-2xl font-semibold text-green-800 mt-10 mb-3">
          🌿 Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          To make plant care easier, accessible, and enjoyable for everyone — by offering 
          reliable tips, plant insights, and a seamless shopping experience that inspires 
          greener lifestyles.
        </p>

        <h2 className="text-2xl font-semibold text-green-800 mt-10 mb-3">
          🌱 Why GreenNest?
        </h2>
        <ul className="text-gray-700 leading-relaxed space-y-2">
          <li>✔ Curated collection of indoor-friendly plants</li>
          <li>✔ Beginner-friendly and expert care guides</li>
          <li>✔ Healthy plants sourced from trusted nurseries</li>
          <li>✔ Eco-friendly values and nature-focused philosophy</li>
          <li>✔ A community built for plant lovers</li>
        </ul>

        <p className="mt-8 text-gray-700 leading-relaxed">
          At GreenNest, we believe nurturing nature is a journey — and we're here 
          to walk that journey with you, one green leaf at a time.
        </p>

      </div>
    </section>
  );
};

export default About;
