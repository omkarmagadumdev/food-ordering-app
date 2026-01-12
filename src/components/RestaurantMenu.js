import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { restaurantMenuData } from "../utils/mockData";


const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = () => {
        // Use mock data - cycle through available menus based on resId
        const mockDataKeys = Object.keys(restaurantMenuData);
        const index = (parseInt(resId) % mockDataKeys.length);
        const mockDataKey = mockDataKeys[index];
        const mockData = restaurantMenuData[mockDataKey];
        
        if (mockData) {
            // Format mock data to match the expected structure
            const formattedData = {
                name: mockData.name,
                avgRating: mockData.avgRating,
                totalRatingsString: mockData.totalRatingsString,
                costForTwoMessage: mockData.costForTwoMessage,
                cuisines: mockData.cuisines,
                cards: [
                    {},
                    {},
                    {
                        card: {
                            card: {
                                info: {
                                    name: mockData.name,
                                    avgRating: mockData.avgRating,
                                    totalRatingsString: mockData.totalRatingsString,
                                    costForTwoMessage: mockData.costForTwoMessage,
                                    cuisines: mockData.cuisines
                                }
                            }
                        }
                    },
                    {},
                    {
                        groupedCard: {
                            cardGroupMap: {
                                REGULAR: {
                                    cards: mockData.categories.map((category) => ({
                                        card: {
                                            card: {
                                                title: category.title,
                                                itemCards: category.itemCards
                                            }
                                        }
                                    }))
                                }
                            }
                        }
                    }
                ]
            };
            setresInfo(formattedData);
        }
    };

    const fetchFromSwiggyAPI = async () => {
        try {
            const data = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9254533&lng=77.546757&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
            );
            const json = await data.json();
            setresInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
            // Use fallback mock data on error
            const mockDataKeys = Object.keys(restaurantMenuData);
            const index = (parseInt(resId) % mockDataKeys.length);
            const mockData = restaurantMenuData[mockDataKeys[index]];
            setresInfo({
                cards: [
                    {},
                    {},
                    {
                        card: {
                            card: {
                                info: {
                                    name: mockData.name,
                                    avgRating: mockData.avgRating,
                                    totalRatingsString: mockData.totalRatingsString,
                                    costForTwoMessage: mockData.costForTwoMessage,
                                    cuisines: mockData.cuisines
                                }
                            }
                        }
                    },
                    {},
                    {
                        groupedCard: {
                            cardGroupMap: {
                                REGULAR: {
                                    cards: mockData.categories.map((category) => ({
                                        card: {
                                            card: {
                                                title: category.title,
                                                itemCards: category.itemCards
                                            }
                                        }
                                    }))
                                }
                            }
                        }
                    }
                ]
            });
        }
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
        resInfo?.cards[2]?.card?.card?.info || {};

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) =>
                c.card?.card?.title ||
                c.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || [];

    return (
        <div className="mt-6 max-w-4xl mx-auto">
            {/* Restaurant Header */}
            <div className="bg-white border border-neutral-200 rounded-xl shadow-lg p-6 mb-6">
                <h1 className="text-3xl font-bold text-neutral-900 mb-2">{name}</h1>
                <p className="text-neutral-600 mb-3">{cuisines?.join(", ")}</p>
                <div className="flex items-center gap-4 text-sm">
                    <span className="inline-flex items-center bg-green-500 text-white px-3 py-1 rounded-md font-bold">
                        ⭐ {avgRating}
                    </span>
                    <span className="text-neutral-600">{totalRatingsString}</span>
                    <span className="text-neutral-400">•</span>
                    <span className="text-neutral-600">{costForTwoMessage}</span>
                </div>
            </div>

            {/* Menu Categories */}
            <div className="space-y-4">
                {categories.map((category, index) => (
                    <RestaurantMenuCard
                        key={index}
                        category={category?.card?.card}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
