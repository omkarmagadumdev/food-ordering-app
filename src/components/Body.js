import RestaurentCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [ListOfRestaurent, setListOfRestaurent] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    const cards = json?.data?.cards || json?.cards || [];
    const restaurants = cards
      .filter(
        (c) =>
          c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((c) => {
        const info = c.card.card.info;
        return {
          id: info.id,
          name: info.name,
          imageId: info.cloudinaryImageId,
          rating: info.avgRating,
          cuisines: info.cuisines,
          costForTwo: info.costForTwo,
          deliveryTime: info.sla?.deliveryTime,
        };
      });

      setListOfRestaurent(restaurants)

    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurentcontainer">
        {ListOfRestaurent.map((r) => (
          <RestaurentCard key={r.id} resData={r} />
        ))}
      </div>
    </div>
  );
};

export default Body;
