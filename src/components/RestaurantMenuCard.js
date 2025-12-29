import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantMenuCard = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  if (!category || !category.itemCards || category.itemCards.length === 0) {
    return null;
  }

  return (
    <div className="menu-category-section">
      <div
        className="category-header-main"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="category-name">
          {category.title} ({category.itemCards.length})
        </h3>
        <span className="expand-icon">{isExpanded ? "▼" : "▲"}</span>
      </div>

      {isExpanded && (
        <div className="items-list">
          {category.itemCards.map((item) => {
            const itemInfo = item.card.info;
            const price =
              (itemInfo.price || itemInfo.defaultPrice) / 100;

            return (
              <div key={itemInfo.id} className="menu-item-card">
                <div className="item-left">
                  {/* Veg/Non-Veg Indicator */}
                  <div className="veg-indicator">
                    {itemInfo.isVeg ? (
                      <div className="veg-dot"></div>
                    ) : (
                      <div className="nonveg-dot"></div>
                    )}
                  </div>

                  {/* Item Info */}
                  <div className="item-details">
                    <h4 className="item-name">{itemInfo.name}</h4>
                    <p className="item-price">₹{price}</p>

                    {/* Rating */}
                    {itemInfo.ratings?.aggregatedRating?.rating && (
                      <p className="item-rating">
                        ⭐{" "}
                        {itemInfo.ratings.aggregatedRating.rating} (
                        {itemInfo.ratings.aggregatedRating.ratingCountV2})
                      </p>
                    )}

                    {/* Description */}
                    {itemInfo.description && (
                      <p className="item-description">
                        {itemInfo.description.length > 100
                          ? itemInfo.description.substring(0, 100) + "..."
                          : itemInfo.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Item Image and Add Button */}
                {itemInfo.imageId && (
                  <div className="item-image-section">
                    <img
                      src={`${CDN_URL}${itemInfo.imageId}`}
                      alt={itemInfo.name}
                      className="item-image"
                    />
                    <button className="add-button">ADD</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenuCard;

