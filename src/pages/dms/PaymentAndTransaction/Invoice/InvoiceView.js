import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import {FaArrowLeft, FaDownload} from 'react-icons/fa'

export const InvoiceView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { invoice } = location.state || {};

  if (!invoice) {
    return (
      <AdminLayout>
        <div className="dms-container">
          <h4>No invoice data available.</h4>
          <Button variant="secondary" onClick={() => navigate('/dms/invoices')}>Back</Button>
        </div>
      </AdminLayout>
    );
  }

  const handleOpenPDF = () => {
    if (invoice.fileUrl) {
      window.open(invoice.fileUrl, '_blank');
    }
  };

  const handleDownloadPDF = () => {
    if (invoice.fileUrl) {
      const link = document.createElement('a');
      link.href = invoice.fileUrl;
      link.download = `Invoice-${invoice.invoiceId}.pdf`;
      link.click();
    }
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <Row className="mb-4">
          <Col>
            <h3>Invoice Details</h3>
          </Col>
          <Col className="text-end">
            <Button className="back-button me-2" onClick={() => navigate('/dms/invoice')}><FaArrowLeft/> Back</Button>
            <Button  className="me-2" onClick={handleOpenPDF}>Open PDF</Button>
            <Button variant="success" onClick={handleDownloadPDF}><FaDownload/> Download PDF</Button>
          </Col>
        </Row>

        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Row className="mb-3">
              <Col md={6}><strong>Invoice ID:</strong> {invoice.id}</Col>
              <Col md={6}><strong>Order ID:</strong> {invoice.orderId}</Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}><strong>Customer Name:</strong> {invoice.customer}</Col>
              <Col md={6}><strong>Date:</strong> {invoice.date}</Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}><strong>Amount (₹):</strong> {invoice.amount}</Col>
              <Col md={6}><strong>Status:</strong> <Badge bg={invoice.status === 'Paid' ? 'success' : invoice.status === 'Pending' ? 'warning' : 'danger'}>{invoice.status}</Badge></Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="shadow-sm">
          <Card.Header>
            <strong>Invoice Notes</strong>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>{invoice.date}</strong> - Invoice generated for order.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Status:</strong> <Badge bg={invoice.status === 'Paid' ? 'success' : 'secondary'}>{invoice.status}</Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Handled By:</strong> Accounts Department
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </AdminLayout>
  );
};
