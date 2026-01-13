import RestaurantCard, { withPromotedlabel } from "./RestaurantCard";
import { useState, useEffect, useMemo, useContext } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";



const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const RestaurantCardPromoted = withPromotedlabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  
  // Fetch restaurants data from Swiggy API
  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      if (!response.ok) throw new Error("Failed to fetch restaurants");

      const json = await response.json();
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
            promoted: info.promoted,
          };
        });

      setListOfRestaurants(restaurants);
      setOriginalList(restaurants);
    } catch (err) {
      setError(err.message || "An error occurred while fetching data");
      setListOfRestaurants([]);
    } finally {
      setIsLoading(false);
    }
  };

  const { loggedInUser: username = "", setuserInfo = () => {} } = useContext(UserContext);
  // Memoized filtered results based on search text
  const filteredRestaurants = useMemo(() => {
    if (!searchText.trim()) return listOfRestaurants;
    return listOfRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, listOfRestaurants]);

  // Render shimmer while loading, error state, or body
  if (isLoading) return <Shimmer />;
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-neutral-600">{error}</p>
          <button
            onClick={fetchData}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const handleSearch = () => {
    // Search is now handled by filteredRestaurants memoization
  };

  const handleFilterByRating = (minRating) => {
    const filtered = originalList.filter((res) => res.rating > minRating);
    setListOfRestaurants(filtered);
  };

  const handleFilterLowestRated = () => {
    const filtered = originalList.filter((res) => res.rating < 4.2);
    setListOfRestaurants(filtered);
  };

  const handleShowAll = () => {
    setListOfRestaurants(originalList);
    setSearchText("");
  };




  return (
    <div className="max-w-300 mx-auto px-6 pb-8">
      <div className="mt-5 flex items-center gap-3 bg-white border border-neutral-200 rounded-xl shadow px-4 py-3">
        <input
          type="text"
          className="flex-1 px-3 py-2 border border-neutral-200 rounded-md text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search restaurants..."
        />
        <button
          className="px-5 py-2 rounded-md text-white font-semibold shadow bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          className="px-4 py-2 rounded-md text-white font-semibold shadow bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors"
          onClick={() => handleFilterByRating(4.3)}
        >
          Top Rated
        </button>
        <button
          className="px-4 py-2 rounded-md text-white font-semibold shadow bg-red-500 hover:bg-red-600 cursor-pointer transition-colors"
          onClick={handleFilterLowestRated}
        >
          Lowest Rated
        </button>
        <button
          className="px-4 py-2 rounded-md text-white font-semibold shadow bg-neutral-800 hover:bg-neutral-900 cursor-pointer transition-colors"
          onClick={handleShowAll}
        >
          Show All
        </button>
        
        <div>
        <input
          type="text"
          placeholder="Username"
          className="border border-black p-2"
          value={username}
          onChange={(e) => setuserInfo(e.target.value)}
        />
        </div>
      </div>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredRestaurants.map((r) =>
          r.promoted ? (
            <RestaurantCardPromoted key={r.id} resData={r} />
          ) : (
            <RestaurantCard key={r.id} resData={r} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
