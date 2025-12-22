
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);   
  const [searchText, setSearchText] = useState("")

  console.log("component rerenderd", allRestaurants.length)

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const query = searchText.trim().toLowerCase();
    if (!query) {
      setRestaurants(allRestaurants);
      return;
    }

    const filtered = allRestaurants.filter((res) => {
      const name = res?.name || "";
      return name.toLowerCase().includes(query);
    });

    setRestaurants(filtered);
  };

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
      const normalizedRestaurants = fetchedRestaurants
        .map((r) => r?.info ?? r)
        .filter(Boolean);

      if (Array.isArray(normalizedRestaurants) && normalizedRestaurants.length > 0) {
        setAllRestaurants(normalizedRestaurants);
        setRestaurants(normalizedRestaurants);
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
        <input
          type="text"
          className="searchbtn"
          value={searchText || ""}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button onClick={handleSearch}>Search</button>

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
            key={restaurant?.id || restaurant?.info?.id}
            title={restaurant?.name || restaurant?.info?.name || restaurant?.card?.card?.info?.name} 
            cuisines={(restaurant?.cuisines || restaurant?.info?.cuisines || restaurant?.card?.card?.info?.cuisines || []).join(", ")} 
            avgRating={restaurant?.avgRatingString || restaurant?.avgRating || restaurant?.info?.avgRatingString || restaurant?.info?.avgRating} 
            time={restaurant?.sla?.slaString || restaurant?.info?.sla?.slaString}
            cloudinaryImageId={restaurant?.cloudinaryImageId || restaurant?.info?.cloudinaryImageId || restaurant?.card?.card?.info?.cloudinaryImageId}
          />
          
        ))}
      </div>
    </div>
  );
};

export default Body