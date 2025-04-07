import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import {FaArrowLeft} from 'react-icons/fa'

export const RefundView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { refund } = location.state || {};

  if (!refund) {
    return (
      <AdminLayout>
        <div className="dms-container">
          <h4>No refund data available.</h4>
          <Button variant="secondary" onClick={() => navigate('/dms/manage-refund')}>Back to List</Button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="dms-container">
        <Row className="mb-4">
          <Col>
            <h3>Refund Details</h3>
          </Col>
          <Col className="text-end">
            <Button className='back-button' onClick={() => navigate('/dms/refunds')}> <FaArrowLeft/> Back</Button>
          </Col>
        </Row>

        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Row className="mb-3">
              <Col md={6}><strong>Refund ID:</strong> {refund.id}</Col>
              <Col md={6}><strong>Order ID:</strong> {refund.orderId}</Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}><strong>Customer Name:</strong> {refund.customerName}</Col>
              <Col md={6}><strong>Refund Date:</strong> {refund.refundDate}</Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}><strong>Refund Amount (₹):</strong> {refund.amount}</Col>
              <Col md={6}><strong>Refund Status:</strong> <Badge bg={refund.status === 'Processed' ? 'success' : 'warning'}>{refund.status}</Badge></Col>
            </Row>
            <Row>
              <Col md={12}>
                <strong>Reason:</strong>
                <p className="mt-2">{refund.reason}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="shadow-sm">
          <Card.Header>
            <strong>Refund History</strong>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>{refund.refundDate}</strong> - Refund initiated by customer.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>{refund.status === 'Processed' ? refund.refundDate : 'Pending Review'}</strong> - Refund status: <Badge bg={refund.status === 'Processed' ? 'success' : 'secondary'}>{refund.status}</Badge>
              </ListGroup.Item>
              {/* You can add more log entries if available */}
              <ListGroup.Item>
                <strong>Handled By:</strong> Support Team
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </AdminLayout>
  );
};
