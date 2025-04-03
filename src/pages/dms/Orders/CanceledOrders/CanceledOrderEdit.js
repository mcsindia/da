import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const CanceledOrderEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract order data passed from CanceledOrderList page
    const { order } = location.state || {};

    // Initialize state with the current canceled order data
    const [customerName, setCustomerName] = useState(order?.customer || '');
    const [product, setProduct] = useState(order?.product || '');
    const [category, setCategory] = useState(order?.category || '');
    const [quantity, setQuantity] = useState(order?.quantity || 1);
    const [amount, setAmount] = useState(order?.amount || '');
    const [status, setStatus] = useState(order?.status || 'Canceled');

    // Handle form submission (Update canceled order)
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can make an API call here to update the canceled order in the backend

        // Navigate back to the canceled order list page after updating
        navigate('/dms/canceled-orders');
    };

    return (
        <AdminLayout>
            <div className="dms-container">
                <h3 className="mb-4">Edit Canceled Order</h3>

                <div className="dms-form-container">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="customerName" className="dms-form-group">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter customer name"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="product" className="dms-form-group">
                            <Form.Label>Product</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product name"
                                value={product}
                                onChange={(e) => setProduct(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="category" className="dms-form-group">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="quantity" className="dms-form-group">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="amount" className="dms-form-group">
                            <Form.Label>Amount (INR)</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button type="submit">Save Changes</Button>
                        <Button className="ms-2" type='cancel' onClick={() => navigate('/dms/canceled-orders')}>
                            Cancel
                        </Button>
                    </Form>
                </div>
            </div>
        </AdminLayout>
    );
};
