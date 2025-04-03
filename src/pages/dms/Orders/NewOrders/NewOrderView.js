import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Table } from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { FaArrowLeft, FaEye, FaDownload } from "react-icons/fa";

export const NewOrderView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { order } = location.state || {};

    if (!order) {
        return (
            <AdminLayout>
                <div className="text-center p-5">
                    <h4>No Order Details Available</h4>
                    <Button onClick={() => navigate('/dms/orders')}>Back to Orders</Button>
                </div>
            </AdminLayout>
        );
    }

     // Calculate Total Price (Unit Price * Quantity)
     const totalPrice = order.quantity * order.amount;

    return (
        <AdminLayout>
            <div className="dms-container p-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>Order Details</h3>
                    <Button className="back-button" onClick={() => navigate(-1)}>
                        <FaArrowLeft /> Back
                    </Button>
                </div>
                <Card className="mb-4">
                    <Card.Body>
                        <h5>Order Information</h5>
                        <p><strong>Order ID:</strong> {order.id}</p>
                        <p><strong>Customer Name:</strong> {order.customer}</p>
                        <p><strong>Status:</strong> {order.status}</p>
                        <p><strong>Order Date & Time:</strong> {order.orderDate}</p>
                        <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                        {order.transactionId && <p><strong>Transaction ID:</strong> {order.transactionId}</p>}
                    </Card.Body>
                </Card>

                <Card className="mb-4">
                    <Card.Body>
                        <h5>Customer Information</h5>
                        <p><strong>Email:</strong> {order.customerEmail}</p>
                        <p><strong>Phone:</strong> {order.customerPhone}</p>
                        <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <h5>Product Information</h5>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
                                    <th>Unit Price (INR)</th>
                                    <th>Total Price (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{order.product}</td>
                                    <td>{order.category}</td>
                                    <td>{order.quantity}</td>
                                    <td>₹{order.amount}</td>
                                    <td>₹{totalPrice}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <h5>Invoice Details</h5>
                        <p><strong>Invoice ID:</strong> {order.invoiceId}</p>
                        <p><strong>Invoice Date:</strong> {order.invoiceDate}</p>
                        <div className="d-flex align-items-center">
                            <p><strong>Invoice View & Download: </strong> <FaEye title="View Invoice" className="icon-blue me-3" />
                                <FaDownload title="Download Invoice" className="icon-green" /></p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </AdminLayout>
    );
};
