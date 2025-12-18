
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // Extract ALL restaurants
  const allRestaurants = resList.data.cards
    .filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
    .map((c) => c?.card?.card?.info);

  return (
    <div className="body">
      <div className="filter">
        <button className="filterbtn" onClick={() => {
          const filtered = allRestaurantsData.filter((res) => res.avgRating > 4.5);
          setAllRestaurants(filtered);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {allRestaurants.map((restaurant) => (
            
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