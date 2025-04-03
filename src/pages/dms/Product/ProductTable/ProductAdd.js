import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const ProductAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: '',
    status: 'Active',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.category || !formData.price || !formData.stock) {
      setError('All fields are required.');
      return;
    }

    console.log('Product Added:', formData);
    navigate('/dms/product');
  };

  return (
    <AdminLayout>
      <div className='dms-container'>
        <Row>
          <Col>
            <h3 className='mb-4'>Add New Product</h3>
          </Col>
        </Row>
        <div className='dms-form-container'>
          {error && <Alert variant='danger' onClose={() => setError('')} dismissible>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='dms-form-group'>
              <Form.Label>Product Name</Form.Label>
              <Form.Control type='text' name='name' placeholder='Enter product name' value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Category</Form.Label>
              <Form.Control type='text' name='category' placeholder='Enter category' value={formData.category} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Price (INR)</Form.Label>
              <Form.Control type='number' name='price' placeholder='Enter price' value={formData.price} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Stock</Form.Label>
              <Form.Control type='number' name='stock' placeholder='Enter stock' value={formData.stock} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Status</Form.Label>
              <Form.Select name='status' value={formData.status} onChange={handleChange} required>
                <option value='Active'>Active</option>
                <option value='Inactive'>Inactive</option>
              </Form.Select>
            </Form.Group>

            <div className='d-flex'>
              <Button type='submit' className='me-2'>Save</Button>
              <Button type='cancel' onClick={() => navigate('/dms/product')}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
