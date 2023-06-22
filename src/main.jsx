import ReactDOM from "react-dom/client";
import React from "react";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";
import TeamContextProvider from "./components/MatchContextForTeams.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Clubs from "./components/clubs.jsx";
import Countries from "./components/countries.jsx";
import ErrorPage from "./error_page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/countries",
    element: <Countries />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/clubs",
    element: <Clubs />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <TeamContextProvider>
    <Toaster position="top-right" reverseOrder={false} />
    <RouterProvider router={router} />
  </TeamContextProvider>
);
