import React from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => (
  <>
    <Navbar />
    <main className="min-h-[70vh]">
      <Outlet />
    </main>
    <Footer/>
    <ToastContainer position="top-right" />
  </>
);

export default RootLayout;