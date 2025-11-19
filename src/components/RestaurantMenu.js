
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestauarantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./ItemList";  
const RestaurantMenu = () => {


const { resId } = useParams();
const resInfo = useRestauarantMenu(resId);

const [showIndex,setShowIndex] = useState(null);  
  
 if (!resInfo || !resInfo.cards) {
    return <Shimmer />;
  }




// console.log("ResInfo: ", resInfo);  
  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    // sla: { deliveryTime },

  }=resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
  console.log("ItemCards: ", itemCards);
  

  const categories  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    
  );

  console.log("Categories: ", categories); 

  

  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      {/* categories accordian*/}

      {categories.map((category,index) => (

        //controlled componenet
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card} 
          showItems={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index) }
        />
     ) )}
    </div>
  );
};
export default RestaurantMenu;