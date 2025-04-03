import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const InventoryEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract inventory data passed from InventoryList page
  const { item } = location.state || {};
  
  // Initialize state with the current inventory data
  const [name, setName] = useState(item?.name || '');
  const [stock, setStock] = useState(item?.stock || '');
  const [restockDate, setRestockDate] = useState(item?.restockDate || '');
  const [supplier, setSupplier] = useState(item?.supplier || '');

  // Handle form submission (Update inventory item)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can make an API call here to update the inventory on the backend

    // Navigate back to the inventory list page after updating
    navigate('/dms/inventory');
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Edit Inventory Item</h3>
        
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

            <Form.Group controlId="restockDate" className="dms-form-group">
              <Form.Label>Restock Date</Form.Label>
              <Form.Control
                type="date"
                value={restockDate}
                onChange={(e) => setRestockDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="supplier" className="dms-form-group">
              <Form.Label>Supplier</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter supplier name"
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit">Save Changes</Button>
            <Button type="cancel" className="ms-2" onClick={() => navigate('/dms/inventory')}>
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
