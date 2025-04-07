import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const RefundAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    refundId: '',
    orderId: '',
    customerName: '',
    refundDate: '',
    refundAmount: '',
    reason: '',
    status: 'Pending',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { refundId, orderId, customerName, refundDate, refundAmount, reason } = formData;

    if (!refundId || !orderId || !customerName || !refundDate || !refundAmount || !reason) {
      setError('All fields are required.');
      return;
    }

    console.log('Refund Added:', formData);
    navigate('/dms/refunds');
  };

  return (
    <AdminLayout>
      <div className='dms-container'>
        <Row>
          <Col>
            <h3 className='mb-4'>Add New Refund</h3>
          </Col>
        </Row>
        <div className='dms-form-container'>
          {error && <Alert variant='danger' onClose={() => setError('')} dismissible>{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className='dms-form-group'>
              <Form.Label>Refund ID</Form.Label>
              <Form.Control type='text' name='refundId' placeholder='Enter refund ID' value={formData.refundId} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Order ID</Form.Label>
              <Form.Control type='text' name='orderId' placeholder='Enter order ID' value={formData.orderId} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type='text' name='customerName' placeholder='Enter customer name' value={formData.customerName} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Refund Date</Form.Label>
              <Form.Control type='date' name='refundDate' value={formData.refundDate} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Refund Amount (₹)</Form.Label>
              <Form.Control type='number' name='refundAmount' placeholder='Enter refund amount' value={formData.refundAmount} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Reason</Form.Label>
              <Form.Control as='textarea' name='reason' placeholder='Enter reason for refund' value={formData.reason} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Status</Form.Label>
              <Form.Select name='status' value={formData.status} onChange={handleChange}>
                <option value='Pending'>Pending</option>
                <option value='Processed'>Processed</option>
                <option value='Rejected'>Rejected</option>
              </Form.Select>
            </Form.Group>

            <div className='d-flex mt-3'>
              <Button type='submit' className='me-2'>Save changes</Button>
              <Button type='cancel' onClick={() => navigate('/dms/refunds')}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
