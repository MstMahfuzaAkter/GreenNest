import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [careTips, setCareTips] = useState([]);
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const plantsRes = await fetch("/plants.json");
        const plantsData = await plantsRes.json();
        const tipsRes = await fetch("/careTips.json");
        const tipsData = await tipsRes.json();
        const expertsRes = await fetch("/experts.json");
        const expertsData = await expertsRes.json();

        setPlants(plantsData);
        setCareTips(tipsData);
        setExperts(expertsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-green-50 text-center mt-20 text-xl font-semibold">Loading...</div>
    );
  }

  const plantOfWeek = plants[Math.floor(Math.random() * plants.length)];

  return (
    <div className="space-y-16 px-4 md:px-12 lg:px-24">

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          navigation
          pagination={{ clickable: true }}
          className="h-full rounded-lg overflow-hidden"
        >
          {plants.slice(0, 3).map((plant) => (
            <SwiperSlide key={plant.plantId}>
              <div className="h-full w-full bg-green-50 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16">

                {/* Image */}
                <div className="w-full h-auto rounded-lg overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.plantName}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-6xl font-bold text-green-800 mb-4">
                    {plant.plantName}
                  </h2>
                  <p className="text-gray-700 text-2xl mb-6">
                    {plant.description}
                  </p>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      {/* Top Rated Indoor Plants */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Top Rated Indoor Plants
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.slice(0, 8).map((plant) => (
            <div
              key={plant.plantId}
              className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-90 object-contain rounded-full mb-4 mt-4"
              />
              <div className="p-4 text-center">
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
                  className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 hover:from-emerald-600 hover:via-teal-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition duration-300 inline-block mt-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Plant Care Tips */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Plant Care Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {careTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-green-50 p-6 rounded-lg shadow text-center"
            >
              <h3 className="font-semibold text-xl mb-2">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Green Experts */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Meet Our Green Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white p-4 rounded-lg shadow text-center"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg">{expert.name}</h3>
              <p className="text-gray-600">{expert.role}</p>
              <p className="text-gray-500 text-sm mt-2">{expert.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eco Decor Ideas */}
      <section className=" py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          Eco Decor Ideas
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Decorate your home with plants creatively to bring life, freshness,
          and a cozy atmosphere. Explore ideas for styling your space with
          greenery and sustainable materials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
              alt="Living Room Plants"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Living Room Refresh
              </h3>
              <p className="text-gray-600 text-sm">
                Add tall indoor plants near windows for a natural aesthetic that
                complements sunlight and open spaces.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://i.postimg.cc/6pdDhBWZ/Ready-to-transform-your-workspace-into-a-zen.jpg"
              alt="Desk Plants"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Workspace Zen
              </h3>
              <p className="text-gray-600 text-sm">
                Place small succulents or peace lilies on your desk to improve
                focus and reduce stress naturally.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
              alt="Bedroom Plants"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Cozy Bedroom Vibes
              </h3>
              <p className="text-gray-600 text-sm">
                Use hanging planters or wall-mounted pots to maximize space and
                create a calm, earthy feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plant of the Week */}
      {plantOfWeek && (
        <section className=" p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Plant of the Week</h2>
          <div className="max-w-md mx-auto bg-white shadow rounded-lg p-4 flex flex-col items-center">
            <img
              src={plantOfWeek.image}
              alt={plantOfWeek.plantName}
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{plantOfWeek.plantName}</h3>
            <p className="text-gray-700 mt-2">{plantOfWeek.description}...</p>
            {user ? (
              <Link
                to={`/plants/${plantOfWeek.plantId}`}
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 hover:from-emerald-600 hover:via-teal-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition duration-300 mt-3 inline-block text-center"
              >
                View Details
              </Link>
            ) : (
              <Link
                to="/login"
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 hover:from-emerald-600 hover:via-teal-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition duration-300 mt-3 inline-block text-center"
              >
                Login to View
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
