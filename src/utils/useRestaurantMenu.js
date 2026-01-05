import { useEffect, useState } from "react";
import { mockRestaurantMenus } from "./mockData";

const buildFallbackMenu = (resId) => ({
  info: {
    id: resId,
    name: "Restaurant Menu",
    cuisines: ["Multi Cuisine"],
    costForTwo: "₹400",
    avgRating: 4.0,
    deliveryTime: 30,
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
                  rating: "4.2",
                },
              },
            },
          },
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
                  rating: "4.5",
                },
              },
            },
          },
        },
      ],
    },
  ],
});

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchMenu = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simulate API delay to mirror real fetch
        await new Promise((resolve) => setTimeout(resolve, 500));

        const restaurantData = mockRestaurantMenus[resId];
        const menuData = restaurantData || buildFallbackMenu(resId);

        if (!cancelled) {
          setResInfo(menuData);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchMenu();

    return () => {
      cancelled = true;
    };
  }, [resId]);

  return { resInfo, isLoading, error };
};

export default useRestaurantMenu;
