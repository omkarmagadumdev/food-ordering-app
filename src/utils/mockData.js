export const mockRestaurants = [
  {
    id: "1",
    name: "Biryani House",
    imageId: "af33b81798b11deba7e734e575d6414b",
    rating: 4.5,
    cuisines: ["Biryani", "North Indian", "Mughlai"],
    costForTwo: "₹400",
    deliveryTime: 35
  },
  {
    id: "2",
    name: "Pizza Paradise",
    imageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    rating: 4.3,
    cuisines: ["Pizza", "Italian", "Fast Food"],
    costForTwo: "₹500",
    deliveryTime: 30
  },
  {
    id: "3",
    name: "Burger King",
    imageId: "e33e1d3ba7d6b2ffba9ba9e5386fabb7",
    rating: 4.1,
    cuisines: ["Burgers", "American", "Fast Food"],
    costForTwo: "₹350",
    deliveryTime: 25
  },
  {
    id: "4",
    name: "South Indian Express",
    imageId: "6e04be27387483a7c00444f8e8241108",
    rating: 4.6,
    cuisines: ["South Indian", "Dosa", "Idli"],
    costForTwo: "₹250",
    deliveryTime: 20
  },
  {
    id: "5",
    name: "Chinese Wok",
    imageId: "e0839ff574213e6f35b3899ebf1fc597",
    rating: 4.2,
    cuisines: ["Chinese", "Asian", "Thai"],
    costForTwo: "₹400",
    deliveryTime: 40
  },
  {
    id: "6",
    name: "Tandoori Nights",
    imageId: "aql0e6xfjgvhfnk6mcbl",
    rating: 4.7,
    cuisines: ["North Indian", "Tandoor", "Kebabs"],
    costForTwo: "₹600",
    deliveryTime: 45
  }
];

export const mockRestaurantMenus = {
  "1": {
    info: {
      id: "1",
      name: "Biryani House",
      cuisines: ["Biryani", "North Indian", "Mughlai"],
      costForTwo: "₹400",
      avgRating: 4.5,
      deliveryTime: 35
    },
    menu: [
      {
        title: "Recommended",
        itemCards: [
          {
            card: {
              info: {
                id: "101",
                name: "Chicken Biryani",
                price: 32000,
                description: "Aromatic basmati rice cooked with tender chicken pieces and traditional spices",
                isVeg: false,
                ratings: {
                  aggregatedRating: {
                    rating: "4.5"
                  }
                },
                imageId: "chicken_biryani"
              }
            }
          },
          {
            card: {
              info: {
                id: "102",
                name: "Mutton Biryani",
                price: 38000,
                description: "Flavorful mutton pieces layered with fragrant rice",
                isVeg: false,
                ratings: {
                  aggregatedRating: {
                    rating: "4.6"
                  }
                },
                imageId: "mutton_biryani"
              }
            }
          },
          {
            card: {
              info: {
                id: "103",
                name: "Veg Biryani",
                price: 25000,
                description: "Mixed vegetables with aromatic rice and spices",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.3"
                  }
                },
                imageId: "veg_biryani"
              }
            }
          }
        ]
      },
      {
        title: "Starters",
        itemCards: [
          {
            card: {
              info: {
                id: "104",
                name: "Chicken 65",
                price: 28000,
                description: "Spicy fried chicken appetizer",
                isVeg: false,
                ratings: {
                  aggregatedRating: {
                    rating: "4.4"
                  }
                }
              }
            }
          },
          {
            card: {
              info: {
                id: "105",
                name: "Paneer Tikka",
                price: 24000,
                description: "Grilled cottage cheese with Indian spices",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.2"
                  }
                }
              }
            }
          }
        ]
      },
      {
        title: "Breads",
        itemCards: [
          {
            card: {
              info: {
                id: "106",
                name: "Butter Naan",
                price: 5000,
                description: "Soft leavened bread with butter",
                isVeg: true
              }
            }
          },
          {
            card: {
              info: {
                id: "107",
                name: "Garlic Naan",
                price: 6000,
                description: "Naan bread topped with garlic and coriander",
                isVeg: true
              }
            }
          }
        ]
      }
    ]
  },
  "2": {
    info: {
      id: "2",
      name: "Pizza Paradise",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      costForTwo: "₹500",
      avgRating: 4.3,
      deliveryTime: 30
    },
    menu: [
      {
        title: "Best Sellers",
        itemCards: [
          {
            card: {
              info: {
                id: "201",
                name: "Margherita Pizza",
                price: 29900,
                description: "Classic pizza with tomato sauce, mozzarella, and basil",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.4"
                  }
                },
                imageId: "margherita"
              }
            }
          },
          {
            card: {
              info: {
                id: "202",
                name: "Pepperoni Pizza",
                price: 39900,
                description: "Loaded with pepperoni and cheese",
                isVeg: false,
                ratings: {
                  aggregatedRating: {
                    rating: "4.5"
                  }
                },
                imageId: "pepperoni"
              }
            }
          },
          {
            card: {
              info: {
                id: "203",
                name: "Farmhouse Pizza",
                price: 35900,
                description: "Vegetables galore with cheese",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.3"
                  }
                }
              }
            }
          }
        ]
      },
      {
        title: "Sides",
        itemCards: [
          {
            card: {
              info: {
                id: "204",
                name: "Garlic Bread",
                price: 12900,
                description: "Crispy bread with garlic butter",
                isVeg: true
              }
            }
          },
          {
            card: {
              info: {
                id: "205",
                name: "Cheese Sticks",
                price: 15900,
                description: "Fried mozzarella sticks",
                isVeg: true
              }
            }
          }
        ]
      }
    ]
  },
  "3": {
    info: {
      id: "3",
      name: "Burger King",
      cuisines: ["Burgers", "American", "Fast Food"],
      costForTwo: "₹350",
      avgRating: 4.1,
      deliveryTime: 25
    },
    menu: [
      {
        title: "Burgers",
        itemCards: [
          {
            card: {
              info: {
                id: "301",
                name: "Whopper",
                price: 19900,
                description: "Flame-grilled beef patty with fresh vegetables",
                isVeg: false,
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
                id: "302",
                name: "Veg Whopper",
                price: 17900,
                description: "Plant-based patty with fresh vegetables",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.0"
                  }
                }
              }
            }
          },
          {
            card: {
              info: {
                id: "303",
                name: "Chicken Burger",
                price: 15900,
                description: "Crispy chicken patty burger",
                isVeg: false,
                ratings: {
                  aggregatedRating: {
                    rating: "4.1"
                  }
                }
              }
            }
          }
        ]
      },
      {
        title: "Sides",
        itemCards: [
          {
            card: {
              info: {
                id: "304",
                name: "French Fries",
                price: 9900,
                description: "Crispy golden fries",
                isVeg: true
              }
            }
          },
          {
            card: {
              info: {
                id: "305",
                name: "Onion Rings",
                price: 11900,
                description: "Crispy fried onion rings",
                isVeg: true
              }
            }
          }
        ]
      }
    ]
  },
  "4": {
    info: {
      id: "4",
      name: "South Indian Express",
      cuisines: ["South Indian", "Dosa", "Idli"],
      costForTwo: "₹250",
      avgRating: 4.6,
      deliveryTime: 20
    },
    menu: [
      {
        title: "Dosas",
        itemCards: [
          {
            card: {
              info: {
                id: "401",
                name: "Masala Dosa",
                price: 12000,
                description: "Crispy dosa filled with spiced potato",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.7"
                  }
                }
              }
            }
          },
          {
            card: {
              info: {
                id: "402",
                name: "Cheese Dosa",
                price: 15000,
                description: "Dosa with melted cheese",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.5"
                  }
                }
              }
            }
          },
          {
            card: {
              info: {
                id: "403",
                name: "Plain Dosa",
                price: 9000,
                description: "Classic crispy dosa",
                isVeg: true
              }
            }
          }
        ]
      },
      {
        title: "Idli & Vada",
        itemCards: [
          {
            card: {
              info: {
                id: "404",
                name: "Idli (3 pcs)",
                price: 8000,
                description: "Steamed rice cakes with sambar and chutney",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.6"
                  }
                }
              }
            }
          },
          {
            card: {
              info: {
                id: "405",
                name: "Medu Vada (2 pcs)",
                price: 7000,
                description: "Crispy lentil donuts",
                isVeg: true
              }
            }
          }
        ]
      }
    ]
  },
  "5": {
    info: {
      id: "5",
      name: "Chinese Wok",
      cuisines: ["Chinese", "Asian", "Thai"],
      costForTwo: "₹400",
      avgRating: 4.2,
      deliveryTime: 40
    },
    menu: [
      {
        title: "Noodles",
        itemCards: [
          {
            card: {
              info: {
                id: "501",
                name: "Hakka Noodles",
                price: 18000,
                description: "Stir-fried noodles with vegetables",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.3"
                  }
                }
              }
            }
          },
          {
            card: {
              info: {
                id: "502",
                name: "Chicken Noodles",
                price: 22000,
                description: "Noodles with chicken and vegetables",
                isVeg: false,
                ratings: {
                  aggregatedRating: {
                    rating: "4.4"
                  }
                }
              }
            }
          }
        ]
      },
      {
        title: "Rice",
        itemCards: [
          {
            card: {
              info: {
                id: "503",
                name: "Veg Fried Rice",
                price: 16000,
                description: "Fried rice with mixed vegetables",
                isVeg: true
              }
            }
          },
          {
            card: {
              info: {
                id: "504",
                name: "Chicken Fried Rice",
                price: 20000,
                description: "Fried rice with chicken pieces",
                isVeg: false
              }
            }
          }
        ]
      },
      {
        title: "Starters",
        itemCards: [
          {
            card: {
              info: {
                id: "505",
                name: "Spring Rolls",
                price: 14000,
                description: "Crispy vegetable spring rolls",
                isVeg: true
              }
            }
          },
          {
            card: {
              info: {
                id: "506",
                name: "Chilli Chicken",
                price: 24000,
                description: "Spicy chicken in Indo-Chinese sauce",
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
  },
  "6": {
    info: {
      id: "6",
      name: "Tandoori Nights",
      cuisines: ["North Indian", "Tandoor", "Kebabs"],
      costForTwo: "₹600",
      avgRating: 4.7,
      deliveryTime: 45
    },
    menu: [
      {
        title: "Kebabs",
        itemCards: [
          {
            card: {
              info: {
                id: "601",
                name: "Tandoori Chicken",
                price: 32000,
                description: "Chicken marinated in yogurt and spices, cooked in tandoor",
                isVeg: false,
                ratings: {
                  aggregatedRating: {
                    rating: "4.8"
                  }
                }
              }
            }
          },
          {
            card: {
              info: {
                id: "602",
                name: "Seekh Kebab",
                price: 35000,
                description: "Minced meat skewers with spices",
                isVeg: false,
                ratings: {
                  aggregatedRating: {
                    rating: "4.7"
                  }
                }
              }
            }
          },
          {
            card: {
              info: {
                id: "603",
                name: "Paneer Tikka",
                price: 28000,
                description: "Cottage cheese marinated and grilled",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.5"
                  }
                }
              }
            }
          }
        ]
      },
      {
        title: "Main Course",
        itemCards: [
          {
            card: {
              info: {
                id: "604",
                name: "Butter Chicken",
                price: 34000,
                description: "Creamy tomato curry with tender chicken",
                isVeg: false,
                ratings: {
                  aggregatedRating: {
                    rating: "4.9"
                  }
                }
              }
            }
          },
          {
            card: {
              info: {
                id: "605",
                name: "Dal Makhani",
                price: 26000,
                description: "Creamy black lentils slow-cooked with butter",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.6"
                  }
                }
              }
            }
          },
          {
            card: {
              info: {
                id: "606",
                name: "Paneer Butter Masala",
                price: 28000,
                description: "Cottage cheese in rich tomato gravy",
                isVeg: true,
                ratings: {
                  aggregatedRating: {
                    rating: "4.7"
                  }
                }
              }
            }
          }
        ]
      }
    ]
  }
};

// Mock Restaurant Menu Data for 8 Restaurants
export const restaurantMenuData = {
  "1": {
    name: "Biryani House",
    avgRating: 4.5,
    totalRatingsString: "1000+ reviews",
    costForTwoMessage: "₹400 for two",
    cuisines: ["Biryani", "North Indian", "Mughlai"],
    categories: [
      {
        title: "Biryani Specials",
        itemCards: [
          {
            card: {
              info: {
                id: "1",
                name: "Hyderabadi Chicken Biryani",
                price: 45000,
                imageId: "rng4r1h3j2l4m5n6o7p8q9",
                isVeg: false,
                description: "Fragrant basmati rice with tender chicken and aromatic spices",
                ratings: { aggregatedRating: { rating: "4.8", ratingCountV2: "500" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "2",
                name: "Mutton Biryani",
                price: 52000,
                imageId: "rng4r1h3j2l4m5n6o7p8q10",
                isVeg: false,
                description: "Slow-cooked mutton in aromatic basmati rice",
                ratings: { aggregatedRating: { rating: "4.7", ratingCountV2: "450" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "3",
                name: "Veg Biryani",
                price: 35000,
                imageId: "rng4r1h3j2l4m5n6o7p8q11",
                isVeg: true,
                description: "Mixed vegetables with aromatic rice and spices",
                ratings: { aggregatedRating: { rating: "4.5", ratingCountV2: "300" } }
              }
            }
          }
        ]
      },
      {
        title: "Breads",
        itemCards: [
          {
            card: {
              info: {
                id: "4",
                name: "Butter Naan",
                price: 5000,
                imageId: "rng4r1h3j2l4m5n6o7p8q12",
                isVeg: true,
                description: "Soft naan bread with melted butter",
                ratings: { aggregatedRating: { rating: "4.6", ratingCountV2: "200" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "5",
                name: "Garlic Naan",
                price: 5500,
                imageId: "rng4r1h3j2l4m5n6o7p8q13",
                isVeg: true,
                description: "Fresh naan with roasted garlic",
                ratings: { aggregatedRating: { rating: "4.5", ratingCountV2: "180" } }
              }
            }
          }
        ]
      }
    ]
  },
  "2": {
    name: "Pizza Paradise",
    avgRating: 4.3,
    totalRatingsString: "800+ reviews",
    costForTwoMessage: "₹500 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    categories: [
      {
        title: "Pizzas",
        itemCards: [
          {
            card: {
              info: {
                id: "6",
                name: "Margherita Pizza",
                price: 35000,
                imageId: "rng4r1h3j2l4m5n6o7p8q14",
                isVeg: true,
                description: "Classic pizza with tomato, mozzarella, and basil",
                ratings: { aggregatedRating: { rating: "4.7", ratingCountV2: "400" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "7",
                name: "Pepperoni Pizza",
                price: 40000,
                imageId: "rng4r1h3j2l4m5n6o7p8q15",
                isVeg: false,
                description: "Topped with spicy pepperoni and cheese",
                ratings: { aggregatedRating: { rating: "4.8", ratingCountV2: "500" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "8",
                name: "Veggie Supreme",
                price: 38000,
                imageId: "rng4r1h3j2l4m5n6o7p8q16",
                isVeg: true,
                description: "Loaded with bell peppers, onions, mushrooms, and corn",
                ratings: { aggregatedRating: { rating: "4.6", ratingCountV2: "350" } }
              }
            }
          }
        ]
      },
      {
        title: "Sides",
        itemCards: [
          {
            card: {
              info: {
                id: "9",
                name: "Garlic Bread",
                price: 12000,
                imageId: "rng4r1h3j2l4m5n6o7p8q17",
                isVeg: true,
                description: "Crispy bread with garlic and herbs",
                ratings: { aggregatedRating: { rating: "4.5", ratingCountV2: "200" } }
              }
            }
          }
        ]
      }
    ]
  },
  "3": {
    name: "Burger King",
    avgRating: 4.1,
    totalRatingsString: "650+ reviews",
    costForTwoMessage: "₹350 for two",
    cuisines: ["Burgers", "American", "Fast Food"],
    categories: [
      {
        title: "Burgers",
        itemCards: [
          {
            card: {
              info: {
                id: "10",
                name: "Whopper",
                price: 32000,
                imageId: "rng4r1h3j2l4m5n6o7p8q18",
                isVeg: false,
                description: "Flame-grilled beef patty with fresh toppings",
                ratings: { aggregatedRating: { rating: "4.7", ratingCountV2: "600" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "11",
                name: "Chicken Burger",
                price: 28000,
                imageId: "rng4r1h3j2l4m5n6o7p8q19",
                isVeg: false,
                description: "Crispy fried chicken with special sauce",
                ratings: { aggregatedRating: { rating: "4.6", ratingCountV2: "450" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "12",
                name: "Veggie Burger",
                price: 25000,
                imageId: "rng4r1h3j2l4m5n6o7p8q20",
                isVeg: true,
                description: "Plant-based patty with fresh vegetables",
                ratings: { aggregatedRating: { rating: "4.3", ratingCountV2: "300" } }
              }
            }
          }
        ]
      },
      {
        title: "Sides",
        itemCards: [
          {
            card: {
              info: {
                id: "13",
                name: "Fries",
                price: 10000,
                imageId: "rng4r1h3j2l4m5n6o7p8q21",
                isVeg: true,
                description: "Crispy golden french fries",
                ratings: { aggregatedRating: { rating: "4.5", ratingCountV2: "400" } }
              }
            }
          }
        ]
      }
    ]
  },
  "4": {
    name: "South Indian Express",
    avgRating: 4.6,
    totalRatingsString: "1200+ reviews",
    costForTwoMessage: "₹250 for two",
    cuisines: ["South Indian", "Dosa", "Idli"],
    categories: [
      {
        title: "Dosas",
        itemCards: [
          {
            card: {
              info: {
                id: "14",
                name: "Masala Dosa",
                price: 18000,
                imageId: "rng4r1h3j2l4m5n6o7p8q22",
                isVeg: true,
                description: "Crispy dosa with spiced potato filling",
                ratings: { aggregatedRating: { rating: "4.8", ratingCountV2: "700" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "15",
                name: "Cheese Dosa",
                price: 22000,
                imageId: "rng4r1h3j2l4m5n6o7p8q23",
                isVeg: true,
                description: "Crispy dosa with melted cheese",
                ratings: { aggregatedRating: { rating: "4.7", ratingCountV2: "500" } }
              }
            }
          }
        ]
      },
      {
        title: "Idli & Vada",
        itemCards: [
          {
            card: {
              info: {
                id: "16",
                name: "Idli Sambar",
                price: 12000,
                imageId: "rng4r1h3j2l4m5n6o7p8q24",
                isVeg: true,
                description: "Soft idli with hot sambar",
                ratings: { aggregatedRating: { rating: "4.6", ratingCountV2: "400" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "17",
                name: "Medu Vada",
                price: 14000,
                imageId: "rng4r1h3j2l4m5n6o7p8q25",
                isVeg: true,
                description: "Crispy vada with coconut chutney",
                ratings: { aggregatedRating: { rating: "4.5", ratingCountV2: "350" } }
              }
            }
          }
        ]
      }
    ]
  },
  "5": {
    name: "Chinese Wok",
    avgRating: 4.2,
    totalRatingsString: "900+ reviews",
    costForTwoMessage: "₹400 for two",
    cuisines: ["Chinese", "Asian", "Thai"],
    categories: [
      {
        title: "Noodles",
        itemCards: [
          {
            card: {
              info: {
                id: "18",
                name: "Chow Mein",
                price: 28000,
                imageId: "rng4r1h3j2l4m5n6o7p8q26",
                isVeg: false,
                description: "Stir-fried noodles with chicken and vegetables",
                ratings: { aggregatedRating: { rating: "4.7", ratingCountV2: "500" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "19",
                name: "Veg Chow Mein",
                price: 22000,
                imageId: "rng4r1h3j2l4m5n6o7p8q27",
                isVeg: true,
                description: "Stir-fried noodles with mixed vegetables",
                ratings: { aggregatedRating: { rating: "4.5", ratingCountV2: "400" } }
              }
            }
          }
        ]
      },
      {
        title: "Fried Rice",
        itemCards: [
          {
            card: {
              info: {
                id: "20",
                name: "Chicken Fried Rice",
                price: 30000,
                imageId: "rng4r1h3j2l4m5n6o7p8q28",
                isVeg: false,
                description: "Fragrant rice with chicken and vegetables",
                ratings: { aggregatedRating: { rating: "4.6", ratingCountV2: "450" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "21",
                name: "Egg Fried Rice",
                price: 24000,
                imageId: "rng4r1h3j2l4m5n6o7p8q29",
                isVeg: false,
                description: "Fried rice with scrambled eggs",
                ratings: { aggregatedRating: { rating: "4.4", ratingCountV2: "380" } }
              }
            }
          }
        ]
      }
    ]
  },
  "6": {
    name: "Tandoori Nights",
    avgRating: 4.4,
    totalRatingsString: "850+ reviews",
    costForTwoMessage: "₹450 for two",
    cuisines: ["Tandoori", "North Indian", "Grilled"],
    categories: [
      {
        title: "Tandoori Items",
        itemCards: [
          {
            card: {
              info: {
                id: "22",
                name: "Tandoori Chicken",
                price: 48000,
                imageId: "rng4r1h3j2l4m5n6o7p8q30",
                isVeg: false,
                description: "Marinated and grilled to perfection",
                ratings: { aggregatedRating: { rating: "4.8", ratingCountV2: "600" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "23",
                name: "Tandoori Paneer",
                price: 35000,
                imageId: "rng4r1h3j2l4m5n6o7p8q31",
                isVeg: true,
                description: "Paneer cubes with spices and grilled",
                ratings: { aggregatedRating: { rating: "4.6", ratingCountV2: "400" } }
              }
            }
          }
        ]
      },
      {
        title: "Curries",
        itemCards: [
          {
            card: {
              info: {
                id: "24",
                name: "Butter Chicken",
                price: 42000,
                imageId: "rng4r1h3j2l4m5n6o7p8q32",
                isVeg: false,
                description: "Tender chicken in creamy tomato gravy",
                ratings: { aggregatedRating: { rating: "4.7", ratingCountV2: "500" } }
              }
            }
          }
        ]
      }
    ]
  },
  "7": {
    name: "Sushi Sensation",
    avgRating: 4.5,
    totalRatingsString: "750+ reviews",
    costForTwoMessage: "₹550 for two",
    cuisines: ["Japanese", "Sushi", "Asian"],
    categories: [
      {
        title: "Sushi Rolls",
        itemCards: [
          {
            card: {
              info: {
                id: "25",
                name: "California Roll",
                price: 55000,
                imageId: "rng4r1h3j2l4m5n6o7p8q33",
                isVeg: false,
                description: "Crab, avocado, and cucumber roll",
                ratings: { aggregatedRating: { rating: "4.7", ratingCountV2: "350" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "26",
                name: "Vegetable Roll",
                price: 40000,
                imageId: "rng4r1h3j2l4m5n6o7p8q34",
                isVeg: true,
                description: "Fresh vegetables wrapped in nori",
                ratings: { aggregatedRating: { rating: "4.5", ratingCountV2: "280" } }
              }
            }
          }
        ]
      },
      {
        title: "Appetizers",
        itemCards: [
          {
            card: {
              info: {
                id: "27",
                name: "Edamame",
                price: 18000,
                imageId: "rng4r1h3j2l4m5n6o7p8q35",
                isVeg: true,
                description: "Steamed soybeans with sea salt",
                ratings: { aggregatedRating: { rating: "4.4", ratingCountV2: "200" } }
              }
            }
          }
        ]
      }
    ]
  },
  "8": {
    name: "Café Paradise",
    avgRating: 4.3,
    totalRatingsString: "920+ reviews",
    costForTwoMessage: "₹300 for two",
    cuisines: ["Cafe", "Continental", "Desserts"],
    categories: [
      {
        title: "Coffee & Tea",
        itemCards: [
          {
            card: {
              info: {
                id: "28",
                name: "Cappuccino",
                price: 12000,
                imageId: "rng4r1h3j2l4m5n6o7p8q36",
                isVeg: true,
                description: "Creamy cappuccino with espresso",
                ratings: { aggregatedRating: { rating: "4.6", ratingCountV2: "400" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "29",
                name: "Iced Latte",
                price: 13000,
                imageId: "rng4r1h3j2l4m5n6o7p8q37",
                isVeg: true,
                description: "Cold latte with ice and milk",
                ratings: { aggregatedRating: { rating: "4.5", ratingCountV2: "350" } }
              }
            }
          }
        ]
      },
      {
        title: "Pastries & Desserts",
        itemCards: [
          {
            card: {
              info: {
                id: "30",
                name: "Chocolate Cake",
                price: 22000,
                imageId: "rng4r1h3j2l4m5n6o7p8q38",
                isVeg: true,
                description: "Rich chocolate cake with frosting",
                ratings: { aggregatedRating: { rating: "4.7", ratingCountV2: "500" } }
              }
            }
          },
          {
            card: {
              info: {
                id: "31",
                name: "Cheesecake",
                price: 25000,
                imageId: "rng4r1h3j2l4m5n6o7p8q39",
                isVeg: true,
                description: "Creamy cheesecake with berries",
                ratings: { aggregatedRating: { rating: "4.8", ratingCountV2: "450" } }
              }
            }
          }
        ]
      }
    ]
  }
};
