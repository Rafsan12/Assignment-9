import { Link } from "react-router-dom";
import Bell from "../../assets/Group 1171276277.png";
import Logo from "../../assets/LOGOEXPLORATION Search Bar Icon 8.png";
export default function Header() {
  const links = (
    <>
      <Link to={"/dashboard"}>
        <a href="">Dashboard</a>
      </Link>
      <Link to={"/incidents"}>
        <a href="">Incidents</a>
      </Link>
      <Link to={"/locations"}>
        <a href="">Locations</a>
      </Link>
      <Link to={"/activities"}>
        <a href="">Activities</a>
      </Link>
      <Link to={"/documents"}>
        <a href="">Documents</a>
      </Link>
      <Link to={"/cypher_aI"}>
        <a href="">Cypher AI</a>
      </Link>
    </>
  );
  return (
    <>
      <div className=" flex items-center justify-evenly px-4 py-2 bg-gray-100 border-b border-gray-300">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <nav className="space-x-4 ml-10">{links}</nav>

        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <img src={Bell} alt="" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
      <div className="bg-black border-neutral-950">
        <hr className="border-t border-neutral-950" />
      </div>
    </>
  );
}
