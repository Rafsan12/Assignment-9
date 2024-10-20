import { Outlet, useLocation } from "react-router-dom";
import Dashboard from "../components/DashBord/DashBord";
import Header from "../components/Header/Header";

export default function Root() {
  const location = useLocation(); // Get the current location

  return (
    <>
      <Header />

      {/* Conditionally render Dashboard unless the pathname is "/describes_incident" */}
      {location.pathname !== "/describes_incident" && <Dashboard />}

      <Outlet />
    </>
  );
}
