import React from "react";
import { UserLayout } from "../components/layouts/UserLayout";
import Home from "../pages/Home";
import PropertyListing from "../components/layouts/PropertyList";

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
        path: "/properties",
        element: <PropertyListing />,
      },
    ],
  },
];
