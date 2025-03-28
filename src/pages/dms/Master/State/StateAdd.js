import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const StateAdd = () => {
    const [state, setState] = useState({
        name: '',
        country_id: '',
        status: ''
    });

    const navigate = useNavigate();

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('State added:', state);
        // You can call an API or save the data here
        navigate('/master/state'); // Redirect to State List after adding
    };

    return (
        <AdminLayout>
            <div className="dms-container">
                <h3 className="mb-4">Add New State</h3>

                <div className="dms-form-container">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="dms-form-group" controlId="name">
                            <Form.Label>State Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={state.name}
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
                                value={state.country_id}
                                onChange={handleChange}
                                placeholder="Enter country ID"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group" controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="status"
                                value={state.status}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit">Add State</Button>
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
