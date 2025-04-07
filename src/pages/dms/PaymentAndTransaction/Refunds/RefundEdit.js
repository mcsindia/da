import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const RefundEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract refund data passed from RefundList
  const { refund } = location.state || {};

  // Initialize form fields with existing refund data
  const [refundId, setRefundId] = useState(refund?.id || '');
  const [orderId, setOrderId] = useState(refund?.orderId || '');
  const [customerName, setCustomerName] = useState(refund?.customerName || '');
  const [refundDate, setRefundDate] = useState(refund?.refundDate || '');
  const [refundAmount, setRefundAmount] = useState(refund?.refundAmount || '');
  const [reason, setReason] = useState(refund?.reason || '');
  const [status, setStatus] = useState(refund?.status || 'Pending');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRefund = {
      refundId,
      orderId,
      customerName,
      refundDate,
      refundAmount,
      reason,
      status,
    };

    console.log('Refund Updated:', updatedRefund);
    navigate('/dms/manage-refund');
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Edit Refund Details</h3>

        <div className="dms-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="dms-form-group">
              <Form.Label>Refund ID</Form.Label>
              <Form.Control
                type="text"
                value={refundId}
                onChange={(e) => setRefundId(e.target.value)}
                disabled
              />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Order ID</Form.Label>
              <Form.Control
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Refund Date</Form.Label>
              <Form.Control
                type="date"
                value={refundDate}
                onChange={(e) => setRefundDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Refund Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                value={refundAmount}
                onChange={(e) => setRefundAmount(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Reason</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Processed">Processed</option>
                <option value="Rejected">Rejected</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex mt-3">
              <Button type="submit">Save Changes</Button>
              <Button type='cancel' className="ms-2" onClick={() => navigate('/dms/refunds')}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
