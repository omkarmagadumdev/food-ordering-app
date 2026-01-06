import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";
import {restaurantMenu} from "../utils/mockData"

const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);


    useEffect(()=>{
            fetchData()
    },[])

    const fetchData = async ()=>{
      setresInfo(restaurantMenu.name)
    }
    
    
    
    // if(resInfo === null ) return <Shimmer />
    
    // const itemcards = resInfo?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // console.log(itemcards);
    


    

  return (
   <div className="RestaurantMenuconatiner">
        <RestaurantMenuCard  />
   </div>
  );
};

export default RestaurantMenu;
