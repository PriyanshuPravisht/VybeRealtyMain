import React from "react";
import { UserLayout } from "../components/layouts/UserLayout";
import Home from "../pages/Home";
import Property from "../pages/Property";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export const AppRoutes = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/properties",
        element: <Property />,
      },
    ],
  },
];
