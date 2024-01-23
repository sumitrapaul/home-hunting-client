import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Layout/Dashboard";
import AddHome from "./Pages/Dashboard/AddHome/AddHome";
import AllHomes from "./Pages/Dashboard/AllHomes/AllHomes";
import Booking from "./Pages/Dashboard/Booking/Booking";
import Details from "./Pages/Details/Details";
import UpdateHome from "./Pages/UpdateHome/UpdateHome";
import PrivateRoute from "./Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home/:_id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) =>
          `https://home-hunting-server.vercel.app/homedetails/${params._id}`,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "addHome",
        element: <AddHome></AddHome>,
      },
      {
        path: "allHomes",
        element: <AllHomes></AllHomes>,
      },
      {
        path: "updateHome/:id",
        element: <UpdateHome></UpdateHome>,
        loader: ({ params }) => fetch (`https://home-hunting-server.vercel.app/updateHome/${params.id}`),
      },
      {
        path: "booking",
        element: <Booking></Booking>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
