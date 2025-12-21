
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText,setsearchtext] = useState("")

  console.log("component rerenderd")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&collection=83669&tags=layout_CCS_Rolls&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const json = await data.json();

      // Swiggy responses sometimes place restaurants directly in cards
      // and sometimes inside gridElements.infoWithStyle.restaurants. Grab both.
      const cards = json?.data?.cards ?? [];

      const directRestaurants = cards
        .filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        .map((c) => c?.card?.card?.info)
        .filter(Boolean);

      const gridRestaurants = cards
        .flatMap(
          (c) =>
            c?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []
        )
        .map((r) => r?.info ?? r)
        .filter(Boolean);

      const fetchedRestaurants = [...directRestaurants, ...gridRestaurants];

      if (Array.isArray(fetchedRestaurants) && fetchedRestaurants.length > 0) {
        setAllRestaurants(fetchedRestaurants);
        setRestaurants(fetchedRestaurants);
      }
    } catch (err) {
      console.error("Failed to fetch restaurants", err);
      setAllRestaurants([]);
      setRestaurants([]);
    }
  };

 return allRestaurants.length ===0  ? <Shimmer></Shimmer> :  (
    <div className="body">
      <div className="filter">
        <div className="search">
        <input type="text" className="searchbtn" value={searchText || ""} onChange={(e)=>{
          setsearchtext(e.target.value)  
         
          
        }}/>
        <button onClick={()=>{
          const filteredRestaurants = allRestaurants.filter((res) =>
            res?.name?.toLowerCase().includes(searchText.toLowerCase())
          );
          setRestaurants(filteredRestaurants);
        }}>Search</button>

        </div>

        <button className="filterbtn" onClick={() => {
          const filtered = allRestaurants.filter((res) =>{
            const rating = Number(res?.avgRating ?? res?.avgRatingString)
            return !Number.isNaN(rating) && rating > 4.5
          });
          setRestaurants(filtered);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
            
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