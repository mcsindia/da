import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";

export const InventoryView = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract inventory details from location state
    const inventoryItem = location.state?.item;

    if (!inventoryItem) {
        return (
            <AdminLayout>
                <div className="text-center mt-4">
                    <h3>Inventory Item Not Found</h3>
                    <Button onClick={() => navigate("/dms/inventory")}>Go Back</Button>
                </div>
            </AdminLayout>
        );
    }

    const { id, name, stock, restockDate, supplier } = inventoryItem;

    return (
        <AdminLayout>
            <div className="inventory-details-page container mt-4">
                <Card className="mb-4">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2>{name}</h2>
                            <p><strong>Product ID:</strong> {id}</p>
                            <p><strong>Supplier:</strong> {supplier}</p>
                            <p>
                                <strong>Stock:</strong> {stock} units
                            </p>
                            <p><strong>Restock Date:</strong> {restockDate}</p>
                        </div>
                        <Button className="back-button" onClick={() => navigate(-1)}>
                            <FaArrowLeft /> Back
                        </Button>
                    </Card.Body>
                </Card>

            </div>
        </AdminLayout>
    );
};
