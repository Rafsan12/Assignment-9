/* eslint-disable react/prop-types */
export default function MainCard(props) {
  return (
    <>
      <div className="relative w-full sm:w-full lg:w-[214px] hover:scale-105 transition-transform">
        <div className="relative">
          <img src={props.img} alt="Location" className="w-full object-cover" />
          <p className="absolute top-3 right-3 flex justify-center items-center gap-2 bg-white px-2 py-2 rounded-full text-[12px] text-[#09090B] font-bold">
            <img className="w-[16px]" src={props.icon} alt={props.iconText} />
            {props.iconText}
          </p>
        </div>
        <p className="pt-3 text-[16px] text-[#09090B] font-bold">
          {props.heading}
        </p>
        <p className="pt-1 text-[12px] text-[#71717A] font-[400]">
          {props.title}
        </p>
        <p className="pt-1 text-[16px] text-[#09090B] font-bold">{props.int}</p>
      </div>
    </>
  );
}
