     
import ItemList from "./ItemList";
const RestaurantCategory = ({ data,showItems ,setShowIndex}) => {

//lifting state up
  console.log("data: ", data); 
  const handleClick = () => {
    setShowIndex();

  }

  return (
    <div>
   
    {/* {accordian Header} */}
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg
    p-4 ">
        <div className="flex justify-between items-center cursor-pointer " onClick={handleClick}>
        <span className="font-bold">{data.title} ({data.itemCards.length})</span>
        
      <span>👇</span>

    </div>
        {/* {Accordian  body} */}
        

        { showItems && <ItemList items={data.itemCards} />}
    </div>
  
    

   
  </div >
  );
};
export default RestaurantCategory;