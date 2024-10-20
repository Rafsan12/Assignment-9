import { useEffect, useState } from "react";
import New_Incident_card from "./New_Incident_card";

export default function New_Incident() {
  const [newIncident, setNewIncident] = useState([]);

  useEffect(() => {
    const newIncidentDate = async () => {
      try {
        const res = await fetch("New_Incident.json");
        const result = await res.json();
        setNewIncident(result);
      } catch (error) {
        console.log(error);
      }
    };
    newIncidentDate();
  }, []);
  return (
    <>
      <div className="w-full h-auto md:min-h-[120vh] min-h-[520vh] flex justify-center pt-[50px] items-start text-[#09090B] my-5 bg-white absolute top-20 z-20">
        <div className="w-full md:w-[815px] flex flex-col gap-11 justify-center items-center relative">
          {/* Title Section */}
          <div className="text-center">
            <h1 className="text-[32px] font-bold">Let’s get started</h1>
            <p className="text-[16px] text-[#71717A] pt-1">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br />{" "}
              dolar sit general sac mascho werhoLorem ipsum dolar sit gene
            </p>
          </div>

          {/* Progress bar section */}
          <div className="relative">
            <div className="w-full md:w-[598px] h-[3px] mt-3 bg-[#E4E4E7] absolute left-[50%] top-[33.3%] translate-x-[-50%] translate-y-[-33.3%]"></div>
            <div className="w-full md:w-[609px] grid grid-cols-3 gap-[50px] md:gap-[288px] items-center mt-3">
              <div className="w-[29px] h-[29px] rounded-full bg-[#E4E4E7]"></div>
              <div className="w-[29px] h-[29px] rounded-full bg-[#E4E4E7]"></div>
              <div className="w-[29px] h-[29px] rounded-full bg-[#E4E4E7]"></div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-14">
            {newIncident.map((incident) => (
              <New_Incident_card key={incident.id} incident={incident} />
            ))}
          </div>

          {/* Start Button */}
          <button
            onClick={() => navigate("/Incidents2")}
            className="w-[139px] h-[42px] bg-[#f26722] text-[12px] text-white font-bold rounded-[6px] hover:scale-105 transition-transform"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
