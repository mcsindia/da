import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const CityAdd = () => {
  const [city, setCity] = useState({
    name: '',
    state_id: '',
    country_id: '',
    status: ''
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('City added:', city);
    // You can call an API or save the data here
    navigate('/master/city'); // Redirect to Cities List after adding
  };

  return (
    <AdminLayout>
      <div className='dms-container'>
        <h3 className="mb-4">Add New City</h3>
        
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
              Add City
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
