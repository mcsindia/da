import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const CouponEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { coupon } = location.state || {};

  const [code, setCode] = useState(coupon?.code || '');
  const [type, setType] = useState(coupon?.type || 'Percent');
  const [value, setValue] = useState(coupon?.value || '');
  const [minOrder, setMinOrder] = useState(coupon?.minOrder || '');
  const [maxDiscount, setMaxDiscount] = useState(coupon?.maxDiscount || '');
  const [validFrom, setValidFrom] = useState(coupon?.validFrom || '');
  const [validTo, setValidTo] = useState(coupon?.validTo || '');
  const [status, setStatus] = useState(coupon?.status || 'Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send updated coupon to the backend here
    console.log('Updated Coupon:', {
      code, type, value, minOrder, maxDiscount, validFrom, validTo, status,
    });
    navigate('/dms/manage-coupons');
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Edit Coupon</h3>
        <div className="dms-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="dms-form-group">
              <Form.Label>Coupon Code</Form.Label>
              <Form.Control type="text" value={code} onChange={(e) => setCode(e.target.value)} required />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Type</Form.Label>
              <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Percent">Percent</option>
                <option value="Flat">Flat</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Value</Form.Label>
              <Form.Control type="text" value={value} onChange={(e) => setValue(e.target.value)} required />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Minimum Order Amount (₹)</Form.Label>
              <Form.Control type="text" value={minOrder} onChange={(e) => setMinOrder(e.target.value)} required />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Maximum Discount (₹)</Form.Label>
              <Form.Control type="text" value={maxDiscount} onChange={(e) => setMaxDiscount(e.target.value)} />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="dms-form-group">
                  <Form.Label>Valid From</Form.Label>
                  <Form.Control type="date" value={validFrom} onChange={(e) => setValidFrom(e.target.value)} required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="dms-form-group">
                  <Form.Label>Valid To</Form.Label>
                  <Form.Control type="date" value={validTo} onChange={(e) => setValidTo(e.target.value)} required />
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
              <Button type='cancel' onClick={() => navigate('/dms/manage-coupons')}>Cancel</Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
