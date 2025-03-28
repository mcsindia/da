import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const PressRealeaseAdd = () => {
  const [pressRelease, setPressRelease] = useState({
    title: '',
    content: '',
    publish_date: '',
    author: '',
    status: 'Draft',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPressRelease({ ...pressRelease, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Press Release added:', pressRelease);
    // Logic to save the new press release
    navigate('/media/press-releases'); // Redirect to press releases list
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Add Press Release</h3>

        <div className="dms-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="dms-form-group" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={pressRelease.title}
                onChange={handleChange}
                placeholder="Enter title"
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="content"
                value={pressRelease.content}
                onChange={handleChange}
                placeholder="Enter content"
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="publish_date">
              <Form.Label>Publish Date</Form.Label>
              <Form.Control
                type="date"
                name="publish_date"
                value={pressRelease.publish_date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={pressRelease.author}
                onChange={handleChange}
                placeholder="Enter author"
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={pressRelease.status}
                onChange={handleChange}
                required
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit">Add Press Release</Button>
            <Button
              className="ms-3"
              type='cancel'
              onClick={() => navigate('/media/press-releases')}
            >
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
