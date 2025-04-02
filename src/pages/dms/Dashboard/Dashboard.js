import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';
// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

export const Dashboard = () => {
  const revenueData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 18500, 15000, 21000, 25000, 23000, 27000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 5,
      },
    ],
  };

  const salesData = {
    labels: ['Direct', 'Affiliate', 'Sponsored', 'Organic'],
    datasets: [
      {
        data: [300, 150, 100, 50],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
        hoverOffset: 6,
      },
    ],
  };

  return (
    <Container fluid className="dashboard-container">
      <h2 className="my-4">E-Commerce Dashboard</h2>
      <Row>
        <Col md={3}><Card className="dashboard-card"><Card.Body><h6>Customers</h6><h3>45,320</h3><p className="text-success">+5.25%</p></Card.Body></Card></Col>
        <Col md={3}><Card className="dashboard-card"><Card.Body><h6>Orders</h6><h3>45,320</h3><p className="text-danger">-1.23%</p></Card.Body></Card></Col>
        <Col md={3}><Card className="dashboard-card"><Card.Body><h6>Earnings</h6><h3>7,524</h3><p className="text-danger">-7.85%</p></Card.Body></Card></Col>
        <Col md={3}><Card className="dashboard-card"><Card.Body><h6>Growth</h6><h3>+35.52%</h3><p className="text-success">+3.71%</p></Card.Body></Card></Col>
      </Row>
      
      <Row>
        <Col md={8}>
          <Card className="revenue-card">
            <Card.Body>
              <h6>Revenue Overview</h6>
              <div style={{ height: "100%", width: "100%" }}>
              <Line data={revenueData} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="sales-card">
            <Card.Body>
              <h6>Total Sales</h6>
              <div style={{ height: "100%", width: "100%" }}>
              <Pie data={salesData} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
