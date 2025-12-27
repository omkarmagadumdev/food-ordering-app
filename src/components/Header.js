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
    <div className="header">

      <div className="img-container">
          <img className="logo"  src={logo_URL} alt="" />
      </div>
      <div className="navitems">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/cart">cart</Link></li>
          <button onClick={()=>{
            btnName === "login" ? setbtnName("logout") : setbtnName("login")
            
          }} className="login">{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header