export default function LocationInfo() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-3">
          <div className="w-[37px] h-[37px] rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <img
              src="/img/location.png"
              alt="Location Icon"
              className="text-[#72727a]"
            />
          </div>
          <div>
            <p className="text-[#6B7280] text-[14px] pb-1">Location</p>
            <h1 className="text-[20px] font-bold">
              Tulare County, Los Angeles, CA 23415
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[37px] h-[37px] rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <img
              src="/img/approx.png"
              alt="Approx Cost Icon"
              className="text-[#72727a]"
            />
          </div>
          <div>
            <p className="text-[#6B7280] text-[14px] pb-1">Approx. Cost:</p>
            <h1 className="text-[20px] font-bold">$60,607,456.00</h1>
          </div>
        </div>
      </div>
    </>
  );
}
