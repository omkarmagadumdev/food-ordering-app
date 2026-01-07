import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { logo_URL } from "../utils/constants"

const Header = ()=>{

console.log("header called")
const [btnName,setbtnName] = useState("login")

useEffect(()=>{
  console.log("useEffect called");
  
},[btnName])


  return(
    <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border border-neutral-200 rounded-xl shadow-lg px-6 py-3 flex items-center justify-between">
      <div className="h-auto w-auto">
          <img className="w-24 h-auto object-contain block"  src={logo_URL} alt="logo" />
      </div>
      <div>
        <ul className="flex list-none gap-3 items-center">
          <li>
            <Link className="px-3 py-2 rounded-md text-neutral-700 font-medium hover:text-orange-500 hover:bg-orange-50" to="/">Home</Link>
          </li>
          <li>
            <Link className="px-3 py-2 rounded-md text-neutral-700 font-medium hover:text-orange-500 hover:bg-orange-50" to="/about">About us</Link>
          </li>
          <li>
            <Link className="px-3 py-2 rounded-md text-neutral-700 font-medium hover:text-orange-500 hover:bg-orange-50" to="/contact">Contact us</Link>
          </li>
          <li>
            <Link className="px-3 py-2 rounded-md text-neutral-700 font-medium hover:text-orange-500 hover:bg-orange-50" to="/cart">cart</Link>
          </li>
          <button
            onClick={()=>{
              btnName === "login" ? setbtnName("logout") : setbtnName("login")
            }}
            className="ml-2 px-4 py-2 rounded-md text-white font-semibold shadow bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-600"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header