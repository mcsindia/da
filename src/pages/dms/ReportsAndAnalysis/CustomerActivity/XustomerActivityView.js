import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Table, Card, Badge } from "react-bootstrap";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";

export const CustomerActivityView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state?.user;

  if (!user) {
    return (
      <AdminLayout>
        <div className="text-center mt-5">
          <h3>Customer data not found</h3>
          <Button onClick={() => navigate("/dms/customer-activity")} className="mt-3">
            Go Back
          </Button>
        </div>
      </AdminLayout>
    );
  }

  const {
    id,
    name,
    orders,
    totalSpend,
    lastLogin,
    status,
    registeredOn = "01-Jan-2024",
    lastUpdated = "N/A",
    addedBy = "Admin",
    notes = "No additional notes available."
  } = user;

  return (
    <AdminLayout>
      <div className="customer-activity-view container mt-4">
        <Card className="mb-4">
          <Card.Body className="d-flex justify-content-between align-items-center m-4">
            <div>
              <h2><FaUser className="me-2" />  {name}</h2>
              <p><strong>User ID:</strong> {id}</p>
              <p><strong>Status:</strong> <Badge bg={status === "Active" ? "success" : "danger"}>{status}</Badge></p>
            </div>
            <Button className="back-button" onClick={() => navigate(-1)}>
              <FaArrowLeft /> Back
            </Button>
          </Card.Body>
        </Card>

        {/* Activity Summary */}
        <section className="mt-4">
          <h4>Activity Summary</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Orders Placed</th>
                <th>Total Spend (₹)</th>
                <th>Last Login</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{orders}</td>
                <td>{totalSpend}</td>
                <td>{lastLogin}</td>
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
          <p><strong>Registered On:</strong> {registeredOn}</p>
          <p><strong>Last Updated:</strong> {lastUpdated}</p>
        </section>
      </div>
    </AdminLayout>
  );
};
