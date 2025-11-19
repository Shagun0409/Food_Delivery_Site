import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus"; 
import { withRestaurantCard } from "./RestaurantCard"; 
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import setUserName from "../utils/UserContext";

const RestaurantCardPromoted = withRestaurantCard(RestaurantCard);

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantsnew, setFilteredRestaurantsnew] = useState([]);
  const [SearchText, setSearchText] = useState("");

  console.log("Body Rendered ::" , listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"  
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    setListOfRestaurants(restaurants);
    setFilteredRestaurantsnew(restaurants);
  };
  const onlineStatus = useOnlinestatus();
  if (onlineStatus === false) {
    return <h2 className="text-center text-xl text-red-500 mt-10">You are Offline</h2>;
  }

const {loggedInUser,setUserName}=useContext(UserContext);


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-50 min-h-screen px-6 py-8">
      <div className="filter flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="search flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setFilteredRestaurantsnew(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="mt-4 sm:mt-0 px-5 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition duration-200 shadow-md"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => Number(res.info?.avgRating) >= 4.5
            );
            setFilteredRestaurantsnew(filteredList);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>
        <div className="mb-6 flex items-center space-x-3">
          <label>UserName : </label>
          <input className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
            
          }}/>
          
        </div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
  {filteredRestaurantsnew.map((restaurant) => (
    <Link
      to={"/restaurant/" + restaurant.info.id}
      key={restaurant.info.id}
      className=" ">
      {restaurant.info?.avgRating > 4.5 ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
    </Link>
  ))}
</div>

    </div>
  );
};

export default Body;
