import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productData } from '../Products/ProductData';
import { Header } from '../../../components/web/Header/Header';
import { Footer } from '../../../components/web/Footer/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ProductSidebar } from '../Products/ProductSidebar';

export const Catagory = () => {
    const { categoryName } = useParams();

    const filteredProducts = productData.filter(
        (item) =>
            item.category &&
            categoryName &&
            item.category.toLowerCase() === categoryName.toLowerCase()
    );

    return (
        <>
            <Header />
            <div className='catagory-page-container'>
                <ProductSidebar/>
                <Container className="product-list-section py-5">
                    <div className="product-headers">
                        <h2 className="section-heading">{categoryName} Products</h2>
                        <p className="section-subheading">
                            Explore curated desi & antique products in {categoryName}.
                        </p>
                    </div>
                    <Row>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => {
                                const discount = Math.round(
                                    ((product.mrp - product.price) / product.mrp) * 100
                                );

                                return (
                                    <Col md={4} sm={6} xs={12} className="mb-4" key={product.id}>
                                        <Card className="product-card">
                                            <Card.Img
                                                variant="top"
                                                src={product.image}
                                                className="product-img"
                                                alt={product.name}
                                            />
                                            <Card.Body>
                                                <Card.Title>{product.name}</Card.Title>

                                                {/* Rating */}
                                                <div className="product-rating mb-2">
                                                    <span className="stars">
                                                        {'★'.repeat(Math.floor(product.rating))}
                                                        {'☆'.repeat(5 - Math.floor(product.rating))}
                                                    </span>
                                                    <span className="rating-number">
                                                        ({product.rating.toFixed(1)})
                                                    </span>
                                                </div>

                                                {/* Pricing */}
                                                <div className="product-pricing mb-2">
                                                    <span className="product-mrp me-2">₹{product.mrp}</span>
                                                    <span className="price me-2">₹{product.price}</span>
                                                    <span className="product-discount">({discount}% OFF)</span>
                                                </div>

                                                {/* View Details */}
                                                <Link
                                                    to={`/product/${product.id}`}
                                                    className="details-button"
                                                >
                                                    View Details
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })
                        ) : (
                            <Col>
                                <p className="text-center">No products found in this category.</p>
                            </Col>
                        )}
                    </Row>
                </Container>
                </div>
            <Footer />
        </>
    );
};
