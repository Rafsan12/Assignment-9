import Building from "../../assets/building.png";
import Location1 from "../../assets/location1.png";
import Location2 from "../../assets/location2.png";
import IncidentMap from "./IncidentMap";
import LocationCard from "./LocationCard";
import LocationInfo from "./LocationInfo";
import MainCard from "./MainCard";

export default function Final() {
  return (
    <>
      <div className="px-5 sm:px-10 lg:px-20 py-5 sm:py-10">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Column */}
          <div className="w-full lg:w-[60%]">
            {/* Location Info */}
            <LocationInfo />

            <br />
            <hr />

            {/* Description */}
            <div>
              <h1 className="text-[14px] font-bold pb-2 pt-8">Description</h1>
              <p className="text-[#71717A] text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vehicula urna nec...
              </p>
            </div>

            <br />
            <hr />

            {/* Locations Section */}
            <div>
              <div className="flex items-center justify-between pb-3 pt-8 ">
                <h1 className="text-[14px] font-bold">Locations</h1>
                <p className="text-[14px] text-[#A1A1AA] underline cursor-pointer">
                  See all
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                <MainCard
                  img={Location1}
                  icon={Building}
                  iconText="Building"
                  heading="Whitechapel Rd."
                  title="Tulare County, Los Angeles, CA 23415"
                  int="$1,456,654.00"
                />
                <MainCard
                  img={Location2}
                  icon={Building}
                  iconText="Building"
                  heading="Whitechapel Rd."
                  title="Tulare County, Los Angeles, CA 23415"
                  int="$1,456,654.00"
                />
              </div>
            </div>

            <br />
            <hr />

            {/* Activities */}
            <div>
              <div className="flex items-center justify-between pb-3 pt-8">
                <h1 className="text-[14px] font-bold">Activities</h1>
                <p className="text-[14px] text-[#0A0A0A] underline cursor-pointer">
                  See all
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <LocationCard
                  img={Location2}
                  name="Activity name"
                  int="$1,456,654.00"
                />
                <LocationCard
                  img={Location2}
                  name="Activity name"
                  int="$1,456,654.00"
                />
              </div>
            </div>

            <br />
            <hr />

            {/* Documents */}
            <div>
              <div className="flex items-center justify-between pb-3 pt-8">
                <h1 className="text-[14px] font-bold">Documents</h1>
                <p className="text-[14px] text-[#0A0A0A] underline cursor-pointer">
                  See all
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <LocationCard
                  img={Location1}
                  name="Document name"
                  int="$1,456,654.00"
                />
                <LocationCard
                  img={Location1}
                  name="Document name"
                  int="$1,456,654.00"
                />
              </div>
            </div>
          </div>

          {/* Incident Map */}
          <div className="w-full lg:w-[50%] lg:flex flex-col items-end">
            <IncidentMap />
          </div>
        </div>
      </div>
    </>
  );
}
