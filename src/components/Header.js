
import { useState } from "react";
import { logo_URL } from "../utils/constants";

const Header = () => {


  const [btnNameReact,setbtnNameReact] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img
          id="logo"
          src={logo_URL}
          alt="Food Delivery Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>Cart</li>
          <button className="loginbtn" 
          onClick={()=>{
            btnNameReact === "login"?setbtnNameReact("logout") : setbtnNameReact("login")
           
          }}

          
          >{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );    
};

export default Header
