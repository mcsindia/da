import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const NewsAdd = () => {
    const [news, setNews] = useState({
        title: '',
        content: '',
        author_id: '',
        publish_date: '',
        status: '',
        image: null, // New field to store the image file
    });

    const navigate = useNavigate();

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNews({ ...news, [name]: value });
    };

    // Handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNews({ ...news, image: URL.createObjectURL(file) });
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('News added:', news);
        // API call or state update to save the news
        navigate('/master/news'); // Redirect to the news list
    };

    return (
        <AdminLayout>
            <div className="dms-container">
                <h3 className="mb-4">Add News</h3>

                <div className="dms-form-container">
                    <Form onSubmit={handleSubmit}>
                            {/* Image Upload Section */}
                            <Form.Group className="dms-form-group" controlId="image">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {news.image && (
                                <div className="mt-2">
                                    <img src={news.image} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                </div>
                            )}
                        </Form.Group>
                        
                        <Form.Group className="dms-form-group" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={news.title}
                                onChange={handleChange}
                                placeholder="Enter news title"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group" controlId="content">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="content"
                                value={news.content}
                                onChange={handleChange}
                                placeholder="Enter news content"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group" controlId="author_id">
                            <Form.Label>Author ID</Form.Label>
                            <Form.Control
                                type="number"
                                name="author_id"
                                value={news.author_id}
                                onChange={handleChange}
                                placeholder="Enter author ID"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group" controlId="publish_date">
                            <Form.Label>Publish Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="publish_date"
                                value={news.publish_date}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group" controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="status"
                                value={news.status}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit">Add News</Button>
                        <Button
                            type="cancel"
                            className="ms-3"
                            onClick={() => navigate('/media/news')}
                        >
                            Cancel
                        </Button>
                    </Form>
                </div>
            </div>
        </AdminLayout>
    );
};
