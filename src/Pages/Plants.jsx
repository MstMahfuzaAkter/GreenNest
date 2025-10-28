import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Plants = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    } else {
      const fetchPlants = async () => {
        const res = await fetch("/plants.json");
        const data = await res.json();
        setPlants(data);
      };
      fetchPlants();
    }
  }, [user, navigate, location]);

  if (!user) return null;

  return (
    <div className="px-4 md:px-12  lg:px-24 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {plants.map((plant) => (
        <div key={plant.plantId} className="bg-white shadow-2xl  hover:-translate-2 transition-transform duration-300 rounded-lg p-4 text-center">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">{plant.plantName}</h3>
          <p className="text-gray-700 mt-2">${plant.price}</p>
          <p className="text-yellow-500 font-semibold">⭐ {plant.rating}</p>
          <Link
            to={`/plants/${plant.plantId}`}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-3 inline-block"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Plants;
