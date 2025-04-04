import React, { useState } from 'react';
import { Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaTrash, FaEye, FaFileExport, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const ProductReviewList = () => {
    const initialReviews = [
        { id: 'R101', product: 'Antique Clock', customer: 'Aditi Verma', rating: 5, comment: 'Beautiful design!' },
        { id: 'R102', product: 'Kundan Set', customer: 'Arjun Mehra', rating: 4, comment: 'Good quality' },
    ];

    const navigate = useNavigate();
    const [reviews, setReviews] = useState(initialReviews);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (e) => setSearch(e.target.value);

    const filteredReviews = reviews.filter((review) => {
        const matchesSearch = review.customer.toLowerCase().includes(search.toLowerCase()) ||
            review.product.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter ? review.rating === parseInt(filter) : true;
        return matchesSearch && matchesFilter;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentReviews = filteredReviews.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="reviewlist-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Product Review List</h3>
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

                <div className="d-flex justify-content-between mb-3">
                    <DropdownButton variant="primary" title="Filter" id="filter-dropdown">
                        <Dropdown.Item onClick={() => setFilter('')}>All Ratings</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('5')}>5 Stars</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('4')}>4 Stars</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('3')}>3 Stars</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('2')}>2 Stars</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('1')}>1 Star</Dropdown.Item>
                        <Dropdown.Item className='text-custom-danger' onClick={() => setFilter('')}>Cancel</Dropdown.Item>
                    </DropdownButton>
                    <InputGroup className="dms-custom-width">
                        <Form.Control placeholder="Search reviews..." value={search} onChange={handleSearch} />
                    </InputGroup>
                </div>

                <div className="dms-table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Review ID</th>
                                <th>Product</th>
                                <th>Customer Name</th>
                                <th>Rating</th>
                                <th>Comment</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentReviews.length > 0 ? (
                                currentReviews.map((review) => (
                                    <tr key={review.id}>
                                        <td>{review.id}</td>
                                        <td>{review.product}</td>
                                        <td>{review.customer}</td>
                                        <td>{'⭐'.repeat(review.rating)}</td>
                                        <td>{review.comment}</td>
                                        <td>
                                            <FaEye title="View" className="icon-blue me-2" onClick={() => navigate("/dms/product-review/view")}  />
                                            <FaTrash title="Delete" className="icon-red" onClick={() => setReviews(reviews.filter(r => r.id !== review.id))} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No reviews found.</td>
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

