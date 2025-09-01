import React from "react";
import { UserLayout } from "../components/layouts/UserLayout";
import Home from "../pages/Home";
import PropertyListing from "../components/layouts/PropertyList";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminHome from "../pages/admin/AdminHome";
import Details from "../pages/admin/formComponents/Details";
import Description from "../pages/admin/formComponents/Description";
import Features from "../pages/admin/formComponents/Features";

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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "/admin/survey/", element: <Details /> },
      { path: "/admin/survey/2", element: <Description /> },
      { path: "/admin/survey/3", element: <Features /> },
    ],
  },
];
