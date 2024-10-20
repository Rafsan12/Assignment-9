import { useEffect, useState } from "react";
import Describes_Incident_card from "./Describes_Incident_card";

export default function Describes_Incident() {
  const [describes, setDescribes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

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
  return (
    <>
      <div className="flex justify-center md:px-0 px-4 md:mb-0 mb-4">
        <div>
          <h1 className="text-[24px] font-bold py-5 text-center sm:text-left">
            Which of these best describes the incident?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {describes.map((incident) => (
              <Describes_Incident_card
                key={incident.id}
                incident={incident}
                isActive={incident.id === activeIndex} // Highlight if the card is clicked
                onClick={() => setActiveIndex(incident.id)} // Set active card on click
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
