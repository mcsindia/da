import React, { useState, useEffect } from 'react';
import { Button, Form} from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate, useLocation } from 'react-router-dom';

export const StateEdit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Initial state data from location state
    const [stateData, setStateData] = useState(location.state?.state || {
        name: '',
        country_id: '',
        status: ''
    });

    useEffect(() => {
        if (!location.state?.state) {
            navigate('/master/state'); // Redirect if no state data is passed
        }
    }, [location.state, navigate]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStateData({ ...stateData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('State updated:', stateData);
        // Update logic (API call or state update)
        navigate('/master/state'); // Redirect to State List after editing
    };

    return (
        <AdminLayout>
            <div className="dms-container">
                <h3 className="mb-4">Edit State</h3>

                <div className="dms-form-container">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="dms-form-group" controlId="name">
                            <Form.Label>State Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={stateData.name}
                                onChange={handleChange}
                                placeholder="Enter state name"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group" controlId="country_id">
                            <Form.Label>Country ID</Form.Label>
                            <Form.Control
                                type="number"
                                name="country_id"
                                value={stateData.country_id}
                                onChange={handleChange}
                                placeholder="Enter country ID"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group" controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="status"
                                value={stateData.status}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit">Update State</Button>
                        <Button
                            type="cancel"
                            className="ms-3"
                            onClick={() => navigate('/master/state')}
                        >
                            Cancel
                        </Button>
                    </Form>
                </div>
            </div>
        </AdminLayout>
    );
};
