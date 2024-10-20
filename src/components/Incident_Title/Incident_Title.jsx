import { useNavigate } from "react-router-dom";

export default function Incident_Title() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/where");
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
      <div className="w-full flex justify-center items-center mt-8 md:p-0 p-5">
        <div>
          <h1 className="text-[24px] text-[#09090B] font-bold pb-2">
            Let’s give the incident a title?
          </h1>
          <p className="text-[14px] text-[#72727a] pb-4">
            Make a title that will easily identify the incidents
          </p>
          <input
            className="md:w-[752px] md:h-[50px] w-full h-[50px] bg-[#F4F4F5] rounded-[6px] border-[1px] p-4 outline-[#f26722]"
            type="text"
            placeholder="Add title here"
          />

          <h1 className="text-[24px] text-[#09090B] font-bold pt-8 pb-2">
            Describe what happened during the incident?
          </h1>
          <p className="text-[14px] text-[#72727a] pb-4">
            Share some information about the incident. The when, where, how.{" "}
          </p>
          <textarea
            className="md:w-[752px] md:h-[127px] w-full h-[127px] bg-[#F4F4F5] rounded-[6px] border-[1px] p-4 outline-[#f26722]"
            placeholder="Type here"
          ></textarea>
        </div>
      </div>
    </>
  );
}
