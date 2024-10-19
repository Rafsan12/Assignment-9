import { useEffect, useState } from "react";
import Incident from "./Incident";

export default function Incidents() {
  const [cases, setCases] = useState([]);
  const [hidden, setHidden] = useState("hidden");
  const [icon, setIcon] = useState("C");
  const [bg] = useState("");

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

  // Toggle the chat box visibility
  const Cbutton = () => {
    if (hidden === "hidden") {
      setHidden("block");
      setIcon("X"); // Change icon to 'X' or something else when chat is open
    } else {
      setHidden("hidden");
      setIcon("C"); // Reset icon when chat is closed
    }
  };

  return (
    <>
      <div className="p-4">
        <p>Case: {cases.length}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {cases.map((incident) => (
            <Incident key={incident.id} incident={incident} />
          ))}
        </div>

        <div className="fixed bottom-20 md:right-20 right-10">
          {/* chat box */}
          <div
            className={`md:w-[331px] w-[250px] h-[474px] bg-[#F4F4F5] rounded-[12px] overflow-hidden absolute bottom-24 right-4  ${hidden}`}
          >
            <h1 className="w-[331px] h-[63px] pl-5 flex justify-start items-center bg-[#F26922] text-[18px] text-white font-bold ">
              Chat with Cypher
            </h1>

            <div className="relative px-2">
              <p className="w-[213px] h-[57px] absolute top-20 rounded-xl border-[1px] p-1 text-[#71717A]">
                Lorem ipsum dolor sit amet
              </p>
              <p className="w-[213px] h-[57px] absolute top-40 rounded-xl border-[1px] p-1 text-[#71717A]">
                Lorem ipsum dolor sit amet
              </p>
              <p className="w-[213px] h-[57px] absolute right-2 top-4 bg-[#3F3F46] border-[1px] p-1 rounded-xl text-white">
                Lorem ipsum dolor sit amet
              </p>
              <p className="w-[213px] h-[57px] absolute right-2 top-60 bg-[#3F3F46] border-[1px] p-1 rounded-xl text-white">
                Lorem ipsum dolor sit amet
              </p>
            </div>

            <div className="absolute bottom-14 w-full h-[42px] flex flex-col items-center">
              <input
                className="md:w-[301px] w-[230px] rounded-[12px] p-2 border-[1px] outline-[#F26922]"
                type="text"
                placeholder="Enter your question..."
              />
            </div>

            <div className="w-full absolute bottom-1 items-center flex justify-between">
              <div className="w-full flex justify-between p-2">
                <button className="w-[80px] h-[30px] bg-[#F26922] flex justify-center items-center rounded-full text-[12px] text-white hover:scale-105 transition-transform">
                  Send
                </button>
              </div>
            </div>
          </div>
          {/* chat box */}

          {/* main button */}
          <button
            onClick={Cbutton}
            className={`md:w-[77px] md:h-[77px] w-[60px] h-[60px] ${bg} bg-[#F26922] shadow flex justify-center items-center rounded-full font-bold text-[55.2px] text-white hover:scale-105 transition-transform`}
          >
            {icon}
          </button>
        </div>
      </div>
    </>
  );
}
