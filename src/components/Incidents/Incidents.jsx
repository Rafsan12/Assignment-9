import { useEffect, useState } from "react";
import Incident from "./Incident";

export default function Incidents() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const casesData = async () => {
      try {
        const res = await fetch("incidents.json");
        const result = await res.json();
        setCases(result);
      } catch (error) {
        console.log(error);
      }
    };
    casesData();
  }, []);

  return (
    <>
      <div className="p-4">
        <p>Case: {cases.length}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((incident) => (
            <Incident key={incident.id} incident={incident} />
          ))}
        </div>

        <div className="fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-full">
          C
        </div>
      </div>
    </>
  );
}
