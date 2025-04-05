import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const DiscountEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { discount } = location.state || {};

  const [productName, setProductName] = useState(discount?.productName || '');
  const [productId, setProductId] = useState(discount?.productId || '');
  const [type, setType] = useState(discount?.type || 'Percentage');
  const [value, setValue] = useState(discount?.value || '');
  const [startDate, setStartDate] = useState(discount?.startDate || '');
  const [endDate, setEndDate] = useState(discount?.endDate || '');
  const [status, setStatus] = useState(discount?.status || 'Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Discount:', {
      productName, productId, type, value, startDate, endDate, status,
    });
    navigate('/dms/discounts');
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Edit Discount</h3>
        <div className="dms-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="dms-form-group">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Product ID</Form.Label>
              <Form.Control
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Discount Type</Form.Label>
              <Form.Select value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="Percentage">Percentage</option>
                <option value="Flat">Flat</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Discount Value</Form.Label>
              <Form.Control
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="dms-form-group">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="dms-form-group">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="dms-form-group">
              <Form.Label>Status</Form.Label>
              <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} required>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex">
              <Button type="submit" className="me-2">Save Changes</Button>
              <Button type='cancel' onClick={() => navigate('/dms/discounts')}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
