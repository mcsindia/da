import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const InvoiceAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    invoiceId: '',
    orderId: '',
    customerName: '',
    date: '',
    amount: '',
    status: 'Paid',
    file: null,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData(prev => ({ ...prev, file: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { invoiceId, orderId, customerName, date, amount, file } = formData;

    if (!invoiceId || !orderId || !customerName || !date || !amount || !file) {
      setError('All fields are required.');
      return;
    }

    console.log('Invoice Added:', formData);
    navigate('/dms/invoices');
  };

  return (
    <AdminLayout>
      <div className='dms-container'>
        <Row>
          <Col>
            <h3 className='mb-4'>Add New Invoice</h3>
          </Col>
        </Row>

        <div className='dms-form-container'>
          {error && (
            <Alert variant='danger' onClose={() => setError('')} dismissible>
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className='dms-form-group'>
              <Form.Label>Invoice ID</Form.Label>
              <Form.Control
                type='text'
                name='invoiceId'
                placeholder='Enter invoice ID'
                value={formData.invoiceId}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Order ID</Form.Label>
              <Form.Control
                type='text'
                name='orderId'
                placeholder='Enter order ID'
                value={formData.orderId}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type='text'
                name='customerName'
                placeholder='Enter customer name'
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Amount (₹)</Form.Label>
              <Form.Control
                type='number'
                name='amount'
                placeholder='Enter amount'
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Payment Status</Form.Label>
              <Form.Select name='status' value={formData.status} onChange={handleChange}>
                <option value='Paid'>Paid</option>
                <option value='Pending'>Pending</option>
                <option value='Failed'>Failed</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Invoice File (PDF)</Form.Label>
              <Form.Control
                type='file'
                name='file'
                accept='.pdf'
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className='d-flex mt-3'>
              <Button type='submit' className='me-2'>
                Save changes
              </Button>
              <Button type='cancel' onClick={() => navigate('/dms/invoice')}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
