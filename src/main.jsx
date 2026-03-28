import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators.jsx";
import NotFound from "./pages/NotFound.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import AddCreator from "./pages/AddCreator.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";
import { StrictMode } from "react";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/creators", element: <ShowCreators /> },
  { path: "/creators/:id", element: <ViewCreator /> },
  { path: "/creators/new", element: <AddCreator /> },
  { path: "/creators/edit/:id", element: <EditCreator /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
