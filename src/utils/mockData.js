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
