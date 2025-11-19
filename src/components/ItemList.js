import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items,dummy }) => {
  console.log("ItemList items: ", items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch action to add item to cart
    dispatch(addItem(item));
    console.log("Item added to cart::", item  );
  }
  
  
  return (
  <div className="space-y-4">
    {items.map(
      (item) =>
        (
      <div
        key={item.card.info.id}
        className="flex justify-between items-center p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
        {/* Left content */}
          <div className="flex-1 pr-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-lg text-gray-800">
                {item.card.info.name}
              </span>
              <span className="text-gray-700 font-medium">
                ₹{item.card.info.price / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-snug">
              {item.card.info.description}
            </p>
          </div>

         <div className="w-3/12 p-4 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-40 h-40 object-cover rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            />

            <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 text-sm font-semibold text-green-600 bg-white rounded-lg shadow-md hover:bg-green-50 transition-all duration-200"
              onClick={() => 
                handleAddItem(item)
              
            }
            >
              ADD+ 
            </button>
          </div>
        </div>
        
      ) ) }
  </div>
  );

};
export default ItemList;