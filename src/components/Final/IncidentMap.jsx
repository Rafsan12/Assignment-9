import Map from "../../assets/map.png";

export default function IncidentMap() {
  return (
    <>
      <div className="text-start text-[14px] text-[#71717A]">
        <p className="pb-3">Incident Map</p>
        <img
          className="w-full lg:h-[503px] rounded-[10px] cursor-pointer"
          src={Map}
          alt="Incident Map"
        />
        <p className="pt-3 flex items-center gap-10 lg:gap-20 text-[14px] text-[#71717A]">
          <span>Start 19.1232, -118.233</span>
          <span>End 19.3245, -119.2323</span>
        </p>
      </div>
    </>
  );
}
