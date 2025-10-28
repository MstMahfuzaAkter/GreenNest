import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import PlantDetail from "../Pages/PlantDetail";
import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "../Pages/ForgotPassword";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/plants",
        element: <Plants />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />
      },
      {
        path: "/plants/:id",
        element: <PlantDetail />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword></ForgotPassword>
      }
    ],
  },
  {
    path: "*",
    element:<Error></Error>
  },
]);

export default router;
