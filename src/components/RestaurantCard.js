import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;

  return (
    <div
      className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden w-[210px] transition-all duration-200 hover:scale-105"
    >
      <img
        className="w-full h-36 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="p-3 flex flex-col space-y-1">
        <h3 className="font-semibold text-gray-800 text-[15px] truncate">
          {name}
        </h3>

        <p className="text-gray-500 text-sm truncate">
          {cuisines?.slice(0, 2).join(", ")}
        </p>

        <div className="flex items-center justify-between text-sm mt-1">
          <span
            className={`px-2 py-0.5 rounded-md font-medium text-white ${
              avgRating >= 4
                ? "bg-green-500"
                : avgRating >= 3
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <span className="text-gray-600">{sla?.deliveryTime} min</span>
        </div>

        <p className="text-gray-700 text-sm font-medium mt-1">
          💰 {costForTwo}
        </p>
      </div>
    </div>
  );
};


export const withRestaurantCard = (RestaurantCard) => {
  return (props) => {
    console.log("RestaurantCard Rendered");
    return (
      <div>
        <label className="bg-black text-white px-2 py-0.5 rounded-md text-xs absolute m-2">
          PROMOTED
        </label>
        <div >
          <RestaurantCard {...props} />
        </div>
      </div>
    );
  }
}

export default RestaurantCard;
