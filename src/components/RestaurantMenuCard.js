const RestaurantMenuCard = ()=>{
    return(
        <div className="RestaurantMenuCard">
                 <div className="restaurant-menu">
      {/* Restaurant Header */}
      <div className="restaurant-header">
        <div className="restaurant-info">
          <h1 className="restaurant-name">Restaurant Name</h1>
          <div className="restaurant-meta">
            <span className="rating">⭐ 4.5 (1.2k ratings)</span>
            <span className="cost">₹600 for two</span>
          </div>
          <p className="cuisine-type">Biryani, Indian</p>
          <div className="delivery-info">
            <span className="outlet">Outlet • Location</span>
            <span className="delivery-time">35-40 mins</span>
          </div>
        </div>
      </div>

      {/* Deals Section */}
      <div className="deals-section">
        <h2>Deals for you</h2>
        <div className="deals-carousel">
          <div className="deal-card">
            <h3>20% Off Upto ₹130</h3>
            <p>USE CODE123</p>
          </div>
          <div className="deal-card">
            <h3>10% Off Upto ₹100</h3>
            <p>USE CODE456</p>
          </div>
          <div className="deal-card">
            <h3>Free Delivery</h3>
            <p>On orders above ₹200</p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="menu-section">
        <h2 className="menu-title">MENU</h2>
        
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for dishes"
            className="menu-search"
          />
        </div>


        
        {/* Category List */}
        <div className="menu-accordion">
          <div className="menu-category">
            <div className="category-header">
              <h3 className="category-title">Hyderabadi Special Dum Biryani</h3>
              <div className="category-meta">
                <span className="category-count">(6)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
            <div className="subcategory-row">
              <span className="subcategory-name">Non Veg Hyderabadi Dum Biryani</span>
              <div className="subcategory-meta">
                <span className="subcategory-count">(9)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
            <div className="subcategory-row">
              <span className="subcategory-name">Veg Hyderabadi Dum Biryani</span>
              <div className="subcategory-meta">
                <span className="subcategory-count">(4)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
          </div>

          <div className="menu-category">
            <div className="category-header">
              <h3 className="category-title">Sides And Starters</h3>
              <div className="category-meta">
                <span className="category-count">(29)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
            <div className="subcategory-row">
              <span className="subcategory-name">Veg Starters</span>
              <div className="subcategory-meta">
                <span className="subcategory-count">(14)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
            <div className="subcategory-row">
              <span className="subcategory-name">Chicken Starters</span>
              <div className="subcategory-meta">
                <span className="subcategory-count">(19)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
            <div className="subcategory-row">
              <span className="subcategory-name">Mutton Starters</span>
              <div className="subcategory-meta">
                <span className="subcategory-count">(3)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
            <div className="subcategory-row">
              <span className="subcategory-name">Sea Food Starters</span>
              <div className="subcategory-meta">
                <span className="subcategory-count">(4)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
            <div className="subcategory-row">
              <span className="subcategory-name">Egg Starters</span>
              <div className="subcategory-meta">
                <span className="subcategory-count">(3)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
            <div className="subcategory-row">
              <span className="subcategory-name">Andhra Special Starters</span>
              <div className="subcategory-meta">
                <span className="subcategory-count">(1)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
          </div>

          <div className="menu-category">
            <div className="category-header">
              <h3 className="category-title">Tandoori & Kebabs</h3>
              <div className="category-meta">
                <span className="category-count">(12)</span>
                <span className="chevron">⌄</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
export default RestaurantMenuCard