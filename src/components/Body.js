import RestaurentCard from "./RestaurantCard";
import {  useState, useEffect } from "react";
import {Shimmer} from "./Shimmer"


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
    <div className="body">
      <div className="search">
        <input type="text" className="searchbox" value={serachText} onChange={(e)=>{
              setsearchText(e.target.value)
        }}/>
        <button className="searchbtn"
        onClick={()=>{
          const filtered = ListOfRestaurent.filter((res)=>{
                return res.name.toLowerCase().includes(serachText.toLowerCase())
          })

        

          setListOfRestaurent(filtered)
          
        }}
        >Search

        </button>
      </div>
        <button className="filterbtn"
        onClick={()=>{
          const filtered = originallist.filter(
            (res)=>res.rating > 4.3

          )
          setListOfRestaurent(filtered)
        }}
      
        >Top Rated restaurent</button>
        <button className="lessrated" 
        onClick={()=>{
          const filtered = originallist.filter(
            (res)=>{
              return res.rating < 4.2

            }
          )
          setListOfRestaurent(filtered)
        }}
        >worst rated restaurent</button>
        <button className="showfull"
        onClick={ ()=> setListOfRestaurent(originallist)}
        >show full</button>
      <div className="restaurentcontainer">
        {ListOfRestaurent.map((r) => (
          <RestaurentCard key={r.id} resData={r} />
        ))}
      </div>
    </div>
  );
};

export default Body;
