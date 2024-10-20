import { Outlet } from "react-router-dom";
import Dashboard from "../components/DashBord/DashBord";
import Header from "../components/Header/Header";

export default function Root() {
  return (
    <>
      <Header />
      <Dashboard />
      <Outlet />
    </>
  );
}
