import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems,clearItems,removeItems } from "../utils/cartSlice";

const RestaurantMenuCard = ({ category }) => {
  const dispatch = useDispatch();
  const [expandedItems, setExpandedItems] = useState({});
  const [isExpanded, setIsExpanded] = useState(true);


  if (!category || !category.itemCards || category.itemCards.length === 0) {
    return null;
  }

  const handleAddItem = (itemId, itemName) => {

    dispatch(addItems(itemName))



    // Show feedback that item was added
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: true
    }));
    
    // Optional: Show a toast/alert
    console.log(`Added ${itemName} to cart`);
    console.log(`Added ${itemId} to cart`);
    
    // Reset after 1 second
    setTimeout(() => {
      setExpandedItems(prev => ({
        ...prev,
        [itemId]: false
      }));
    }, 1000);
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden">
      <div
        className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-neutral-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-bold text-neutral-900">
          {category.title} ({category.itemCards.length})
        </h3>
        <span className="text-neutral-600 font-bold text-xl">{isExpanded ? "▼" : "▲"}</span>
      </div>

      {isExpanded && (
        <div className="divide-y divide-neutral-100">
          {category.itemCards.map((item) => {
            const itemInfo = item.card.info;
            const price =
              (itemInfo.price || itemInfo.defaultPrice) / 100;

            return (
              <div key={itemInfo.id} className="flex items-start justify-between gap-4 px-6 py-4">
                <div className="flex-1">
                  {/* Veg/Non-Veg Indicator */}
                  <div className="mb-2">
                    {itemInfo.isVeg ? (
                      <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                      </div>
                    ) : (
                      <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                      </div>
                    )}
                  </div>

                  {/* Item Info */}
                  <div>
                    <h4 className="text-base font-semibold text-neutral-900 mb-1">{itemInfo.name}</h4>
                    <p className="text-sm font-bold text-neutral-700 mb-2">₹{price}</p>

                    {/* Rating */}
                    {itemInfo.ratings?.aggregatedRating?.rating && (
                      <p className="text-xs text-green-600 font-medium mb-2">
                        ⭐{" "}
                        {itemInfo.ratings.aggregatedRating.rating} (
                        {itemInfo.ratings.aggregatedRating.ratingCountV2})
                      </p>
                    )}

                    {/* Description */}
                    {itemInfo.description && (
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {itemInfo.description.length > 120
                          ? itemInfo.description.substring(0, 120) + "..."
                          : itemInfo.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Item Image and Add Button */}
                {itemInfo.imageId && (
                  <div className="relative shrink-0">
                    <img
                      src={`${CDN_URL}${itemInfo.imageId}`}
                      alt={itemInfo.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <button 
                      onClick={() => handleAddItem(itemInfo.id, itemInfo.name)} 
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-6 py-1.5 font-bold text-sm rounded-md shadow-md border transition-all ${
                        expandedItems[itemInfo.id]
                          ? 'bg-green-500 text-white border-green-500'
                          : 'bg-white text-green-600 border-neutral-200 hover:bg-neutral-50'
                      }`}
                    >
                      {expandedItems[itemInfo.id] ? '✓ ADDED' : 'ADD+'}
                    </button>
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

