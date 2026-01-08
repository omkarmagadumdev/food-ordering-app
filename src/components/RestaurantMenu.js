import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";


const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9254533&lng=77.546757&restaurantId=576474&catalog_qa=undefined&query=Biryani&submitAction=ENTER${resId}`
            );
            console.log(data)
            const json = await data.json();
            setresInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
        resInfo?.cards[2]?.card?.card?.info || {};

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) =>
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
