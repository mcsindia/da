import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Table, Card, Badge } from "react-bootstrap";
import { FaArrowLeft, FaTag } from "react-icons/fa";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";

export const CouponView = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract coupon details from location state
    const coupon = location.state?.coupon;

    if (!coupon) {
        return (
            <AdminLayout>
                <div className="text-center mt-5">
                    <h3>Coupon not found</h3>
                    <Button onClick={() => navigate("/dms/manage-coupons")} className="mt-3">Go Back</Button>
                </div>
            </AdminLayout>
        );
    }

    const {
        id,
        code,
        type,
        value,
        minOrder,
        maxDiscount,
        validFrom,
        validTo,
        status,
        createdAt = "N/A",
        updatedAt = "N/A",
        description = "No description available."
    } = coupon;

    return (
        <AdminLayout>
            <div className="coupon-view-page container mt-4">
                <Card className="mb-4">
                    <Card.Body className="d-flex justify-content-between align-items-center m-4">
                        <div>
                            <h2><FaTag className="me-2" />{code}</h2>
                            <p>
                                <strong>Coupon ID:</strong> {id}
                            </p>
                            <p>
                                <strong>Status:</strong> <Badge bg={status === "Active" ? "success" : "danger"}>{status}</Badge>
                            </p>
                        </div>
                        <Button className="back-button" onClick={() => navigate(-1)}>
                            <FaArrowLeft /> Back
                        </Button>
                    </Card.Body>
                </Card>

                {/* Coupon Details Table */}
                <section className="mt-4">
                    <h4>Coupon Details</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Value</th>
                                <th>Min Order</th>
                                <th>Max Discount</th>
                                <th>Valid From</th>
                                <th>Valid To</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{type}</td>
                                <td>{value}</td>
                                <td>{minOrder}</td>
                                <td>{maxDiscount}</td>
                                <td>{validFrom}</td>
                                <td>{validTo}</td>
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
                    <p>
                        <strong>Date Created:</strong> {createdAt}
                    </p>
                    <p>
                        <strong>Last Updated:</strong> {updatedAt}
                    </p>
                </section>
            </div>
        </AdminLayout>
    );
};
