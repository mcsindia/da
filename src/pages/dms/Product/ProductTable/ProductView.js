import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Table, Card, Badge } from "react-bootstrap";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";
import defaultProductImg from "../../../../assets/images/bag.png";

export const ProductView = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract product details from location state
    const product = location.state?.product;

    if (!product) {
        return (
            <AdminLayout>
                <div className="text-center">
                    <h3>Product not found</h3>
                    <Button onClick={() => navigate("/dms/products")}>Go Back</Button>
                </div>
            </AdminLayout>
        );
    }

    const {
        id,
        name,
        category,
        price,
        stock,
        status,
        images = [defaultProductImg],
        rating = 4,
        discount = 20,
        brand = "N/A",
        added_at,
        updated_at,
    } = product;

    // Render stars for rating
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <FaStar key={i} style={{ color: "gold" }} />
                ) : (
                    <FaStar key={i} style={{ color: "silver" }} />
                )
            );
        }
        return stars;
    };

    return (
        <AdminLayout>
            <div className="product-view-page container mt-4">
                <Card className="mb-4">
                    <Card.Body className="d-flex justify-content-between align-items-center m-4">
                        {/* Product Image & Basic Info */}
                        <div className="d-flex align-items-center">
                            <img
                                src={images[0]}
                                alt={name}
                                className="rounded border dms-product-img"
                            />
                            <div className="ms-4">
                                <h2>{name}</h2>
                                <p>
                                    <strong>Product ID:</strong> {id}
                                </p>
                                <p>
                                    <strong>Status:</strong> <Badge bg={status === "Active" ? "success" : "danger"}>{status}</Badge>
                                </p>
                            </div>
                        </div>
                        {/* Back Button */}
                        <Button className="back-button" onClick={() => navigate(-1)}>
                            <FaArrowLeft /> Back
                        </Button>
                    </Card.Body>
                </Card>

                {/* Product Details Table */}
                <section className="mt-4">
                    <h4>Product Details</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Discount</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{category}</td>
                                <td>{brand}</td>
                                <td>₹{price}</td>
                                <td>{stock} units</td>
                                <td>{discount}% Off</td>
                                <td>{renderStars()}</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>

                <hr />

                {/* Features */}
                <section className="mt-4">
                    <h4>Key Features</h4>
                    <ul>
                        <li>100% Handmade by Indian artisans</li>
                        <li>Eco-friendly and sustainable materials</li>
                        <li>Perfect for home décor and gifting</li>
                        <li>Elegant antique-inspired design</li>
                        <li>Durable, long-lasting craftsmanship</li>
                    </ul>
                </section>

                <hr />

                {/* Description */}
                <section className="mt-4">
                    <h4>Description</h4>
                    <p>  This exclusive piece is crafted with great attention to detail, combining traditional artistry with modern-day utility.
                        Inspired by India's rich cultural heritage, this product is not just an item—it's a story. Designed and made by local artisans,
                        it reflects the true spirit of "Make in India". Whether you're looking for a touch of heritage for your home or a unique gift for someone special,
                        this item promises authenticity, quality, and charm. The materials used are sustainable, ensuring that your purchase is both ethical and enduring.
                        Explore timeless elegance with this handcrafted masterpiece.
                    </p>
                </section>

                <hr />

                {/* Offers */}
                <section className="mt-4">
                    <h4>Current Offers</h4>
                    <p><ul>
                        <li><strong>🎁 Buy 2 Get 1 Free</strong> – Limited period offer</li>
                        <li><strong>🚚 Free Shipping</strong> on orders above ₹999</li>
                        <li><strong>💰 10% Cashback</strong> on UPI payments</li>
                        <li><strong>🛡️ 7-Day Return Policy</strong> – No questions asked</li>
                    </ul></p>
                </section>

                <hr />

                {/* Meta Info */}
                <section className="mt-4">
                    <h4>Additional Information</h4>
                    <p>
                        <strong>Date Added:</strong> {added_at}
                    </p>
                    <p>
                        <strong>Last Updated:</strong> {updated_at}
                    </p>
                </section>
            </div>
        </AdminLayout>
    );
};
