import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const InvoiceEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { invoice } = location.state || {};

  const [invoiceId] = useState(invoice?.id || '');
  const [orderId, setOrderId] = useState(invoice?.orderId || '');
  const [customerName, setCustomerName] = useState(invoice?.customer || '');
  const [date, setDate] = useState(invoice?.date || '');
  const [amount, setAmount] = useState(invoice?.amount || '');
  const [status, setStatus] = useState(invoice?.status || 'Paid');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!orderId || !customerName || !date || !amount) {
      setError('All fields except invoice file are required.');
      return;
    }

    const updatedInvoice = {
      invoiceId,
      orderId,
      customerName,
      date,
      amount,
      status,
      file,
    };

    console.log('Invoice Updated:', updatedInvoice);
    navigate('/dms/invoices');
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Edit Invoice Details</h3>

        <div className="dms-form-container">
          {error && (
            <Alert variant="danger" onClose={() => setError('')} dismissible>
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="dms-form-group">
              <Form.Label>Invoice ID</Form.Label>
              <Form.Control type="text" value={invoiceId} disabled />
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
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Payment Status</Form.Label>
              <Form.Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="dms-form-group">
              <Form.Label>Replace Invoice File (PDF)</Form.Label>
              <Form.Control type="file" accept=".pdf" onChange={handleFileChange} />
            </Form.Group>

            <div className="d-flex mt-3">
              <Button type="submit">Save Changes</Button>
              <Button type='cancel' className="ms-2" onClick={() => navigate('/dms/invoice')}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
