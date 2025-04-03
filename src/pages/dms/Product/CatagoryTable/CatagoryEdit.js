import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const CategoryEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract category data passed from CategoryList page
  const { category } = location.state || {};
  
  // Initialize state with the current category data
  const [name, setName] = useState(category?.name || '');
  const [description, setDescription] = useState(category?.description || '');

  // Handle form submission (Update category)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can make an API call here to update the category on the backend

    // Navigate back to the category list page after updating
    navigate('/dms/manage-category');
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Edit Category Details</h3>
        
        <div className="dms-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="dms-form-group">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="description" className="dms-form-group">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter category description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit">Save Changes</Button>
            <Button type="cancel" className="ms-2" onClick={() => navigate('/dms/manage-category')}>
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
