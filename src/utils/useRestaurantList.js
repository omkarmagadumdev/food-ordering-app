import { useState, useEffect } from "react";

const useRestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            setIsLoading(true);
            const data = await fetch(
                "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
            );
            const json = await data.json();

            const cards = json?.data?.cards || json?.cards || [];

            const restaurantList = cards
                .filter(
                    (c) =>
                        c.card?.card?.["@type"] ===
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
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

            setRestaurants(restaurantList);
            setFilteredRestaurants(restaurantList);
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    const filterByName = (searchText) => {
        const filtered = restaurants.filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

    const filterByRating = (minRating) => {
        const filtered = restaurants.filter((res) => res.rating > minRating);
        setFilteredRestaurants(filtered);
    };

    const resetFilters = () => {
        setFilteredRestaurants(restaurants);
    };

    return {
        restaurants: filteredRestaurants,
        originalRestaurants: restaurants,
        isLoading,
        error,
        filterByName,
        filterByRating,
        resetFilters,
    };
};

export default useRestaurantList;
