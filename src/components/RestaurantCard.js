import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { title, cuisines, avgRating, time, cloudinaryImageId } = props;

  return (
    <div className="restaurent-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="cardimg"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <div className="cardcontent">
        <div className="cuisin">
          <h3>{title}</h3>
          <h4>{cuisines}</h4>
        </div>
        <div className="meta">
          <span className="rating">⭐ {avgRating}</span>
          <span className="dot">•</span>
          <span className="time">{time}</span>
        </div>
      </div>
    </div>
  )
};

export default RestaurantCard