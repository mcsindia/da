import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Table, Card, Badge } from "react-bootstrap";
import { FaArrowLeft, FaPercent } from "react-icons/fa";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";

export const DiscountView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const discount = location.state?.discount;

  if (!discount) {
    return (
      <AdminLayout>
        <div className="text-center mt-5">
          <h3>Discount not found</h3>
          <Button onClick={() => navigate("/dms/discounts")} className="mt-3">
            Go Back
          </Button>
        </div>
      </AdminLayout>
    );
  }

  const {
    id,
    productName,
    productId,
    type,
    value,
    startDate,
    endDate,
    status,
    createdAt = "N/A",
    updatedAt = "N/A",
    description = "No description available."
  } = discount;

  return (
    <AdminLayout>
      <div className="discount-view-page container mt-4">
        <Card className="mb-4">
          <Card.Body className="d-flex justify-content-between align-items-center m-4">
            <div>
              <h2><FaPercent className="me-2" />{productName}</h2>
              <p><strong>Discount ID:</strong> {id}</p>
              <p><strong>Status:</strong> <Badge bg={status === "Active" ? "success" : "danger"}>{status}</Badge></p>
            </div>
            <Button className="back-button" onClick={() => navigate(-1)}>
              <FaArrowLeft /> Back
            </Button>
          </Card.Body>
        </Card>

        {/* Discount Details */}
        <section className="mt-4">
          <h4>Discount Details</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Type</th>
                <th>Value</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{productId}</td>
                <td>{type}</td>
                <td>{value}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
              </tr>
            </tbody>
          </Table>
        </section>

        <hr />

        {/* Description */}
        <section className="mt-4">
          <h4>Description</h4>
          <p>{description}</p>
        </section>

        <hr />

        {/* Meta Info */}
        <section className="mt-4">
          <h4>Additional Information</h4>
          <p><strong>Date Created:</strong> {createdAt}</p>
          <p><strong>Last Updated:</strong> {updatedAt}</p>
        </section>
      </div>
    </AdminLayout>
  );
};
