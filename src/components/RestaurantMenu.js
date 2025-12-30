import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);


    useEffect(()=>{
            fetchData()
    },[])

    const fetchData = async ()=>{
        try{
          
          const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9254533&lng=77.546757&restaurantId=153731&catalog_qa=undefined&query=Biryani&submitAction=ENTER")

          console.log(data.status);
          const text = await data.text()
          // console.log(text);
          
          
        }catch(err){
          console.log("error",err)
        }
          
         
        //  console.log(json.data)
          // setresInfo(json.data)
        
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
