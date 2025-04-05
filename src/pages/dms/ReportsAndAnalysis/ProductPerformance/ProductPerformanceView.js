import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Table, Card, Badge } from "react-bootstrap";
import { FaArrowLeft, FaBoxOpen } from "react-icons/fa";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";

export const ProductPerformanceView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return (
      <AdminLayout>
        <div className="text-center mt-5">
          <h3>Product Performance data not found</h3>
          <Button onClick={() => navigate("/dms/product-performance")} className="mt-3">
            Go Back
          </Button>
        </div>
      </AdminLayout>
    );
  }

  const {
    id,
    name,
    unitsSold,
    revenue,
    returnRate,
    rating,
    period,
    addedBy = "Admin",
    addedOn = "01-Apr-2025",
    lastUpdated = "N/A",
    status = "Active",
    notes = "No additional notes available."
  } = product;

  return (
    <AdminLayout>
      <div className="product-performance-view container mt-4">
        <Card className="mb-4">
          <Card.Body className="d-flex justify-content-between align-items-center m-4">
            <div>
              <h2><FaBoxOpen className="me-2" /> Product: {name}</h2>
              <p><strong>Product ID:</strong> {id}</p>
              <p><strong>Status:</strong> <Badge bg={status === "Active" ? "success" : "danger"}>{status}</Badge></p>
            </div>
            <Button className="back-button" onClick={() => navigate(-1)}>
              <FaArrowLeft /> Back
            </Button>
          </Card.Body>
        </Card>

        {/* Product Summary */}
        <section className="mt-4">
          <h4>Performance Summary</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Period</th>
                <th>Units Sold</th>
                <th>Total Revenue (₹)</th>
                <th>Return Rate (%)</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{period}</td>
                <td>{unitsSold}</td>
                <td>{revenue}</td>
                <td>{returnRate}</td>
                <td>{rating}</td>
              </tr>
            </tbody>
          </Table>
        </section>

        <hr />

        {/* Notes */}
        <section className="mt-4">
          <h4>Notes</h4>
          <p>{notes}</p>
        </section>

        <hr />

        {/* Meta Info */}
        <section className="mt-4">
          <h4>Additional Information</h4>
          <p><strong>Added By:</strong> {addedBy}</p>
          <p><strong>Added On:</strong> {addedOn}</p>
          <p><strong>Last Updated:</strong> {lastUpdated}</p>
        </section>
      </div>
    </AdminLayout>
  );
};
