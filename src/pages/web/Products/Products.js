import React, { useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productData } from './ProductData';
import { Header } from '../../../components/web/Header/Header';
import { Footer } from '../../../components/web/Footer/Footer';
import { ProductSidebar } from './ProductSidebar';

export const Products = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleProducts = showAll ? productData : productData.slice(0, 9);

    return (
        <>
            <Header />
            <div className='product-page-container'>
            <ProductSidebar/>
            <div className="product-list-section py-5">
                <Container>
                    <div className="product-headers">
                        <h2 className="section-heading">Explore Our Products</h2>
                        <p className="section-subheading">
                            Discover unique, handcrafted, and traditional products.
                        </p>
                    </div>
                    <Row>
                        {visibleProducts.map((product) => {
                            const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

                            return (
                                <Col md={4} sm={6} xs={12} className="mb-4" key={product.id}>
                                    <Card className="product-card ">
                                        <Card.Img variant="top" src={product.image} className="product-img" />
                                        <Card.Body>
                                            <Card.Title>{product.name}</Card.Title>

                                            {/* Rating */}
                                            <div className="product-rating mb-2">
                                                <span className="stars">
                                                    {'★'.repeat(Math.floor(product.rating))}
                                                    {'☆'.repeat(5 - Math.floor(product.rating))}
                                                </span>
                                                <span className="rating-number">({product.rating.toFixed(1)})</span>
                                            </div>

                                            {/* Price Info */}
                                            <div className="mb-2 product-pricing">
                                                <span className="product-mrp me-2">₹{product.mrp}</span>
                                                <span className="price me-2">₹{product.price}</span>
                                                <span className="product-discount">({discount}% OFF)</span>
                                            </div>

                                            {/* View Details Button */}
                                            <Link to={`/product/${product.id}`} className="details-button">
                                                View Details
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>

                    {productData.length > 9 && (
                        <div className="text-center mt-4">
                            <Button className='view-more-less-btn' onClick={() => setShowAll(!showAll)}>
                                {showAll ? 'View Less' : 'Load More'}
                            </Button>
                        </div>
                    )}
                </Container>
            </div>
            </div>
            <Footer />
        </>
    );
};
