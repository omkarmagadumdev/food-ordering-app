import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);


    useEffect(()=>{
            fetchData()
    },[])

    const fetchData = async ()=>{

        const data = await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9254533&lng=77.546757&restaurantId=576474&catalog_qa=undefined&query=Biryani&submitAction=ENTER")

        const json = await data.json();
        setresInfo(json.menucard)
    }
    
    
    
    if(resInfo === null ) return <Shimmer />
    
    const itemcards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.items

    console.log(itemcards); 
    

  return (
   <div className="RestaurantMenuconatiner">
        <RestaurantMenuCard  />
   </div>
  );
};

export default RestaurantMenu;
