import { logo_URL } from "../utils/constants"

const Header = ()=>{

  return(
    <div className="header">

      <div className="img-container">
          <img className="logo"  src={logo_URL} alt="" />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header