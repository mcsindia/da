import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const CouponAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    code: '',
    type: 'Percent', // or 'Flat'
    value: '',
    minOrder: '',
    maxDiscount: '',
    validFrom: '',
    validTo: '',
    status: 'Active',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.code || !formData.type || !formData.value || !formData.minOrder || !formData.validFrom || !formData.validTo) {
      setError('Please fill in all required fields.');
      return;
    }

    console.log('Coupon Added:', formData);
    navigate('/dms/manage-coupons');
  };

  return (
    <AdminLayout>
      <div className='dms-container'>
        <Row>
          <Col>
            <h3 className='mb-4'>Add New Coupon</h3>
          </Col>
        </Row>

        <div className='dms-form-container'>
          {error && <Alert variant='danger' onClose={() => setError('')} dismissible>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='dms-form-group'>
              <Form.Label>Coupon Code</Form.Label>
              <Form.Control type='text' name='code' placeholder='Enter coupon code' value={formData.code} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Type</Form.Label>
              <Form.Select name='type' value={formData.type} onChange={handleChange}>
                <option value='Percent'>Percent</option>
                <option value='Flat'>Flat</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Value</Form.Label>
              <Form.Control type='text' name='value' placeholder='e.g., 10% or ₹100' value={formData.value} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Minimum Order Amount (₹)</Form.Label>
              <Form.Control type='text' name='minOrder' placeholder='e.g., ₹500' value={formData.minOrder} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Maximum Discount (₹)</Form.Label>
              <Form.Control type='text' name='maxDiscount' placeholder='Optional or N/A' value={formData.maxDiscount} onChange={handleChange} />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className='dms-form-group'>
                  <Form.Label>Valid From</Form.Label>
                  <Form.Control type='date' name='validFrom' value={formData.validFrom} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='dms-form-group'>
                  <Form.Label>Valid To</Form.Label>
                  <Form.Control type='date' name='validTo' value={formData.validTo} onChange={handleChange} required />
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
              <Button type='cancel' onClick={() => navigate('/dms/manage-coupons')}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
