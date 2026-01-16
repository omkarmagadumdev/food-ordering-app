import { useEffect, useState,useContext} from "react"
import { Link } from "react-router-dom"
import { logo_URL } from "../utils/constants"
import UserContext from "../utils/UserContext" 
import { useSelector } from "react-redux"

const Header = ()=>{


const [btnName,setbtnName] = useState("login")

const cartItems = useSelector((store)=>store.cart.items)

const {loggedInUser} = useContext(UserContext);
  return(
    <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-md px-8 py-4 flex items-center justify-between">
      <div className="h-auto w-auto shrink-0">
          <Link to="/">
            <img
              className="w-28 h-auto object-contain block cursor-pointer hover:opacity-80 transition-opacity"
              src={logo_URL}
              alt="logo"
            />
          </Link>
      </div>
      <div className="grow">
        <ul className="flex list-none gap-1 items-center justify-center">
          <li>
            <Link className="px-4 py-2 rounded-lg text-neutral-700 font-medium transition-all duration-200 hover:text-orange-600 hover:bg-orange-100" to="/">Home</Link>
          </li>
          <li>
            <Link className="px-4 py-2 rounded-lg text-neutral-700 font-medium transition-all duration-200 hover:text-orange-600 hover:bg-orange-100" to="/about">About us</Link>
          </li>
          <li>
            <Link className="px-4 py-2 rounded-lg text-neutral-700 font-medium transition-all duration-200 hover:text-orange-600 hover:bg-orange-100" to="/contact">Contact us</Link>
          </li>
          <li>
            <Link className="px-4 py-2 rounded-lg text-neutral-700 font-medium transition-all duration-200 hover:text-orange-600 hover:bg-orange-100" to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <Link to="/cart" className="relative">
          <div className="px-4 py-2 rounded-lg text-neutral-700 font-bold transition-all duration-200 hover:text-orange-600 hover:bg-orange-100 inline-block">
            🛒 Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
        
        <button
          onClick={()=>{
            btnName === "login" ? setbtnName("logout") : setbtnName("login")
          }}  
          className="px-5 py-2 rounded-lg text-white font-semibold shadow-md bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 cursor-pointer transition-all duration-200 transform hover:shadow-lg"
        >
          {btnName}
        </button>
        {loggedInUser && (
          <span className="px-3 py-2 rounded-lg text-neutral-700 font-medium text-sm bg-neutral-100">{loggedInUser}</span>
        )}
      </div>  
    </div>
  )
}

export default Header