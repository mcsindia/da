import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../components/web/Header/Header';
import { Footer } from '../../../components/web/Footer/Footer';
import cart_img from '../../../assets/images/bag.png';

export const Cart = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    // Function to calculate price details
    const totalMRP = cartItems.reduce((total, item) => total + item.mrp * item.quantity, 0);
    const totalDiscount = cartItems.reduce((total, item) => total + (item.mrp - item.price) * item.quantity, 0);
    const buyMoreSaveMore = 30;
    const couponDiscount = 80;
    const platformFee = 3;
    const deliveryCharges = 80;
    const totalAmount = totalMRP - totalDiscount - buyMoreSaveMore - couponDiscount + platformFee;
    const totalSavings = totalDiscount + buyMoreSaveMore + couponDiscount;

    // Function to handle quantity increase
    const increaseQuantity = (item) => {
        addToCart({ ...item, quantity: item.quantity + 1 });
    };

    // Function to handle quantity decrease
    const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
            addToCart({ ...item, quantity: item.quantity - 1 });
        }
    };

    return (
        <>
            <Header />
            <Container className="cart-container">
                <h2 className="section-heading">My Shopping Cart</h2>
                <Row>
                    {cartItems.length > 0 ? (
                        <>
                            {/* Cart Items */}
                            <Col md={8}>
                                <Row className="cart-grid">
                                    {cartItems.map((item) => (
                                        <Col key={item.id} xs={12} className="cart-card">
                                            <Card className="cart-card-horizontal shadow-sm">
                                                <Row className="g-0 align-items-center">
                                                    <Col md={4} className="cart-card-img-container">
                                                        <Card.Img src={item.image} className="cart-card-img" />
                                                    </Col>
                                                    <Col md={8}>
                                                        <Card.Body className="cart-card-body">
                                                            <Card.Title className="cart-card-title">{item.name}</Card.Title>
                                                            <div className="mb-2 product-pricing">
                                                                <span className="product-mrp me-2">₹{item.mrp}</span>
                                                                <span className="price me-2">₹{item.price}</span>
                                                                <span className="product-discount">({item.discount}% OFF)</span>
                                                            </div>
                                                            <div className="cart-quantity-controls mb-2">
                                                                <Button className="quantity-btn" onClick={() => decreaseQuantity(item)} disabled={item.quantity <= 1}>-</Button>
                                                                <span className="quantity-display">{item.quantity}</span>
                                                                <Button className="quantity-btn" onClick={() => increaseQuantity(item)}>+</Button>
                                                            </div>
                                                            <div className="cart-buttons">
                                                                <Button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</Button>
                                                            </div>
                                                        </Card.Body>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>

                            {/* Price Details */}
                            <Col md={4} className="sticky-container">
                                <Card className="p-3 shadow-sm">
                                    <h5>Price Details</h5>
                                    <p>Price ({cartItems.length} items): ₹{totalMRP}</p>
                                    <p>Discount: <span className="text-success">-₹{totalDiscount}</span></p>
                                    <p>Buy more & save more: <span className="text-success">-₹{buyMoreSaveMore}</span></p>
                                    <p>Coupons for you: <span className="text-success">-₹{couponDiscount}</span></p>
                                    <p>Platform Fee: ₹{platformFee}</p>
                                    <p>Delivery Charges: <span className="text-success">₹{deliveryCharges} Free</span></p>
                                    <hr />
                                    <h5>Total Amount: ₹{totalAmount}</h5>
                                    <p className="text-success">You will save ₹{totalSavings} on this order</p>
                                    <Button className="mt-3 w-100" variant="warning" onClick={() => navigate('/checkout')}>Place Order</Button>
                                </Card>
                            </Col>
                        </>
                    ) : (
                        /* Empty Cart Message */
                        <Col xs={12} className="text-center">
                            <div className="empty-cart-container">
                                <div className="cart-icon-container">
                                    <img className="cart-icon" src={cart_img} alt="cart-img" />
                                </div>
                                <p className="empty-cart">Your cart is empty.</p>
                                <button className="cart-btn" onClick={() => navigate('/products')}>Shop Now</button>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
            <Footer />
        </>
    );
};
