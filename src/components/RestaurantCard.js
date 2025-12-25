

const RestaurentCard = (props)=>{
  const{resData} = props
  
  return (
    <div className="res-card">
      <div className="img-container">
        <img className="logo"  src={
          resData?.imageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${resData.imageId}`
            : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cvo1djhbwrgfqd64k0tl"
        } alt={resData?.name || "restaurant"} />
      </div>
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines?.join(", ")}</h4>
      <h4>{resData?.rating}</h4>
      <h4>{resData?.deliveryTime} mins</h4>
    </div>
  )
}

export default RestaurentCard