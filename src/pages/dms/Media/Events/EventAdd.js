import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const EventAdd = () => {
  const [event, setEvent] = useState({
    event_name: '',
    description: '',
    date_time: '',
    venue: '',
    organizer: '',
    status: '',
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event added:', event);
    // API call or state update to save the event
    navigate('/events'); // Redirect to the events list
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Add Event</h3>

        <div className="dms-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="dms-form-group" controlId="event_name">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                name="event_name"
                value={event.event_name}
                onChange={handleChange}
                placeholder="Enter event name"
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={event.description}
                onChange={handleChange}
                placeholder="Enter event description"
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="date_time">
              <Form.Label>Date & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="date_time"
                value={event.date_time}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="venue">
              <Form.Label>Venue</Form.Label>
              <Form.Control
                type="text"
                name="venue"
                value={event.venue}
                onChange={handleChange}
                placeholder="Enter event venue"
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="organizer">
              <Form.Label>Organizer</Form.Label>
              <Form.Control
                type="text"
                name="organizer"
                value={event.organizer}
                onChange={handleChange}
                placeholder="Enter event organizer"
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={event.status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit">Add Event</Button>
            <Button
              type="cancel"
              className="ms-3"
              onClick={() => navigate('/media/events')}
            >
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
