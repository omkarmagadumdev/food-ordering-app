
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // Extract ALL restaurants
  const allRestaurants = resList.data.cards
  .filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
  .map((c) => c?.card?.card?.info);
  const [Restaurant, setAllRestaurants] = useState(allRestaurants);

  useEffect(()=>{
    fetchData()
    
  },[])

  const fetchData = async ()=>{
   const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")

   const json = await data.jason();
   console.log(json);
   
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filterbtn" onClick={() => {
          const filtered = allRestaurants.filter((res) =>{
            const rating = Number(res?.avgRating ?? res?.avgRatingString)
            return !Number.isNaN(rating) && rating > 4.5
          });
          setAllRestaurants(filtered);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {Restaurant.map((restaurant) => (
            
          <RestaurantCard   
            key={restaurant?.id}
            title={restaurant?.name} 
            cuisines={restaurant?.cuisines?.join(", ")} 
            avgRating={restaurant?.avgRatingString || restaurant?.avgRating} 
            time={restaurant?.sla?.slaString}
            cloudinaryImageId={restaurant?.cloudinaryImageId}
          />
          
        ))}
      </div>
    </div>
  );
};

export default Body