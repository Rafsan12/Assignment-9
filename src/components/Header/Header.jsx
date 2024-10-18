import { Link } from "react-router-dom";
import Logo from "../../assets/LOGOEXPLORATION Search Bar Icon 8.png";
export default function Header() {
  const links = (
    <>
      <Link to={"dashboard"}>
        <a href="">Dashboard</a>
      </Link>
      <Link to={"incidents"}>
        <a href="">Incidents</a>
      </Link>
      <Link to={"locations"}>
        <a href="">Locations</a>
      </Link>
      <Link to={"activities"}>
        <a href="">Activities</a>
      </Link>
      <Link to={"documents"}>
        <a href="">Documents</a>
      </Link>
      <Link to={"cypher_aI"}>
        <a href="">Cypher AI</a>
      </Link>
    </>
  );
  return (
    <>
      <div className=" flex items-center justify-evenly px-4 py-2 bg-gray-100 border-b border-gray-300">
        <div>
          <img src={Logo} alt="Logo" />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
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
