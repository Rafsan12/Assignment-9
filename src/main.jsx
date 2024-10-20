import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/DashBord/DashBord";
import Describes_Incident from "./components/Describes_Incident/Describes_Incident";
import Final from "./components/Final/Final";
import Incident_Title from "./components/Incident_Title/Incident_Title";
import Incidents from "./components/Incidents/incidents";
import New_Incident from "./components/New_Incident/New_Incident";
import Where_Incident from "./components/Where_Incident/Where_Incident";
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
      {
        path: "/incident_title",
        element: <Incident_Title />,
      },
      {
        path: "/where",
        element: <Where_Incident />,
      },
      {
        path: "/final",
        element: <Final />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
