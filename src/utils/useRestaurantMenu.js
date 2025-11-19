import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {

  const [resinfo, setResInfo] = useState(null);
  
  useEffect(() => {
    fetchMenu();
  }, []);
    
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId); 
    const json = await data.json();
    console.log("Full API response:", json);
    setResInfo(json.data);
  }
  return resinfo;
};

export default useRestaurantMenu;