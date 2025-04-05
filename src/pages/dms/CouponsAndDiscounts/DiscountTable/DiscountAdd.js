import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const DiscountAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: '',
    productId: '',
    type: 'Percentage', // or 'Flat'
    value: '',
    startDate: '',
    endDate: '',
    status: 'Active',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.productName || !formData.productId || !formData.type || !formData.value || !formData.startDate || !formData.endDate) {
      setError('Please fill in all required fields.');
      return;
    }

    console.log('Discount Added:', formData);
    navigate('/dms/discounts');
  };

  return (
    <AdminLayout>
      <div className='dms-container'>
        <Row>
          <Col>
            <h3 className='mb-4'>Add New Discount</h3>
          </Col>
        </Row>

        <div className='dms-form-container'>
          {error && <Alert variant='danger' onClose={() => setError('')} dismissible>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='dms-form-group'>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type='text'
                name='productName'
                placeholder='Enter product name'
                value={formData.productName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Product ID</Form.Label>
              <Form.Control
                type='text'
                name='productId'
                placeholder='Enter product ID'
                value={formData.productId}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Discount Type</Form.Label>
              <Form.Select name='type' value={formData.type} onChange={handleChange}>
                <option value='Percentage'>Percentage</option>
                <option value='Flat'>Flat</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Discount Value</Form.Label>
              <Form.Control
                type='text'
                name='value'
                placeholder='e.g., 10% or ₹100'
                value={formData.value}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className='dms-form-group'>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type='date'
                    name='startDate'
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='dms-form-group'>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type='date'
                    name='endDate'
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className='dms-form-group'>
              <Form.Label>Status</Form.Label>
              <Form.Select name='status' value={formData.status} onChange={handleChange}>
                <option value='Active'>Active</option>
                <option value='Inactive'>Inactive</option>
              </Form.Select>
            </Form.Group>

            <div className='d-flex'>
              <Button type='submit' className='me-2'>Save</Button>
              <Button type='cancel' onClick={() => navigate('/dms/discounts')}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
