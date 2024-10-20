/* eslint-disable react/prop-types */
export default function LocationCard(props) {
  return (
    <>
      <div className="flex items-center gap-5 bg-[#f5f5f5] rounded-[10px] py-[15px] px-[10px] cursor-pointer hover:scale-105 transition-transform">
        <div>
          <img
            className="w-[78px] h-[78px] rounded-[10px]"
            src={props.img}
            alt="Location Thumbnail"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[16px] font-bold">{props.name}</p>
          <p className="flex items-center gap-3">
            <span className="text-[14px] text-[#71717A]">Location name</span>

            <span className="text-[14px] text-[#A1A1AA]">
              16.12212, -122.1424
            </span>
          </p>
          <p className="text-[16px] font-bold pt-1">{props.int}</p>
        </div>
      </div>
    </>
  );
}
