import React from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { AdminLayout } from '../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const ActivityView = () => {
  const navigate = useNavigate();

  // Mock data – replace with dynamic data if fetching from backend
  const activity = {
    userId: 'U001',
    rideId: 'R1001',
    action: 'Ride Requested',
    description: 'User requested a ride.',
    timestamp: '2025-03-13 10:30 AM',
    status: 'Success',
    userType: 'Rider',
    rideFare: '₹150',
    createdAt: '2025-03-13 10:30 AM',
    createdBy: 'System',
  };

  // Status badge color logic
  const getStatusVariant = (status) => {
    switch (status) {
      case 'Success': return 'success';
      case 'Pending': return 'warning';
      case 'Failed': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <AdminLayout>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Activity Log Details</h4>
          <Button variant="secondary" onClick={() => navigate(-1)}>← Back</Button>
        </div>

        <Card className="p-4 shadow-sm">
          <Row className="mb-3">
            <Col md={6}>
              <p><strong>User ID:</strong> {activity.userId}</p>
              <p><strong>User Type:</strong> {activity.userType}</p>
              <p><strong>Ride ID:</strong> {activity.rideId}</p>
              <p><strong>Ride Fare:</strong> {activity.rideFare}</p>
            </Col>
            <Col md={6}>
              <p><strong>Action:</strong> {activity.action}</p>
              <p><strong>Description:</strong> {activity.description}</p>
              <p><strong>Timestamp:</strong> {activity.timestamp}</p>
              <p>
                <strong>Status:</strong>{' '}
                <Badge bg={getStatusVariant(activity.status)}>{activity.status}</Badge>
              </p>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col md={6}>
              <p><strong>Created At:</strong> {activity.createdAt}</p>
            </Col>
            <Col md={6}>
              <p><strong>Created By:</strong> {activity.createdBy}</p>
            </Col>
          </Row>
        </Card>
      </div>
    </AdminLayout>
  );
};
