import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurentCard = (props) => {
  const { resData } = props;
  
  return (
    <Link to={`/restaurant/${resData?.id}`} className="bg-white border border-neutral-200 rounded-2xl shadow-md p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-300 block overflow-hidden">
      <div className="w-full h-48 rounded-xl overflow-hidden bg-neutral-100 mb-3 relative group">
        <img
          className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-110"
          src={
            resData?.imageId
              ? `${CDN_URL}${resData.imageId}`
              : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cvo1djhbwrgfqd64k0tl"
          }
          alt={resData?.name || "restaurant"}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="pt-2">
        <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-1">{resData?.name}</h3>
        <p className="text-sm text-neutral-600 leading-snug line-clamp-2 mb-3">{resData?.cuisines?.join(", ")}</p>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center bg-linear-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">⭐ {resData?.rating}</span>
          </div>
          <span className="text-sm text-neutral-500 font-medium">🕐 {resData?.deliveryTime} mins</span>
        </div>
      </div>
    </Link>
  );
};

export const withPromotedlabel = (Component) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
          AD
        </label>
        <Component {...props} />
      </div>
    );
  };
};

export default RestaurentCard