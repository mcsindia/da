import React, { useState, useEffect } from 'react';
import { Button, Form} from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate, useLocation } from 'react-router-dom';

export const CityEdit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Initial city data from location state
    const [city, setCity] = useState(location.state?.city || {
        name: '',
        state_id: '',
        country_id: '',
        status: ''
    });

    useEffect(() => {
        if (!location.state?.city) {
            navigate('/master/city'); // Redirect if no city data is passed
        }
    }, [location.state, navigate]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCity({ ...city, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('City updated:', city);
        // Update logic (API call or state update)
        navigate('/master/city'); // Redirect to Cities List after editing
    };

    return (
        <AdminLayout>
            <div className='dms-container'>
                <h3 className="mb-4">Edit City</h3>

                <div className='dms-form-container'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='dms-form-group' controlId="name">
                            <Form.Label>City Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={city.name}
                                onChange={handleChange}
                                placeholder="Enter city name"
                                required
                            />
                        </Form.Group>

                        <Form.Group className='dms-form-group' controlId="state_id">
                            <Form.Label>State ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="state_id"
                                value={city.state_id}
                                onChange={handleChange}
                                placeholder="Enter state ID"
                                required
                            />
                        </Form.Group>

                        <Form.Group className='dms-form-group' controlId="country_id">
                            <Form.Label>Country ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="country_id"
                                value={city.country_id}
                                onChange={handleChange}
                                placeholder="Enter country ID"
                                required
                            />
                        </Form.Group>

                        <Form.Group className='dms-form-group' controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="status"
                                value={city.status}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit">
                            Update City
                        </Button>
                        <Button
                            type='cancel'
                            className="ms-3"
                            onClick={() => navigate('/master/city')}
                        >
                            Cancel
                        </Button>
                    </Form>
                </div>
            </div>
        </AdminLayout>
    );
};
