import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/LOGOEXPLORATION Search Bar Icon 8.png";
import User from "../../assets/user.png";
import { CrossSvg, MenuSvg } from "../../utlity/Svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = (
    <>
      <Link to={"/dashboard"} className="block py-2 px-4 hover:bg-gray-200">
        Dashboard
      </Link>
      <Link to={"/incidents"} className="block py-2 px-4 hover:bg-gray-200">
        Incidents
      </Link>
      <Link to={"/locations"} className="block py-2 px-4 hover:bg-gray-200">
        Locations
      </Link>
      <Link to={"/activities"} className="block py-2 px-4 hover:bg-gray-200">
        Activities
      </Link>
      <Link to={"/documents"} className="block py-2 px-4 hover:bg-gray-200">
        Documents
      </Link>
      <Link to={"/cypher_aI"} className="block py-2 px-4 hover:bg-gray-200">
        Cypher AI
      </Link>
    </>
  );

  return (
    <header className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>

        {/* Middle - Navigation Links */}
        <nav className="hidden md:flex space-x-4 ml-10">{links}</nav>

        {/* Right - Search, Sort and Button (hidden on mobile) */}
        <div className="hidden md:flex space-x-4 items-center">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Incident"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>

        {/* Hamburger Icon - visible on mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? (
              <MenuSvg className="h-6 w-6" />
            ) : (
              <CrossSvg className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Right - User Info */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Avatar */}
          <div className="relative">
            <img
              src={User}
              alt="Avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-100 border-t border-gray-300">
          <div className="px-4 py-4 space-y-2">{links}</div>
        </nav>
      )}
    </header>
  );
}
