import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlinestatus();
 const data=useContext(UserContext);
  console.log(data);
//subscribing to the store using selector
    const cartitems=useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50"> 
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */} 
        <div className="flex items-center space-x-3">
          <img
            className="w-32 sm:w-40 md:w-48"
            src={LOGO_URL}
            alt="FoodApp Logo"
          />
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex items-center space-x-6 text-gray-700 font-medium">
            <li className="flex items-center text-sm sm:text-base">
              <span className="mr-1">Status:</span>
              {onlineStatus ? (
                <span className="text-green-600 font-semibold">🟢 Online</span>
              ) : (
                <span className="text-red-500 font-semibold">🔴 Offline</span>
              )}
            </li>

            <li>
              <Link
                to="/"
                className="hover:text-green-600 transition duration-200"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-green-600 transition duration-200"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-green-600 transition duration-200"
              >
                Contact Us
              </Link>
            </li>

            <li className="cursor-pointer hover:text-green-600 transition duration-200">
               <Link
                to="/cart"
              >
                 🛒 Cart
                 ({cartitems?.length || 0} items) 
                </Link>
            </li>

            <li>
              <button
                onClick={() =>
                  setBtnNameReact((prev) =>
                    prev === "Logout" ? "Login" : "Logout"
                  )
                }
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-green-600 transition duration-200 shadow-sm"
              >
                {btnNameReact}
              </button>
             
            </li>
             <li className="px-4 font bold">{data.loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
