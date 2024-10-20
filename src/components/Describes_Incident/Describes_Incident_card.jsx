/* eslint-disable react/prop-types */
export default function Describes_Incident_card({ incident }) {
  const { icon, name, isActive, onClick } = incident;
  return (
    <>
      <div
        onClick={onClick}
        role="button"
        tabIndex="0"
        className={`w-full sm:w-[180px] h-[69px] text-[#71717A] rounded-md border-[1px] bg-[#f5f5f5] border-[#E4E4E7] flex gap-[10px] py-6 pl-4 items-center 
          ${
            isActive
              ? "bg-[#f26722] text-white scale-105"
              : "hover:bg-[#f26722] hover:text-white hover:scale-105"
          } `}
      >
        <img src={icon} alt="" />
        <p className="text-[14px]">{name}</p>
      </div>
    </>
  );
}
