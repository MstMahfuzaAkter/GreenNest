import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await updateProfile(user, { displayName: name, photoURL: photo });
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Profile updated successfully!");

            navigate("/"); // 
        } catch (err) {
            toast.error("Failed to update profile!");
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <div className="text-center mt-20 text-xl font-semibold">
                If you have an account,Please log in to view your profile.
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-6">My Profile</h2>

                <img
                    src={photo || user.photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.png"}
                    alt="User"
                    className="w-32 h-32 rounded-full mx-auto border-4 border-green-200 object-cover"
                />

                <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-800">{name || "No Name Provided"}</p>
                    <p className="text-gray-600">{user?.email}</p>
                </div>

                {/* Update Form */}
                <form onSubmit={handleUpdateProfile} className="mt-6 space-y-4 text-left">
                    <div>
                        <label className="block mb-1 font-semibold">Update Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-green-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Update Photo URL</label>
                        <input
                            type="text"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            required
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-green-400 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 rounded text-white font-semibold transition duration-300 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                            }`}
                    >
                        {loading ? "Updating..." : "Update Profile"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
