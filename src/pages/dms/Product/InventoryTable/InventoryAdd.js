import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const InventoryAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    stock: '',
    restockDate: '',
    supplier: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.stock || !formData.restockDate || !formData.supplier) {
      setError('All fields are required.');
      return;
    }

    console.log('Inventory Added:', formData);
    navigate('/dms/inventory');
  };

  return (
    <AdminLayout>
      <div className='dms-container'>
        <Row>
          <Col>
            <h3 className='mb-4'>Add New Inventory</h3>
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
              <Form.Label>Stock</Form.Label>
              <Form.Control type='number' name='stock' placeholder='Enter stock quantity' value={formData.stock} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Restock Date</Form.Label>
              <Form.Control type='date' name='restockDate' value={formData.restockDate} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Supplier</Form.Label>
              <Form.Control type='text' name='supplier' placeholder='Enter supplier name' value={formData.supplier} onChange={handleChange} required />
            </Form.Group>

            <div className='d-flex'>
              <Button type='submit' className='me-2'>Save</Button>
              <Button type='cancel' onClick={() => navigate('/dms/inventory')}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
