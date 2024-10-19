/* eslint-disable react/prop-types */
export default function Incident({ incident }) {
  const { location, city, price, image, category } = incident;
  return (
    <>
      <div className="relative w-[306px] hover:scale-105 transition-transform'">
        <img src={image} alt={location} className="w-full h-40" />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{location}</h3>
          <p className="text-sm text-gray-500">{city}</p>
          <p className="text-xl font-bold mt-2">{price}</p>
        </div>
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
          <img className="text-xs font-medium" src={category} alt="" />
        </div>
      </div>
    </>
  );
}
