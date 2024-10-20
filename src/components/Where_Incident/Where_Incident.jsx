import { useNavigate } from "react-router-dom";
import Map from "../../assets/map.png";
export default function Where_Incident() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/final");
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
              Finished
            </button>
          </div>
        </div>
      </div>
      {/* end */}
      <div className="w-full  flex justify-center items-center">
        <div className="mt-[40px] w-[752px] h-[589px] flex flex-col  items-start md:pb-2 p-4 md:p-0">
          <div>
            <h1 className="text-[24px] font-bold pb-2">
              Where’s the incident?
            </h1>
            <p className="text-[14px] text-[#71717A] ">
              Enter a GPS, address. or pin point on the map. Try to be as
              accurate as <br /> possible, or click:Jurisdiction Wide
            </p>
          </div>

          <div className="mt-5 relative">
            <img className="rounded-[10px]" src={Map} alt="" />
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              <div className="relative">
                <input
                  className="w-[224px] h-[42px] bg-[#F4F4F5] text-[12px] text-[#71717A] outline-[#f26722] border-[1px] border-[#e6e6e8] rounded-[6px] py-[12px] pl-[30px]"
                  type="text"
                  placeholder="Enter incident address or GPS"
                />
              </div>

              <div className="relative">
                {/* <IoIosSearch className="text-[#71717A] text-[20px] absolute top-[50%] left-[5px] translate-y-[-50%]" /> */}
                <input
                  className="w-[224px] h-[42px] bg-[#F4F4F5] text-[12px] text-[#71717A] outline-[#f26722] border-[1px] border-[#e6e6e8] rounded-[6px] py-[12px] pl-[30px]"
                  type="text"
                  placeholder="Pinpoint damage"
                />
              </div>
              {/* input setion */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
