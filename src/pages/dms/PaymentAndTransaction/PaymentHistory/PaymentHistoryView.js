import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Table, Card, Badge } from "react-bootstrap";
import { FaArrowLeft, FaMoneyCheckAlt } from "react-icons/fa";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";

export const PaymentHistoryView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const payment = location.state?.payment;

  if (!payment) {
    return (
      <AdminLayout>
        <div className="text-center mt-5">
          <h3>Payment details not found</h3>
          <Button onClick={() => navigate("/dms/payment-history")} className="mt-3">
            Go Back
          </Button>
        </div>
      </AdminLayout>
    );
  }

  const {
    transactionId,
    orderId,
    customerId,
    customerName,
    paymentDate,
    amount,
    method,
    status,
    currency = "INR",
    gateway = "Razorpay",
    referenceNumber = "N/A",
    remarks = "N/A",
    addedBy = "System",
    addedOn = "2025-03-10",
    lastUpdated = "N/A",
    notes = "No additional notes available.",
  } = payment;

  return (
    <AdminLayout>
      <div className="payment-history-view container mt-4">
        <Card className="mb-4">
          <Card.Body className="d-flex justify-content-between align-items-center m-4">
            <div>
              <h2><FaMoneyCheckAlt className="me-2" /> Transaction: {transactionId}</h2>
              <p><strong>Order ID:</strong> {orderId}</p>
              <p><strong>Status:</strong> <Badge bg={status === "Success" ? "success" : "danger"}>{status}</Badge></p>
            </div>
            <Button className="back-button" onClick={() => navigate(-1)}>
              <FaArrowLeft /> Back
            </Button>
          </Card.Body>
        </Card>

        {/* Payment Summary */}
        <section className="mt-4">
          <h4>Payment Summary</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Customer ID</th>
                <th>Payment Method</th>
                <th>Gateway</th>
                <th>Payment Date</th>
                <th>Amount (₹)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{customerName}</td>
                <td>{customerId}</td>
                <td>{method}</td>
                <td>{gateway}</td>
                <td>{paymentDate}</td>
                <td>{amount} {currency}</td>
                <td>
                  <Badge bg={status === "Success" ? "success" : "danger"}>
                    {status}
                  </Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </section>

        <hr />

        {/* Reference & Remarks */}
        <section className="mt-4">
          <h4>Reference & Remarks</h4>
          <p><strong>Reference Number:</strong> {referenceNumber}</p>
          <p><strong>Remarks:</strong> {remarks}</p>
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
