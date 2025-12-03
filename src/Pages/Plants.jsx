import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [sortType, setSortType] = useState(""); // "asc" or "desc"
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    const fetchPlants = async () => {
      const res = await fetch("/plants.json");
      const data = await res.json();
      setPlants(data);
      setFilteredPlants(data);
    };
    fetchPlants();
  }, []);

  // Sorting
  useEffect(() => {
    let sorted = [...filteredPlants];
    if (sortType === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "desc") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredPlants(sorted);
  }, [sortType]);

  // Filtering
  useEffect(() => {
    if (filterCategory === "All") {
      setFilteredPlants(plants);
    } else {
      const filtered = plants.filter((plant) => plant.category === filterCategory);
      setFilteredPlants(filtered);
    }
  }, [filterCategory, plants]);

  return (
    <div className="px-4 md:px-12 lg:px-24 py-8">

      {/* Header: Total Items + Sorting & Filtering */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <p className="font-semibold text-gray-700">
            Total Items: {filteredPlants.length}
          </p>
        </div>
        <div>
          <label className="font-semibold mr-2">Sort by Price:</label>
          <select
            className="border border-gray-300 rounded px-2 py-1"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Plant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPlants.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-white shadow-2xl hover:shadow-xl transition-shadow duration-300 rounded-2xl p-4 text-center flex flex-col"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-90 object-contain rounded-full mb-4"
            />
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Name:{plant.plantName}</h3>
              <p className="text-gray-700 mt-2">Price:${plant.price}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-yellow-500 font-semibold">Rating:⭐ {plant.rating}</p>
              <p className="text-gray-500 mt-1">Available Stock: {plant.availableStock}</p>
            </div>
            <Link
              to={`/plants/${plant.plantId}`}
              className="mt-auto bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 text-white py-2 px-4 rounded hover:from-emerald-600 hover:via-teal-700 hover:to-green-800 transition duration-300 inline-block mt-6"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plants;
