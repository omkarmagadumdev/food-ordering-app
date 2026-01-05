import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { resInfo, isLoading, error } = useRestaurantMenu(resId);

    if (isLoading || resInfo === null) return <Shimmer />;

    if (error) {
        return (
            <div className="RestaurantMenuconatiner">
                <p>Unable to load menu right now. Please try again.</p>
            </div>
        );
    }

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
