import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);


    useEffect(()=>{
            fetchData()
    },[])

    const fetchData = async ()=>{
        
          const data = await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api")

          const json = await data.json()
          
         
         console.log(json.data)
          // setresInfo(json.data)
        
    }
    
    
    
    // if(resInfo === null ) return <Shimmer />
    
    const itemcards = resInfo?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // console.log(itemcards);
    


    

  return (
   <div className="RestaurantMenuconatiner">
        <RestaurantMenuCard  />
   </div>
  );
};

export default RestaurantMenu;
