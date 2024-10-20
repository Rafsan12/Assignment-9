/* eslint-disable react/prop-types */
export default function New_Incident_card({ incident }) {
  const { img, title, dts } = incident;
  return (
    <>
      <div className="w-[235px] h-[269px] bg-[#E4E4E7] rounded-[10px] p-4 flex flex-col justify-between">
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <h1 className="text-[20px] font-bold text-[#09090B] pb-1">{title}</h1>
          <p className="text-[14px] text-[#71717A]">{dts}</p>
        </div>
      </div>
    </>
  );
}
