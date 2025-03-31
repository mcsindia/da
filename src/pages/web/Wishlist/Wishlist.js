import React, { useContext } from 'react';
import { WishlistContext } from '../../../context/WishListContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../components/web/Header/Header';
import { Footer } from '../../../components/web/Footer/Footer';
import heart_img from '../../../assets/images/heart.png'

export const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Container className="wishlist-container">
                <h2 className="section-heading">My Wishlist</h2>
                {wishlist.length > 0 ? (
                    <Row className="wishlist-grid">
                        {wishlist.map((item) => (
                            <Col key={item.id} xs={12} className="wishlist-card">
                                <Card className="wishlist-card-horizontal shadow-sm">
                                    <Row className="g-0 align-items-center">
                                        {/* Left Column - Image */}
                                        <Col md={4} className="wishlist-card-img-container">
                                            <Card.Img src={item.image} className="wishlist-card-img" />
                                        </Col>

                                        {/* Right Column - Content */}
                                        <Col md={8}>
                                            <Card.Body className="wishlist-card-body">
                                                <Card.Title className="wishlist-card-title">{item.name}</Card.Title>
                                                {/* Rating */}
                                                <div className="product-rating mb-2">
                                                    <span className="stars">
                                                        {'★'.repeat(Math.floor(item.rating))}
                                                        {'☆'.repeat(5 - Math.floor(item.rating))}
                                                    </span>
                                                    <span className="rating-number">({item.rating.toFixed(1)})</span>
                                                </div>

                                                {/* Price Info */}
                                                <div className="mb-2 product-pricing">
                                                    <span className="product-mrp me-2">₹{item.mrp}</span>
                                                    <span className="price me-2">₹{item.price}</span>
                                                    <span className="product-discount">({item.discount}% OFF)</span>
                                                </div>
                                                <div className="wishlist-buttons">
                                                    <Button className='remove-btn' onClick={() => removeFromWishlist(item.id)}>
                                                        Remove
                                                    </Button>
                                                    <Button className='details-button' onClick={() => navigate(`/product/${item.id}`)}>
                                                        View Details
                                                    </Button>

                                                </div>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div className='empty-wishlist-container'>
                        <div className="wishlist-icon-container">
                            <img className="wishlist-icon" src={heart_img} alt="heart-img" />
                        </div>
                        <p className="empty-wishlist">No items in your wishlist.</p>
                        <button className="wishlist-btn" onClick={() => navigate('/products')}>
                            Add Wishlist
                        </button>
                    </div>
                )}
            </Container>
            <Footer />
        </>
    );
};
