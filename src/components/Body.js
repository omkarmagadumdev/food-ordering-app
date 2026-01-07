import RestaurentCard from "./RestaurantCard";
import {  useState, useEffect } from "react";
import Shimmer from "./Shimmer"


const Body = () => {
  const [ListOfRestaurent, setListOfRestaurent] = useState([]);
  const [originallist,setoriginallist] = useState([])
  const [serachText, setsearchText] = useState("")

   useEffect(()=>{
     fetchData();

   },[])
    
  
  const fetchData = async () => {


      const data = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );


    
    
    const json = await data.json();
    
    const cards = json?.data?.cards || json?.cards || [];
    
    
    const restaurants = cards
    .filter(
      (c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
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
      };
    });
    
    setListOfRestaurent(restaurants)
    setoriginallist(restaurants)
  
};




  return ListOfRestaurent.length ===0 ? <Shimmer /> : (
    <div className="max-w-300 mx-auto px-6 pb-8">
      <div className="mt-5 flex items-center gap-3 bg-white border border-neutral-200 rounded-xl shadow px-4 py-3">
        <input
          type="text"
          className="flex-1 px-3 py-2 border border-neutral-200 rounded-md text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          value={serachText}
          onChange={(e)=>{
              setsearchText(e.target.value)
          }}
          placeholder="Search restaurants..."
        />
        <button
          className="px-5 py-2 rounded-md text-white font-semibold shadow bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-600"
          onClick={()=>{
            const filtered = ListOfRestaurent.filter((res)=>{
              return res.name.toLowerCase().includes(serachText.toLowerCase())
            })
            setListOfRestaurent(filtered)
          }}
        >
          Search
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          className="px-4 py-2 rounded-md text-white font-semibold shadow bg-orange-500 hover:bg-orange-600"
          onClick={()=>{
            const filtered = originallist.filter((res)=> res.rating > 4.3)
            setListOfRestaurent(filtered)
          }}
        >
          Top Rated restaurants
        </button>
        <button
          className="px-4 py-2 rounded-md text-white font-semibold shadow bg-red-500 hover:bg-red-600"
          onClick={()=>{
            const filtered = originallist.filter((res)=> res.rating < 4.2)
            setListOfRestaurent(filtered)
          }}
        >
          Worst rated restaurants
        </button>
        <button
          className="px-4 py-2 rounded-md text-white font-semibold shadow bg-neutral-800 hover:bg-neutral-900"
          onClick={ ()=> setListOfRestaurent(originallist)}
        >
          Show all
        </button>
      </div>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {ListOfRestaurent.map((r) => (
          <RestaurentCard key={r.id} resData={r} />
        ))}
      </div>
    </div>
  );
};

export default Body;
