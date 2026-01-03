import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { mockRestaurantMenus } from "../utils/mockData";

const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        // Simulate API delay
        setTimeout(() => {
            const restaurantData = mockRestaurantMenus[resId];
            
            // If restaurant not found in mock data, create a default menu
            if (!restaurantData) {
                setresInfo({
                    info: {
                        id: resId,
                        name: "Restaurant Menu",
                        cuisines: ["Multi Cuisine"],
                        costForTwo: "₹400",
                        avgRating: 4.0,
                        deliveryTime: 30
                    },
                    menu: [
                        {
                            title: "Recommended",
                            itemCards: [
                                {
                                    card: {
                                        info: {
                                            id: "default1",
                                            name: "Special Dish",
                                            price: 25000,
                                            description: "Chef's special preparation",
                                            isVeg: true,
                                            ratings: {
                                                aggregatedRating: {
                                                    rating: "4.2"
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    card: {
                                        info: {
                                            id: "default2",
                                            name: "House Special Biryani",
                                            price: 32000,
                                            description: "Aromatic rice with spices",
                                            isVeg: false,
                                            ratings: {
                                                aggregatedRating: {
                                                    rating: "4.5"
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                });
            } else {
                setresInfo(restaurantData);
            }
        }, 500);
    };
    
    if (resInfo === null) return <Shimmer />;

    return (
        <div className="RestaurantMenuconatiner">
            <div className="restaurant-header">
                <h1>{resInfo.info.name}</h1>
                <p className="restaurant-cuisines">{resInfo.info.cuisines.join(", ")}</p>
                <div className="restaurant-meta">
                    <span className="rating">⭐ {resInfo.info.avgRating}</span>
                    <span className="dot">•</span>
                    <span className="cost">{resInfo.info.costForTwo} for two</span>
                    <span className="dot">•</span>
                    <span className="delivery">{resInfo.info.deliveryTime} mins</span>
                </div>
            </div>
            
            {resInfo.menu.map((category, index) => (
                <RestaurantMenuCard key={index} category={category} />
            ))}
        </div>
    );
};

export default RestaurantMenu;
