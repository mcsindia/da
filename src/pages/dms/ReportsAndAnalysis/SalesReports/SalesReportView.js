import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Table, Card, Badge } from "react-bootstrap";
import { FaArrowLeft, FaChartLine } from "react-icons/fa";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";

export const SalesReportView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const report = location.state?.report;

  if (!report) {
    return (
      <AdminLayout>
        <div className="text-center mt-5">
          <h3>Sales Report not found</h3>
          <Button onClick={() => navigate("/dms/sales-report")} className="mt-3">
            Go Back
          </Button>
        </div>
      </AdminLayout>
    );
  }

  const {
    reportId,
    month,
    totalOrders,
    revenue,
    avgOrderValue,
    createdBy,
    createdOn,
    updatedOn = "N/A",
    notes = "No notes available.",
    status
  } = report;

  return (
    <AdminLayout>
      <div className="sales-report-view container mt-4">
        <Card className="mb-4">
          <Card.Body className="d-flex justify-content-between align-items-center m-4">
            <div>
              <h2><FaChartLine className="me-2" /> Sales Report - {month}</h2>
              <p><strong>Report ID:</strong> {reportId || 'N/A'}</p>
              <p><strong>Status:</strong> <Badge bg={status === "Active" ? "success" : "danger"}>{status}</Badge></p>
            </div>
            <Button className="back-button" onClick={() => navigate(-1)}>
              <FaArrowLeft /> Back
            </Button>
          </Card.Body>
        </Card>

        {/* Report Details */}
        <section className="mt-4">
          <h4>Report Summary</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Month</th>
                <th>Total Orders</th>
                <th>Revenue (₹)</th>
                <th>Avg Order Value (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{month}</td>
                <td>{totalOrders}</td>
                <td>{revenue}</td>
                <td>{avgOrderValue}</td>
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
          <p><strong>Created By:</strong> {createdBy}</p>
          <p><strong>Created On:</strong> {createdOn}</p>
          <p><strong>Last Updated:</strong> {updatedOn}</p>
        </section>
      </div>
    </AdminLayout>
  );
};
