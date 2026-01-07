import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurentCard = (props) => {
  const { resData } = props;
  
  return (
    <Link to={`/restaurant/${resData?.id}`} className="bg-white border border-neutral-200 rounded-xl shadow-lg p-3 transition-transform duration-150 hover:-translate-y-1 hover:shadow-xl block">
      <div className="w-full h-40 rounded-lg overflow-hidden bg-neutral-100 mb-2">
        <img
          className="w-full h-full object-cover block"
          src={
            resData?.imageId
              ? `${CDN_URL}${resData.imageId}`
              : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cvo1djhbwrgfqd64k0tl"
          }
          alt={resData?.name || "restaurant"}
        />
      </div>
      <div className="pt-1">
        <h3 className="text-lg font-bold text-neutral-900 mb-1">{resData?.name}</h3>
        <p className="text-sm text-neutral-600 leading-snug">{resData?.cuisines?.join(", ")}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="inline-flex items-center bg-green-500 text-white px-2 py-0.5 rounded-md text-sm font-bold">⭐ {resData?.rating}</span>
          <span className="text-neutral-400 font-bold">•</span>
          <span className="text-sm text-neutral-600 font-medium">{resData?.deliveryTime} mins</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurentCard