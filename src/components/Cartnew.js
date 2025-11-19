import {useSelector} from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice"; 
const Cartnew = () => {
  //subscribing to the store using selector 
  const cartItems = useSelector((store) => store.cart.items);

const dispatch = useDispatch();

  const handelClearCart = () => { 
    //dispatch action to clear cart
    dispatch(clearCart());  
  }
  return (
    <div className="text-centre m-7 p-5 font-bold text-xl center ">
     <h1 className="text-2xl font-bold justify-center " >Cart</h1>
      <div className="w-6/12 m-auto justify-center ">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-200 mb-4"
        onClick={handelClearCart}
        >
          clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h2 className="text-xl font-semibold text-gray-700">Your cart is empty</h2>
        ) : null  }
        <ItemList items={cartItems}/>
      </div>
  </div>
  );
};

export default Cartnew; 