import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const PressReleaseEdit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const pressReleaseId = location.state?.pressReleaseId;

    // Handle invalid or missing pressReleaseId
    if (!pressReleaseId) {
        navigate('/media/press-releases'); // Navigate back to the press release list if no ID
    }

    // State for storing press release data
    const [pressRelease, setPressRelease] = useState({
        title: '',
        content: '',
        publish_date: '',
        author: '',
        status: 'Draft',
    });

    const [isLoading, setIsLoading] = useState(true);

    // Fetching the existing press release data (simulating an API call)
    useEffect(() => {
        const fetchPressRelease = async () => {
            // Replace with actual API request
            const data = {
                title: 'AI Advances in 2025',
                content: 'The future of artificial intelligence...',
                publish_date: '2025-02-10',
                author: 'John Doe',
                status: 'Published',
            };

            setPressRelease(data);
            setIsLoading(false);
        };

        fetchPressRelease();
    }, [pressReleaseId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPressRelease((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can make an API call here to update the user on the backend
    
        // Navigate back to the user list page after updating
        navigate('/media/press-releases');
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <AdminLayout>
            <div className="dms-container">
                <h3>Edit Press Release</h3>

                {/* Form for editing the press release */}
                <div className="dms-form-container">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="dms-form-group" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={pressRelease.title}
                                onChange={handleInputChange}
                                placeholder="Enter title"
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group" controlId="content">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="content"
                                value={pressRelease.content}
                                onChange={handleInputChange}
                                placeholder="Enter content"
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group " controlId="publish_date">
                            <Form.Label>Publish Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="publish_date"
                                value={pressRelease.publish_date}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group " controlId="author">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                name="author"
                                value={pressRelease.author}
                                onChange={handleInputChange}
                                placeholder="Enter author name"
                            />
                        </Form.Group>

                        <Form.Group className="dms-form-group " controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                name="status"
                                value={pressRelease.status}
                                onChange={handleInputChange}
                            >
                                <option value="Draft">Draft</option>
                                <option value="Published">Published</option>
                            </Form.Control>
                        </Form.Group>

                        <Button type="submit" className="mt-3">
                            Save Changes
                        </Button>
                        <Button type="cancel" className="ms-2 mt-3" onClick={() => navigate('/media/press-releases')}>
                            Cancel
                        </Button>
                    </Form>
                </div>
            </div>
        </AdminLayout>
    );
};
