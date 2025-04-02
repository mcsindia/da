import React from "react";

export const OrderSidebar = ({ selectedStatus, setSelectedStatus, selectedYear, setSelectedYear, searchTerm, setSearchTerm }) => {
  return (
    <div className="order-sidebar">
      
      {/* Search Input with Icon */}
      <div className="sidebar-search mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <h5 className="order-sidebar-heading">Filters</h5>

      {/* Order Status */}
      <div className="sidebar-section">
        <h6>Order Status</h6>
        <div><input type="checkbox" value="On the way" onChange={(e) => setSelectedStatus(e.target.value)} /> <label>On the way</label></div>
        <div><input type="checkbox" value="Delivered" onChange={(e) => setSelectedStatus(e.target.value)} /> <label>Delivered</label></div>
        <div><input type="checkbox" value="Cancelled" onChange={(e) => setSelectedStatus(e.target.value)} /> <label>Cancelled</label></div>
        <div><input type="checkbox" value="Returned" onChange={(e) => setSelectedStatus(e.target.value)} /> <label>Returned</label></div>
      </div>

      {/* Order Year */}
      <div className="sidebar-section">
        <h6>Order Year</h6>
        <div><input type="checkbox" value="2024" onChange={(e) => setSelectedYear(e.target.value)} /> <label>2024</label></div>
        <div><input type="checkbox" value="2023" onChange={(e) => setSelectedYear(e.target.value)} /> <label>2023</label></div>
        <div><input type="checkbox" value="2022" onChange={(e) => setSelectedYear(e.target.value)} /> <label>2022</label></div>
      </div>
    </div>
  );
};
