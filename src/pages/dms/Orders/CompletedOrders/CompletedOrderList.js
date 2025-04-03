import React, { useState } from 'react';
import { Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaDownload, FaEye, FaFilePdf, FaFileExcel, FaFileExport } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const CompletedOrderList = () => {
    const navigate = useNavigate();

    const initialOrders = [
        { id: 'C101', customer: 'Rahul Yadav', product: 'Wooden Table', category: 'Furniture', quantity: 1, amount: 5000, invoice: 'INV101.pdf' },
        { id: 'C102', customer: 'Sneha Kapoor', product: 'Gold Earrings', category: 'Jewelry', quantity: 2, amount: 7200, invoice: 'INV102.pdf' },
    ];

    const [orders, setOrders] = useState(initialOrders);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const itemsPerPage = 5;

    const categories = ['All', ...new Set(initialOrders.map(order => order.category))];

    const handleSearch = (e) => setSearch(e.target.value);
    const handleCategoryFilter = (category) => setSelectedCategory(category);

    const filteredOrders = orders.filter(order =>
        (selectedCategory === 'All' || order.category === selectedCategory) &&
        (order.customer.toLowerCase().includes(search.toLowerCase()) ||
            order.product.toLowerCase().includes(search.toLowerCase()) ||
            order.category.toLowerCase().includes(search.toLowerCase()))
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="orderlist-container p-3">
                <div className="dms-pages-header sticky-header d-flex justify-content-between">
                    <h3>Completed Order List</h3>
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
                        {categories.map(category => (
                            <Dropdown.Item key={category} onClick={() => handleCategoryFilter(category)}>
                                {category}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <InputGroup className="dms-custom-width">
                        <Form.Control placeholder="Search orders..." value={search} onChange={handleSearch} />
                    </InputGroup>
                </div>

                <div className="dms-table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Amount (INR)</th>
                                <th>Invoice</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders.length > 0 ? (
                                currentOrders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.customer}</td>
                                        <td>{order.product}</td>
                                        <td>{order.category}</td>
                                        <td>{order.quantity}</td>
                                        <td>₹{order.amount}</td>
                                        <td>
                                            <FaEye title="View Invoice" className="icon-green me-2" />
                                            <FaDownload title="Download Invoice"  />
                                        </td>
                                        <td>
                                            <FaEye title="View" className="icon-blue me-2" onClick={() => navigate('/dms/completed-orders/view', { state: { order } })} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No completed orders found.</td>
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
