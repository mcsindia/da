import React, { useState, useEffect } from "react";
import { useRef } from "react";
import {
    FaChartLine,
    FaUsers,
    FaCogs,
    FaMotorcycle,
    FaCaretDown, FaCaretRight,
    FaCreditCard,
    FaChartBar,
    FaRegEnvelope,
    FaRegStar,
    FaBox,
    FaProductHunt, FaCrown, FaAppStore
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Sidebar = ({ isOpen, setIsOpen }) => {
    const sidebarRef = useRef();
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("");
    const [openMenu, setOpenMenu] = useState(localStorage.getItem("openMenu") || null);
    const [openSubMenu, setOpenSubMenu] = useState(localStorage.getItem("openSubMenu") || null);
    const [openSubSubMenu, setOpenSubSubMenu] = useState(localStorage.getItem("openSubSubMenu") || null);

    const handleMenuToggle = (menuName) => {
        const newOpenMenu = openMenu === menuName ? null : menuName;
        setOpenMenu(newOpenMenu);
        setOpenSubMenu(null); // Close any open submenus when switching menus

        // Save state in localStorage
        localStorage.setItem("openMenu", newOpenMenu);
    };

    const handleSubMenuToggle = (subMenuName) => {
        const newOpenSubMenu = openSubMenu === subMenuName ? null : subMenuName;
        setOpenSubMenu(newOpenSubMenu);

        // Save state in localStorage
        localStorage.setItem("openSubMenu", newOpenSubMenu);
    };

    const handleSubSubMenuToggle = (SubsubMenuName) => {
        const newOpenSubSubMenu = openSubSubMenu === SubsubMenuName ? null : SubsubMenuName;
        setOpenSubSubMenu(newOpenSubSubMenu);

        // Save state in localStorage
        localStorage.setItem("openSubSubMenu", newOpenSubSubMenu);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isSmallDevice = window.innerWidth <= 768;
            if (
                isSmallDevice &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                // Fully hide sidebar
                setIsOpen(false);
    
                // Optional: Reset open menus
                setOpenMenu(null);
                setOpenSubMenu(null);
                setOpenSubSubMenu(null);
                localStorage.removeItem("openMenu");
                localStorage.removeItem("openSubMenu");
                localStorage.removeItem("openSubSubMenu");
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
      

    return (
        <div className={`dms-sidebar bg-color text-white ${isOpen ? "open" : "closed"}`}   ref={sidebarRef}>
            {/* Sidebar Header */}
            <div className="p-3 d-flex align-items-center sidebar-title">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none">
                    {!isOpen ? (
                        < FaMotorcycle size={30} className="text-white d-none d-md-block" />
                    ) : (
                        < FaMotorcycle size={30} className="text-white d-block d-md-none" />
                    )}
                    {isOpen && <h4 className="mb-0 ms-2">DMS</h4>}
                </a>
            </div>
            <hr />

            {/* Sidebar Links */}
            <ul className="nav flex-column">
                {/* Dashboard */}
                <li className="dms-nav-item">
                    <a
                        href="/"
                        className={`dms-nav-link text-white ${activeMenu === "dashboard" ? "active" : ""}`}
                        onClick={() => setActiveMenu("dashboard")}
                    >
                        <FaChartLine className="me-2" />
                        <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Dashboard</span>
                    </a>
                </li>

                  {/* Company */}
                  <li className="dms-nav-item">
                    <div
                        className={`dms-nav-link text-white ${openMenu === "company" ? "active" : ""}`}
                        onClick={() => handleMenuToggle("company")}
                    >
                        <div className="d-flex align-items-center">
                            <FaCrown className="me-2" />
                            <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Company</span>
                        </div>
                        <FaCaretDown
                            className={`ms-auto ${openMenu === "user" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""}`}
                            style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                        />
                    </div>

                    {openMenu === "company" && (
                        <ul className="submenu show">
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <div
                                        className="dms-nav-link text-white"
                                        onClick={() => handleSubMenuToggle("company")}
                                    >
                                        Employee & Staff Management
                                    </div>
                                </div>

                                {openSubMenu === "company" && (
                                    <ul className="submenu show">
                                        <li className="dms-nav-item">
                                            <div className="d-flex align-items-center">
                                                <FaCaretRight />
                                                <a href="/employee" className="dms-nav-link text-white">
                                                    All Employees
                                                </a>
                                            </div>
                                        </li>
                                        <li className="dms-nav-item">
                                            <div className="d-flex align-items-center">
                                                <FaCaretRight />
                                                <a href="/department" className="dms-nav-link text-white">
                                                    Department
                                                </a>
                                            </div>
                                        </li>
                                        <li className="dms-nav-item">
                                            <div className="d-flex align-items-center">
                                                <FaCaretRight />
                                                <a href="/designation" className="dms-nav-link text-white">
                                                    Designation
                                                </a>
                                            </div>
                                        </li>
                                        <li className="dms-nav-item">
                                            <div className="d-flex align-items-center">
                                                <FaCaretRight />
                                                <a href="/employee-roles" className="dms-nav-link text-white">
                                                    Role
                                                </a>
                                            </div>
                                        </li>
                                        <li className="dms-nav-item">
                                            <div className="d-flex align-items-center">
                                                <FaCaretRight />
                                                <a href="/role-permission" className="dms-nav-link text-white">
                                                    Roles-Permission
                                                </a>
                                            </div>
                                        </li>
                                        <li className="dms-nav-item">
                                            <div className="d-flex align-items-center">
                                                <FaCaretRight />
                                                <a href="/activity-logs" className="dms-nav-link text-white">
                                                    Activity Logs
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    )}
                </li>

                {/* User Management */}
                <li className="dms-nav-item">
                    <div
                        className={`dms-nav-link text-white  ${openMenu === "user" ? "active" : ""}`}
                        onClick={() => handleMenuToggle("user")}
                    >
                        <div className="d-flex align-items-center">
                            <FaUsers className="me-2" />
                            <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>User </span>
                        </div>
                        <FaCaretDown
                            className={`ms-auto ${openMenu === "user" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                }`}
                            style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                        />

                    </div>
                    {openMenu === "user" && (
                        <ul className="submenu show">
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/user" className="dms-nav-link text-white">User List</a>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>

  {/* Product Management */}
  <li className="dms-nav-item">
                    <div
                        className={`dms-nav-link text-white ${openMenu === "product" ? "active" : ""}`}
                        onClick={() => handleMenuToggle("product")}
                    >
                        <div className="d-flex align-items-center">
                            <FaProductHunt className="me-2" />
                            <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Product Management</span>
                        </div>
                        <FaCaretDown
                            className={`ms-auto ${openMenu === "product" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                }`}
                            style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                        />
                    </div>
                    {openMenu === "product" && (
                        <ul className="submenu show">
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/dms/product" className="dms-nav-link text-white">
                                        All Products
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/dms/manage-category" className="dms-nav-link text-white">
                                        Manage Category
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/dms/inventory" className="dms-nav-link text-white">
                                        Manage Inventory
                                    </a>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>

                 {/* Order Management */}
                 <li className="dms-nav-item">
                    <div
                        className={`dms-nav-link text-white ${openMenu === "order" ? "active" : ""}`}
                        onClick={() => handleMenuToggle("order")}
                    >
                        <div className="d-flex align-items-center">
                            <FaBox className="me-2" />
                            <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Order Management</span>
                        </div>
                        <FaCaretDown
                            className={`ms-auto ${openMenu === "order" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                }`}
                            style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                        />
                    </div>
                    {openMenu === "order" && (
                        <ul className="submenu show">
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/dms/new-orders" className="dms-nav-link text-white">
                                        New Orders
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/dms/processing-orders" className="dms-nav-link text-white">
                                        Processing Orders
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/dms/completed-orders" className="dms-nav-link text-white">
                                        Completed Orders
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/dms/canceled-orders" className="dms-nav-link text-white">
                                        Canceled/Returned Orders
                                    </a>
                                </div>
                            </li>
                        </ul>
                    )}
                    </li>

                      {/* Reviews and Feedback */}
                      <li className="dms-nav-item">
                        <div
                            className={`dms-nav-link text-white ${openMenu === "reviews" ? "active" : ""}`}
                            onClick={() => handleMenuToggle("reviews")}
                        >
                            <div className="d-flex align-items-center">
                                <FaRegStar className="me-2" />
                                <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Reviews & Feedback</span>
                            </div>
                            <FaCaretDown
                                className={`ms-auto ${openMenu === "reviews" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                    }`}
                                style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                            />
                        </div>
                        {openMenu === "reviews" && (
                            <ul className="submenu show">
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/product-review" className="dms-nav-link text-white">
                                            Product Reviews
                                        </a>
                                    </div>
                                </li>
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/customer-feedback" className="dms-nav-link text-white">
                                            Customer Feedback
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Coupons and Discounts */}
                    <li className="dms-nav-item">
                        <div
                            className={`dms-nav-link text-white ${openMenu === "coupons" ? "active" : ""}`}
                            onClick={() => handleMenuToggle("coupons")}
                        >
                            <div className="d-flex align-items-center">
                                <FaRegEnvelope className="me-2" />
                                <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Coupons & Discounts</span>
                            </div>
                            <FaCaretDown
                                className={`ms-auto ${openMenu === "coupons" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                    }`}
                                style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                            />
                        </div>
                        {openMenu === "coupons" && (
                            <ul className="submenu show">
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/manage-coupons" className="dms-nav-link text-white">
                                            Manage Coupons
                                        </a>
                                    </div>
                                </li>
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/discounts" className="dms-nav-link text-white">
                                            Apply Discounts
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Reports and Analysics */}
                    <li className="dms-nav-item">
                        <div
                            className={`dms-nav-link text-white ${openMenu === "reports" ? "active" : ""}`}
                            onClick={() => handleMenuToggle("reports")}
                        >
                            <div className="d-flex align-items-center">
                                <FaChartBar className="me-2" />
                                <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Reports & Analysis</span>
                            </div>
                            <FaCaretDown
                                className={`ms-auto ${openMenu === "reports" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                    }`}
                                style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                            />
                        </div>
                        {openMenu === "reports" && (
                            <ul className="submenu show">
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/sales-report" className="dms-nav-link text-white">
                                            Sales Reports
                                        </a>
                                    </div>
                                </li>
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/product-performance" className="dms-nav-link text-white">
                                            Product Performance
                                        </a>
                                    </div>
                                </li>
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/customer-activity" className="dms-nav-link text-white">
                                            Customer Activity
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Payment and Transaction */}
                    <li className="dms-nav-item">
                        <div
                            className={`dms-nav-link text-white ${openMenu === "payment" ? "active" : ""}`}
                            onClick={() => handleMenuToggle("payment")}
                        >
                            <div className="d-flex align-items-center">
                                <FaCreditCard className="me-2" />
                                <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Payment & Transaction</span>
                            </div>
                            <FaCaretDown
                                className={`ms-auto ${openMenu === "payment" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                    }`}
                                style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                            />
                        </div>
                        {openMenu === "payment" && (
                            <ul className="submenu show">
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/payment-history" className="dms-nav-link text-white">
                                            Payment History
                                        </a>
                                    </div>
                                </li>
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/refunds" className="dms-nav-link text-white">
                                            Manage Refunds
                                        </a>
                                    </div>
                                </li>
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/invoice" className="dms-nav-link text-white">
                                            Manage Invoice
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Settings */}
                    <li className="dms-nav-item">
                        <div
                            className={`dms-nav-link text-white ${openMenu === "setting" ? "active" : ""}`}
                            onClick={() => handleMenuToggle("setting")}
                        >
                            <div className="d-flex align-items-center">
                                <FaCogs className="me-2" />
                                <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Settings</span>
                            </div>
                            <FaCaretDown
                                className={`ms-auto ${openMenu === "setting" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                    }`}
                                style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                            />
                        </div>
                        {openMenu === "setting" && (
                            <ul className="submenu show">
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/profile-setting" className="dms-nav-link text-white">
                                            Profile Setting
                                        </a>
                                    </div>
                                </li>
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/general-store-setting" className="dms-nav-link text-white">
                                            General Store
                                        </a>
                                    </div>
                                </li>
                                <li className="dms-nav-item">
                                    <div className="d-flex align-items-center">
                                        <FaCaretRight />
                                        <a href="/dms/shipping-tax-setting" className="dms-nav-link text-white">
                                            Shipping & Tax
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </li>
            </ul>
        </div>
    );
};
