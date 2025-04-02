import React, { useState } from "react";
import { productData } from "../Products/ProductData";
import { Footer } from "../../../components/web/Footer/Footer";
import { Header } from "../../../components/web/Header/Header";
import { OrderSidebar } from "./OrderSidebar"; // Import Sidebar

const getRandomStatus = () => {
    const statuses = ["On the way", "Delivered", "Cancelled", "Returned"];
    return statuses[Math.floor(Math.random() * statuses.length)];
};

const getRandomDate = () => {
    const start = new Date(2023, 0, 1);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split("T")[0];
};

export const Order = () => {
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // Generate random order data using productData
    const ordersData = productData.map((product, index) => ({
        orderId: `ORD00${index + 1}`,
        product: product,
        orderDate: getRandomDate(),
        status: getRandomStatus(),
    }));

    // Filter orders based on selected status, year, and search term
    const filteredOrders = ordersData.filter((order) => {
        const orderYear = new Date(order.orderDate).getFullYear().toString();
        const matchesSearch = order.product.name.toLowerCase().includes(searchTerm.toLowerCase());

        return (
            (selectedStatus === "All" || order.status === selectedStatus) &&
            (selectedYear === "All" || orderYear === selectedYear) &&
            matchesSearch
        );
    });

    return (
        <>
            <Header />
            <div className="orders-page">
                {/* Sidebar Section */}
                <OrderSidebar
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                {/* Orders Section */}
                <div className="orders-container">
                    <h2 className="mb-4">My Orders</h2>
                    <div className="orders-list">
                        {filteredOrders.length === 0 ? (
                            <p>No orders found.</p>
                        ) : (
                            filteredOrders.map((order) => (
                                <div key={order.orderId} className="order-card">
                                    <img src={order.product.image} alt={order.product.name} />
                                    <div className="order-details">
                                        <h3>{order.product.name}</h3>
                                        <p>Price: ₹{order.product.price}</p>
                                        <p>Order Date: {order.orderDate}</p>
                                        <p>Status: <span className={`status-${order.status.replace(" ", "-").toLowerCase()}`}>{order.status}</span></p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
