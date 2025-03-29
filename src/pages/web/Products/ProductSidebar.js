import React from 'react';

export const ProductSidebar = () => {
  return (
    <div className="product-sidebar">

        {/* Search Input with Icon */}
      <div className="sidebar-search mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="🔍Search products..."
          />
        </div>
      </div>
      
      <h5 className="sidebar-heading">Filters</h5>

      {/* Product Type */}
      <div className="sidebar-section">
        <h6>Product Type</h6>
        <div><input type="checkbox" /> <label>Handicrafts</label></div>
        <div><input type="checkbox" /> <label>Home Decor</label></div>
        <div><input type="checkbox" /> <label>Kitchenware</label></div>
        <div><input type="checkbox" /> <label>Traditional Wear</label></div>
      </div>

      {/* Price */}
      <div className="sidebar-section">
        <h6>Price</h6>
        <input type="range" min="0" max="10000" className="form-range" />
        <div className="price-inputs">
          <input type="number" placeholder="Min" />
          <input type="number" placeholder="Max" />
        </div>
      </div>

      {/* Made In State */}
      <div className="sidebar-section">
        <h6>Made In</h6>
        <div><input type="checkbox" /> <label>Rajasthan</label></div>
        <div><input type="checkbox" /> <label>West Bengal</label></div>
        <div><input type="checkbox" /> <label>Tamil Nadu</label></div>
        <div><input type="checkbox" /> <label>Maharashtra</label></div>
      </div>

      {/* Material */}
      <div className="sidebar-section">
        <h6>Material</h6>
        <div><input type="checkbox" /> <label>Wood</label></div>
        <div><input type="checkbox" /> <label>Clay</label></div>
        <div><input type="checkbox" /> <label>Brass</label></div>
        <div><input type="checkbox" /> <label>Cotton</label></div>
      </div>

      {/* Art Form */}
      <div className="sidebar-section">
        <h6>Art Form</h6>
        <div><input type="checkbox" /> <label>Madhubani</label></div>
        <div><input type="checkbox" /> <label>Warli</label></div>
        <div><input type="checkbox" /> <label>Block Print</label></div>
        <div><input type="checkbox" /> <label>Bandhani</label></div>
      </div>

      {/* Color */}
      <div className="sidebar-section">
        <h6>Color</h6>
        <div><input type="checkbox" /> <label>Earthy</label></div>
        <div><input type="checkbox" /> <label>Bright</label></div>
        <div><input type="checkbox" /> <label>Muted</label></div>
      </div>

      {/* Customer Ratings */}
      <div className="sidebar-section">
        <h6>Customer Ratings</h6>
        <div><input type="checkbox" /> <label>4★ & above</label></div>
        <div><input type="checkbox" /> <label>3★ & above</label></div>
      </div>
    </div>
  );
};
