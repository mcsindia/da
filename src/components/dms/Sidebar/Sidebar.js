import React, { useState, useEffect } from "react";
import {
    FaChartLine,FaClipboardList,
    FaUsers, FaUserShield,
    FaCogs, FaEnvelope,
    FaMotorcycle, FaTable,
    FaCaretDown, FaCaretRight, FaDatabase
} from "react-icons/fa";

export const Sidebar = ({ isOpen }) => {
    const [activeMenu, setActiveMenu] = useState("");
    const [openMenu, setOpenMenu] = useState(null);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleMenuToggle = (menuName) => {
        setOpenMenu((prev) => (prev === menuName ? null : menuName));
        setOpenSubMenu(null);
    };

    const handleSubMenuToggle = (subMenuName) => {
        setOpenSubMenu((prev) => (prev === subMenuName ? null : subMenuName));
    };

    // Close menus when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".dms-sidebar")) {
                setOpenMenu(null);
                setOpenSubMenu(null);
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div className={`dms-sidebar bg-color text-white ${isOpen ? "open" : "closed"}`}>
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
                {/* Master Data Management */}
                <li className="dms-nav-item">
                    <div
                        className={`dms-nav-link text-white ${openMenu === "master" ? "active" : ""}`}
                        onClick={() => handleMenuToggle("master")}     
                    >
                        <div className="d-flex align-items-center">
                            <FaDatabase className="me-2" />
                            <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Master</span>
                        </div>
                        <FaCaretDown
                            className={`ms-auto ${openMenu === "master" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                }`}
                            style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                        />
                    </div>
                    {openMenu === "master" && (
                        <ul className="submenu show">
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/master/country" className="dms-nav-link text-white">
                                        Country
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/master/city" className="dms-nav-link text-white">
                                        City
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/master/state" className="dms-nav-link text-white">
                                        State
                                    </a>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Media Table */}
                <li className="dms-nav-item">
                    <div
                         className={`dms-nav-link text-white ${openMenu === "media" ? "active" : ""}`}
                         onClick={() => handleMenuToggle("media")}      
                    >
                        <div className="d-flex align-items-center">
                            <FaTable  className="me-2" />
                            <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Media Table</span>
                        </div>
                        <FaCaretDown
                            className={`ms-auto ${openMenu === "media" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                }`}
                            style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                        />
                    </div>
                    {openMenu === "media" && (
                        <ul className="submenu show">
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/media/news" className="dms-nav-link text-white">
                                        News
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/media/events" className="dms-nav-link text-white">
                                        Events
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/media/Advertisements" className="dms-nav-link text-white">
                                        Advertisements
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/media/photo-gallery" className="dms-nav-link text-white">
                                        Photo Gallery
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/media/media-gallery" className="dms-nav-link text-white">
                                        Media Gallery
                                    </a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/media/press-releases" className="dms-nav-link text-white">
                                        Press Releases
                                    </a>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>
            
                {/* Contact Us */}
                <li className="dms-nav-item">
                    <a
                        href="/contact-us"
                        className={`dms-nav-link text-white ${activeMenu === "contactus" ? "active" : ""}`}
                        onClick={() => setActiveMenu("contactus")}
                    >
                         <div className="d-flex align-items-center">
                        <FaEnvelope className="me-2" />
                        <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Contact Us</span>
                        </div>
                    </a>
                </li>

                {/* Analytics and Reports */}
                <li className="dms-nav-item">
                    <a
                        href="/analytics"
                        className={`dms-nav-link text-white ${activeMenu === "analytics" ? "active" : ""}`}
                        onClick={() => setActiveMenu("analytics")}
                    >
                         <div className="d-flex align-items-center">
                        <FaChartLine className="me-2" />
                        <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Analytics & Reports</span>
                        </div>
                    </a>
                </li>

                {/* Roles and Permisiion Management */}
                <li className="dms-nav-item">
                    <a
                        href="/roles-permission"
                        className={`dms-nav-link text-white ${activeMenu === "roles" ? "active" : ""}`}
                        onClick={() => setActiveMenu("roles")}
                    >
                         <div className="d-flex align-items-center">
                        <FaUserShield className="me-2" />
                        <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Roles & Permission</span>
                        </div>
                    </a>
                </li>

                {/* Audit Logs */}
                <li className="dms-nav-item">
                    <a
                        href="/audit-logs"
                        className={`dms-nav-link text-white ${activeMenu === "audit" ? "active" : ""}`}
                        onClick={() => setActiveMenu("audit")}
                    >
                          <div className="d-flex align-items-center">
                        <FaClipboardList className="me-2" />
                        <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Audit & Logs</span>
                        </div>
                    </a>
                </li>

                 {/* Settings */}
                 <li className="dms-nav-item">
                    <a
                        href="/settings"
                        className={`dms-nav-link text-white ${activeMenu === "settings" ? "active" : ""}`}
                        onClick={() => setActiveMenu("settings")}
                    >
                          <div className="d-flex align-items-center">
                        <FaCogs className="me-2" />
                        <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Settings</span>
                        </div>
                    </a>
                </li>
     {/*            
                <li className="dms-nav-item">
                    <div
                        className={`dms-nav-link text-white ${openMenu === "auth" ? "active" : ""}`}
                        onClick={() => handleMenuToggle("auth")}     
                    >
                        <div className="d-flex align-items-center">
                            <FaLock className="me-2" />
                            <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Authentication</span>
                        </div>
                        <FaCaretDown
                            className={`ms-auto ${openMenu === "user" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                }`}
                            style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}

                        />
                    </div>
                    {openMenu === "auth" && (
                        <ul className="submenu show">
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/login" className="dms-nav-link text-white">Login</a>
                                </div>
                            </li>
                        </ul>
                    )}
                </li> */}
            </ul>
        </div>
    );
};
