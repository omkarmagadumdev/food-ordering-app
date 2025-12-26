import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  
  return (
    <div className="res-card">
      <div className="img-container">
        <img
          className="logo"
          src={
            resData?.imageId
              ? `${CDN_URL}${resData.imageId}`
              : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cvo1djhbwrgfqd64k0tl"
          }
          alt={resData?.name || "restaurant"}
        />
      </div>
      <div className="card-content">
        <h3>{resData?.name}</h3>
        <p className="cuisines">{resData?.cuisines?.join(", ")}</p>
        <div className="card-meta">
          <span className="rating">⭐ {resData?.rating}</span>
          <span className="dot">•</span>
          <span className="delivery-time">{resData?.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard