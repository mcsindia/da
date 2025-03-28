import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../layouts/dms/AdminLayout/AdminLayout';

export const UserAdd = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: '',
    role_id: '',
    password: '',
    is_active: true,
  });

  const [error, setError] = useState('');

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Generate a random password
  const generatePassword = () => {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setFormData({ ...formData, password });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (!formData.username || !formData.email || !formData.user_type) {
      setError('Username, Email, and User Type are required fields.');
      return;
    }

    console.log('Form Submitted', formData);

    // Simulate saving the data and navigating back
    navigate('/user'); // Redirect back to User List
  };

  return (
    <AdminLayout>
      <div className='dms-container'>
        <Row>
          <Col>
            <h3 className="mb-4">Add New User</h3>
          </Col>
        </Row>
        <div className='dms-form-container'>

          {error && <Alert variant="danger" onClose={() => setError('')} dismissible>{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* Username */}
            <Form.Group className="dms-form-group" >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>


            {/* Email */}
            <Form.Group className="dms-form-group" >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Role id */}
            <Form.Group className="dms-form-group" >
              <Form.Label>Role Id</Form.Label>
              <Form.Control
                type="number"
                name="Role id"
                placeholder="Enter role id"
                value={formData.role_id}
                onChange={handleChange}
                required
              />
            </Form.Group>
          
            {/* Password */}
            <Form.Group className="dms-form-group">
              <Form.Label>Password</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className='me-3'
                />
                <Button
                  variant="success"
                  onClick={generatePassword}
                  className="flex-shrink-0"
                >
                  Generate
                </Button>
              </div>
            </Form.Group>

            {/* Status */}
            <Form.Group className="dms-form-group">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
            {/* Buttons */}
            <div className="d-flex ">
              <Button type="submit" variant="primary" className="me-2">
                Save Changes
              </Button>
              <Button type="cancel" onClick={() => navigate('/user')}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
