import React, { useState } from 'react';
import { Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaTrash, FaEye, FaFileExport, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const CustomerFeedbackList = () => {
    const initialFeedbacks = [
        { id: 'F101', customer: 'Aditi Verma', product: 'Smartphone X', orderId: 'O2023', issue: 'Late Delivery', comment: 'The package arrived 3 days late.' },
        { id: 'F102', customer: 'Arjun Mehra', product: 'Wall Clock', orderId: 'O2024', issue: 'Damaged Product', comment: 'Received a broken clock.' },
    ];

    const navigate = useNavigate();
    const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (e) => setSearch(e.target.value);

    const filteredFeedbacks = feedbacks.filter((feedback) => {
        return feedback.customer.toLowerCase().includes(search.toLowerCase()) ||
            feedback.issue.toLowerCase().includes(search.toLowerCase());
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFeedbacks = filteredFeedbacks.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredFeedbacks.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="feedbacklist-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Customer Feedback List</h3>
                    <div className="d-flex">
                        <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                            <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
                            <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>

                <div className="d-flex justify-content-end mb-3">
                    <InputGroup className="dms-custom-width">
                        <Form.Control placeholder="Search feedbacks..." value={search} onChange={handleSearch} />
                    </InputGroup>
                </div>

                <div className="dms-table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Feedback ID</th>
                                <th>Customer Name</th>
                                <th>Product Name</th>
                                <th>Order ID</th>
                                <th>Issue</th>
                                <th>Comment</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentFeedbacks.length > 0 ? (
                                currentFeedbacks.map((feedback) => (
                                    <tr key={feedback.id}>
                                        <td>{feedback.id}</td>
                                        <td>{feedback.customer}</td>
                                        <td>{feedback.product}</td>
                                        <td>{feedback.orderId}</td>
                                        <td>{feedback.issue}</td>
                                        <td>{feedback.comment}</td>
                                        <td>
                                            <FaEye title="View" className="icon-blue me-2" onClick={() => navigate("/dms/customer-feedback/view")} />
                                            <FaTrash title="Delete" className="icon-red" onClick={() => setFeedbacks(feedbacks.filter(f => f.id !== feedback.id))} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">No feedback found.</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

                <Pagination className="justify-content-center">
                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                </Pagination>
            </div>
        </AdminLayout>
    );
};
