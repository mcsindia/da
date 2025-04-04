import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { FaArrowLeft } from "react-icons/fa";

export const CustomerFeedbackView = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Example customer feedback data (you can replace this with actual fetched data)
    const customer = {
        id: 'C101',
        name: 'Aditi Verma',
        email: 'aditi.verma@example.com',
        phone: '+91 9876543210',
        gender: 'Female',
        age: 29,
        address: 'D-42, Rajouri Garden, New Delhi',
        state: 'Delhi',
        district: 'West Delhi',
        tehsil: 'Rajouri',
        profession: 'Software Engineer',
        income: '₹12,00,000/year',
        maritalStatus: 'Unmarried',
        isBride: 'Yes',
        feedback: {
            product: 'Smartphone X',
            orderId: 'O2023',
            issue: 'Late Delivery',
            comment: 'The package arrived 3 days late.',
            submittedAt: '2025-04-02'
        }
    };

    return (
        <AdminLayout>
            <div className="dms-container p-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>Customer Feedback Details</h3>
                    <Button className="back-button" onClick={() => navigate(-1)}>
                        <FaArrowLeft /> Back
                    </Button>
                </div>

                <Card className="mb-4">
                    <Card.Body>
                        <h5>Feedback Information</h5>
                        <p><strong>Product:</strong> {customer.feedback.product}</p>
                        <p><strong>Order ID:</strong> {customer.feedback.orderId}</p>
                        <p><strong>Issue:</strong> {customer.feedback.issue}</p>
                        <p><strong>Comment:</strong> {customer.feedback.comment}</p>
                        <p><strong>Submitted At:</strong> {customer.feedback.submittedAt}</p>
                    </Card.Body>
                </Card>

                <Card className="mb-4">
                    <Card.Body>
                        <h5>Customer Personal Information</h5>
                        <div className="d-flex align-items-center mb-3">
                            <div >
                                <p><strong>Name:</strong> {customer.name}</p>
                                <p><strong>Email:</strong> {customer.email}</p>
                                <p><strong>Phone:</strong> {customer.phone}</p>
                                <p><strong>Gender:</strong> {customer.gender}</p>
                                <p><strong>Address:</strong> {customer.address}</p>
                                <p><strong>State:</strong> {customer.state}</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </AdminLayout>
    );
};
