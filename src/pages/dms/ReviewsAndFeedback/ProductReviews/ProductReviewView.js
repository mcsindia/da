import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { FaArrowLeft } from "react-icons/fa";
import img from '../../../../assets/images/bag.png'

export const ProductReviewView = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Example review data (replace with API call if needed)
    const review = {
        id: 'R101',
        product: 'Antique Clock',
        productImage: img,
        customer: 'Aditi Verma',
        customerEmail: 'aditi.verma@example.com',
        rating: 5,
        comment: 'Beautiful design!',
        reviewDate: '2025-04-01',
    };

    return (
        <AdminLayout>
            <div className="dms-container p-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>Product Review Details</h3>
                    <Button className="back-button" onClick={() => navigate(-1)}>
                        <FaArrowLeft /> Back
                    </Button>
                </div>

                <Card className="mb-4">
                    <Card.Body>
                        <h5>Review Information</h5>
                        <p><strong>Review ID:</strong> {review.id}</p>
                        <p><strong>Review Date:</strong> {review.reviewDate}</p>
                        <p><strong>Rating:</strong> {'⭐'.repeat(review.rating)}</p>
                        <p><strong>Comment:</strong> {review.comment}</p>
                    </Card.Body>
                </Card>

                <Card className="mb-4">
                    <Card.Body>
                        <h5>Customer Information</h5>
                        <p><strong>Name:</strong> {review.customer}</p>
                        <p><strong>Email:</strong> {review.customerEmail}</p>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <h5>Product Information</h5>
                        <div className="d-flex justify-content-between align-items-center m-4">
                            <img src={review.productImage} alt={review.product} className="dms-product-img" />
                            <div className='ms-4'>
                                <p><strong>Product Name: </strong>{review.product}</p>
                                <p> <strong>Description: </strong>  This exclusive piece is crafted with great attention to detail, combining traditional artistry with modern-day utility.
                                    Inspired by India's rich cultural heritage, this product is not just an item—it's a story. Designed and made by local artisans,
                                    it reflects the true spirit of "Make in India". Whether you're looking for a touch of heritage for your home or a unique gift for someone special,
                                    this item promises authenticity, quality, and charm. The materials used are sustainable, ensuring that your purchase is both ethical and enduring.
                                    Explore timeless elegance with this handcrafted masterpiece.
                                </p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </AdminLayout>
    );
};
