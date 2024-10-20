import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Describes_Incident_card from "./Describes_Incident_card";

export default function Describes_Incident() {
  const [describes, setDescribes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const Describes_IncidentData = async () => {
      try {
        const res = await fetch("Describes_Incident.json");
        const result = await res.json();
        setDescribes(result);
      } catch (error) {
        console.log(error);
      }
    };
    Describes_IncidentData();
  }, []);

  const handleButtonClick = () => {
    navigate("/incident_title");
  };
  return (
    <>
      <div className="w-full bg-gray-50 p-4">
        {/* Welcome text */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">New Incident</p>
            <h1 className="text-2xl font-bold">
              Home - Incidents - New Incidents
            </h1>
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
            <button
              onClick={handleButtonClick}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
      {/* end */}
      <div className="flex justify-center md:px-0 px-4 md:mb-0 mb-4">
        <div>
          <h1 className="text-[24px] font-bold py-5 text-center sm:text-left">
            Which of these best describes the incident?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {describes.map((incident) => (
              <Describes_Incident_card key={incident.id} incident={incident} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
