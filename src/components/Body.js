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
        <div className="text-center bg-red-50 border border-red-200 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-red-600 mb-2">⚠️ Error</h2>
          <p className="text-neutral-600 mb-4">{error}</p>
          <button
            onClick={fetchData}
            className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
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
    <div className="mt-8">
      {/* Search and Filter Section */}
      <div className="p-8 bg-linear-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl shadow-lg mb-8 sticky top-20 z-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Find Your Favorite Restaurant</h2>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex-1 min-w-62.5 relative">
              <input
                type="text"
                placeholder="🔍 Search restaurants, cuisines..."
                className="w-full px-5 py-3 border-2 border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 shadow-sm"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <button
              onClick={() => setSearchText("")}
              className="px-6 py-3 bg-white text-orange-600 border-2 border-orange-300 rounded-xl font-semibold hover:bg-orange-50 cursor-pointer transition-all duration-200 transform hover:scale-105"
            >
              ✕ Clear
            </button>
            <button
              onClick={() => {
                const sorted = [...listOfRestaurants].sort(
                  (a, b) => b.rating - a.rating
                );
                setListOfRestaurants(sorted);
              }}
              className="px-6 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 cursor-pointer transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              ⭐ Top Rated
            </button>
          </div>
          
          {/* Username Input */}
          <div className="mt-4 flex items-center gap-2">
            <label className="text-sm font-semibold text-neutral-700">User:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-2 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              value={username}
              onChange={(e) => setuserInfo(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Restaurants Grid */}
      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-3xl mb-3">🔍</h3>
          <p className="text-xl text-neutral-600 font-medium">No restaurants found matching "{searchText}"</p>
          <button
            onClick={() => setSearchText("")}
            className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            View All
          </button>
        </div>
      ) : (
        <div>
          <p className="text-neutral-600 mb-6 font-medium">Showing {filteredRestaurants.length} restaurants</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
            {filteredRestaurants.map((res) => (
              res.promoted ? (
                <RestaurantCardPromoted key={res.id} resData={res} />
              ) : (
                <RestaurantCard key={res.id} resData={res} />
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
