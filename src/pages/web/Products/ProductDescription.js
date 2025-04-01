import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Carousel, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productData } from './ProductData';
import { Header } from '../../../components/web/Header/Header';
import { Footer } from '../../../components/web/Footer/Footer';
import { WishlistContext } from '../../../context/WishListContext';
import { CartContext } from '../../../context/CartContext';

export const ProductDescription = () => {
    const { id } = useParams();
    const product = productData.find(p => p.id === parseInt(id));
    const { addToWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

    // State for Wishlist  Modal Visibility
    const [showModal, setShowModal] = useState(false);
    // State for Cart Modal Visibility
    const [showCartModal, setShowCartModal] = useState(false);

    // Function to handle adding to wishlist and showing modal
    const handleAddToWishlist = (item) => {
        addToWishlist(item);
        setShowModal(true);
    };

    // Function to handle adding to cart and showing modal
    const handleAddToCart = (item) => {
        addToCart(item);
        setShowCartModal(true); // Show modal when item is added to cart
    };

    return (
        <>
            <Header />
            <Container className="product-discription-section py-5">
                {product ? (
                    <Row className="flex-column flex-md-row align-items-start">
                        {/* Media Section */}
                        <Col md={6} className="sticky-container">
                            <div className="media-wrapper">
                                <Carousel>
                                    <Carousel.Item>
                                        <img src={product.image} alt={product.name} className="media-fixed d-block rounded" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={product.image} alt={product.name} className="media-fixed d-block rounded" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={product.image} alt={product.name} className="media-fixed d-block rounded" />
                                    </Carousel.Item>
                                    <Carousel.Item >
                                        <video controls className="media-fixed rounded" >
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </Carousel.Item>
                                </Carousel>
                                <div className="d-flex gap-3 mt-3">
                                    <Button className="cart-btn" onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </Button>
                                    <Button className="wishlist-btn" onClick={() => handleAddToWishlist(product)}>
                                        ♡ Add to Wishlist
                                    </Button>
                                </div>
                            </div>
                        </Col>

                        {/* Product Info */}
                        <Col md={6}>
                            <h2>{product.name}</h2>

                            {/* Rating Section */}
                            <div className="product-rating mb-2">
                                <span className="stars">
                                    {'★'.repeat(Math.floor(product.rating))}
                                    {'☆'.repeat(5 - Math.floor(product.rating))}
                                </span>
                                <span className="rating-number"> ({product.rating.toFixed(1)} / 5)</span>
                            </div>

                            {/* Price Info */}
                            <div className="mb-2 product-pricing">
                                <span className="product-mrp me-2">₹{product.mrp}</span>
                                <span className="price me-2">₹{product.price}</span>
                                <span className="product-discount">({product.discount}% OFF)</span>
                            </div>

                            <p>{product.description}</p>
                            <p>
                                This exclusive piece is crafted with great attention to detail, combining traditional artistry with modern-day utility.
                                Inspired by India's rich cultural heritage, this product is not just an item—it's a story. Designed and made by local artisans,
                                it reflects the true spirit of "Make in India". Whether you're looking for a touch of heritage for your home or a unique gift for someone special,
                                this item promises authenticity, quality, and charm. The materials used are sustainable, ensuring that your purchase is both ethical and enduring.
                                Explore timeless elegance with this handcrafted masterpiece.
                            </p>
                            <div className="mt-4">
                                <h5 className="fw-bold">Specifications</h5>
                                <ul>
                                    <li>Material: Premium Handcrafted Wood & Brass</li>
                                    <li>Dimensions: 12 x 8 x 6 inches</li>
                                    <li>Weight: Approx. 1.2 kg</li>
                                    <li>Color: Natural Finish</li>
                                    <li>Care: Wipe with dry cloth, keep away from moisture</li>
                                </ul>
                            </div>

                            {/* Features Section */}
                            <div className="mt-4">
                                <h5 className="fw-bold">Features</h5>
                                <ul>
                                    <li>100% Handmade by Indian artisans</li>
                                    <li>Eco-friendly and sustainable materials</li>
                                    <li>Perfect for home décor and gifting</li>
                                    <li>Elegant antique-inspired design</li>
                                    <li>Durable, long-lasting craftsmanship</li>
                                </ul>
                            </div>

                            {/* Exclusive Offers Section */}
                            <div className="mt-4 p-3 rounded">
                                <h5 className="fw-bold">Exclusive Offers</h5>
                                <ul>
                                    <li><strong>🎁 Buy 2 Get 1 Free</strong> – Limited period offer</li>
                                    <li><strong>🚚 Free Shipping</strong> on orders above ₹999</li>
                                    <li><strong>💰 10% Cashback</strong> on UPI payments</li>
                                    <li><strong>🛡️ 7-Day Return Policy</strong> – No questions asked</li>
                                </ul>
                            </div>
                            {/* Reviews Section */}
                            <div className="mt-5">
                                <h4 className="fw-bold mb-4">Customer Reviews</h4>
                                <div className="review mb-4 p-3 bg-light rounded">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <strong>Riya Sharma</strong>
                                        <span className="stars text-warning">
                                            {'★'.repeat(5)}{'☆'.repeat(0)}
                                        </span>
                                    </div>
                                    <p>"Absolutely loved the craftsmanship. Looks even better in person! Highly recommend this as a gift."</p>
                                </div>

                                <div className="review mb-4 p-3 bg-light rounded">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <strong>Arjun Mehta</strong>
                                        <span className="stars text-warning">
                                            {'★'.repeat(4)}{'☆'.repeat(1)}
                                        </span>
                                    </div>
                                    <p>"Great packaging, timely delivery, and the product is sturdy and elegant."</p>
                                </div>

                                <div className="review mb-4 p-3 rounded">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <strong>Pooja Verma</strong>
                                        <span className="stars text-warning">
                                            {'★'.repeat(5)}{'☆'.repeat(0)}
                                        </span>
                                    </div>
                                    <p>"Loved the eco-friendly touch and traditional feel. Will definitely buy more products from here."</p>
                                </div>
                            </div>

                        </Col>
                    </Row>
                ) : (
                    <h4>Product not found</h4>
                )}
            </Container>
            {/* Related Products Section */}
            {product && (
                <div className='product-list-section'>
                    <h3 className="section-heading">Related Products</h3>
                    <Row xs={1} sm={2} md={4} className="g-4 justify-content-center">
                        {productData
                            .filter(p => p.id !== parseInt(id)) // Exclude current product
                            .slice(0, 3) // Show only 4 related products
                            .map(related => (
                                <Col key={related.id}>
                                    <Card className="h-100 shadow-sm">
                                        <Card.Img variant="top" src={related.image} className="rounded" style={{ height: '200px', objectFit: 'cover' }} />
                                        <Card.Body>
                                            <Card.Title>{related.name}</Card.Title>
                                            <div className="mb-2 product-pricing">
                                                <span className="product-mrp me-2">₹{product.mrp}</span>
                                                <span className="price me-2">₹{product.price}</span>
                                                <span className="product-discount">({product.discount}% OFF)</span>
                                            </div>
                                            <div className="product-rating mb-2">
                                                <span className="stars">
                                                    {'★'.repeat(Math.floor(product.rating))}
                                                    {'☆'.repeat(5 - Math.floor(product.rating))}
                                                </span>
                                                <span className="rating-number">({product.rating.toFixed(1)})</span>
                                            </div>
                                            <Link to={`/product/${product.id}`} className="details-button">
                                                View Details
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>
            )}

            {/* Wishlist Added Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center">
                    <h5 className="fw-bold">Item Added to Wishlist! ❤️</h5>
                    <p>{product?.name} has been added to your wishlist.</p>
                 </Modal.Body>
            </Modal>

            {/* Cart Added Modal */}
            <Modal show={showCartModal} onHide={() => setShowCartModal(false)} centered>
                <Modal.Body className="text-center">
                    <h5 className="fw-bold">Item Added to Cart! 🛒</h5>
                    <p>{product?.name} has been added to your cart.</p>
                </Modal.Body>
            </Modal>

            <Footer />
        </>
    );
};  