import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const CategoryAdd = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description) {
      setError('All fields are required.');
      return;
    }

    console.log('Category Added:', formData);
    navigate('/dms/manage-category');
  };

  return (
    <AdminLayout>
      <div className='dms-container'>
        <Row>
          <Col>
            <h3 className='mb-4'>Add New Category</h3>
          </Col>
        </Row>
        <div className='dms-form-container'>
          {error && <Alert variant='danger' onClose={() => setError('')} dismissible>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='dms-form-group'>
              <Form.Label>Category Name</Form.Label>
              <Form.Control type='text' name='name' placeholder='Enter category name' value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='dms-form-group'>
              <Form.Label>Description</Form.Label>
              <Form.Control as='textarea' name='description' placeholder='Enter description' value={formData.description} onChange={handleChange} required />
            </Form.Group>

            <div className='d-flex'>
              <Button type='submit' className='me-2'>Save</Button>
              <Button type='cancel' onClick={() => navigate('/dms/manage-category')}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
