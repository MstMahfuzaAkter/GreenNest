import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate, Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import Error from "./Error";

const PlantDetail = () => {
  const { id } = useParams();
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      navigate("/login", { state: { from: `/plants/${id}` } });
      return;
    }

    const fetchPlant = async () => {
      try {
        const res = await fetch("/plants.json");
        const data = await res.json();
        const found = data.find((p) => p.plantId === parseInt(id));
        setPlant(found);
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    };

    fetchPlant();
  }, [id, user, loading, navigate]);

  if (loading) return <div className="text-center mt-20 text-xl font-semibold">Loading...</div>;
  if (!user) return <div className="text-center mt-20 text-xl font-semibold">Redirecting to login...</div>;
  if (!plant) return <div className="text-center mt-20 text-xl font-semibold"><Error></Error></div>;

  return (
    <div className="px-4 md:px-12 lg:px-24 mt-8 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-green-800">{plant.plantName}</h1>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image */}
        <div className="flex-1">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-auto max-h-[400px]  rounded-xl shadow-md"
          />
        </div>

        {/* Details */}
        <div className="flex-1 text-gray-700 space-y-3 text-base sm:text-lg">
          <p><span className="font-bold">Description:</span> {plant.description}</p>
          <p><span className="font-bold">Category:</span> {plant.category}</p>
          <p><span className="font-bold">Price:</span> ${plant.price}</p>
          <p><span className="font-bold">Rating:</span> ⭐ {plant.rating}</p>
          <p><span className="font-bold">Care Level:</span> {plant.careLevel}</p>
          <p><span className="font-bold">Provider:</span> {plant.providerName}</p>
          <p><span className="font-bold">Available Stock:</span> {plant.availableStock}</p>
        </div>
      </div>

      {/* Book Consultation Form */}
      <div className="p-6 border rounded-lg bg-green-50 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-800">Book Consultation</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Consultation booked successfully!", { position: "top-center" });
            e.target.reset();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border text-gray-4 border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-green-400 outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border text-gray-4 border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-green-400 outline-none text-sm sm:text-base"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Book Now
            </button>
            <Link
              to='/plants'
              className="w-full flex justify-center items-center gap-1.5 sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              <FaArrowLeft></FaArrowLeft>Go Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlantDetail;
