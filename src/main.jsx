import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/DashBord/DashBord";
import Describes_Incident from "./components/Describes_Incident/Describes_Incident";
import Incidents from "./components/Incidents/incidents";
import New_Incident from "./components/New_Incident/New_Incident";
import Home from "./Home/Home";
import "./index.css";
import Root from "./Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/incidents",
        element: <Incidents />,
      },
      {
        path: "/new-incident",
        element: <New_Incident />,
      },
      {
        path: "/describes_incident",
        element: <Describes_Incident />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
