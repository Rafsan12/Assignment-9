import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();

  let headerText = "Dashboard";
  let welcomeText = "Welcome back";
  let buttonText = "Cypher AI";

  if (location.pathname === "/incidents") {
    headerText = "Home - Incidents";
    welcomeText = "Incidents";
    buttonText = "New Incident";
  } else if (location.pathname === "/locations") {
    headerText = "Locations";
    welcomeText = "Explore locations";
  }

  return (
    <div className="w-full bg-gray-50 p-4">
      {/* Welcome text */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{welcomeText}</p>
          <h1 className="text-2xl font-bold">{headerText}</h1>
        </div>

        {/* Search and buttons */}
        <div className="flex items-center space-x-4">
          {/* Search incident */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search incident"
              className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-orange-400"
            />
          </div>

          {/* Sort button */}
          <button className="px-4 py-2 border rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-100">
            Sort By: Date modified
          </button>

          {/* Gather all button */}
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
