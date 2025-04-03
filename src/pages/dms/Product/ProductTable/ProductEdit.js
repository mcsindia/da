import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const ProductEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract product data passed from ProductList page
  const { product } = location.state || {};
  
  // Initialize state with the current product data
  const [name, setName] = useState(product?.name || '');
  const [category, setCategory] = useState(product?.category || '');
  const [price, setPrice] = useState(product?.price || '');
  const [stock, setStock] = useState(product?.stock || '');
  const [status, setStatus] = useState(product?.status || 'Active');

  // Handle form submission (Update product)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can make an API call here to update the product on the backend

    // Navigate back to the product list page after updating
    navigate('/dms/product');
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Edit Product Details</h3>
        
        <div className="dms-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="dms-form-group">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

            <Form.Group controlId="price" className="dms-form-group">
              <Form.Label>Price (INR)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="stock" className="dms-form-group">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter stock quantity"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit">
              Save Changes
            </Button>
            <Button type="cancel" className="ms-2" onClick={() => navigate('/dms/product')}>
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
