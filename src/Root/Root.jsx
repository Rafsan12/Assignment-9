import { Outlet, useLocation } from "react-router-dom";
import Dashboard from "../components/DashBord/DashBord";
import Header from "../components/Header/Header";

export default function Root() {
  const location = useLocation();

  return (
    <>
      <Header />

      {location.pathname !== "/describes_incident" &&
        location.pathname !== "/incident_title" &&
        location.pathname !== "/where" && <Dashboard />}

      <Outlet />
    </>
  );
}
