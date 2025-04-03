import React, { useState } from 'react';
import { Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEye, FaTrash, FaFileExport, FaFileExcel, FaFilePdf, FaDownload, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const CanceledOrderList = () => {
    const navigate = useNavigate();

    const initialOrders = [
        { id: 'C301', customer: 'Amit Verma',  product: 'Antique Clock', category: 'Home Decor', quantity: 1, amount: 1200, status: 'Canceled' },
        { id: 'C302', customer: 'Neha Joshi', product: 'Kundan Necklace', category: 'Jewelry', quantity: 1, amount: 4500, status: 'Canceled' },
    ];

    const [orders, setOrders] = useState(initialOrders);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (e) => setSearch(e.target.value);
    const handleFilter = (category) => setFilter(category);

    const uniqueCategories = [...new Set(initialOrders.map(order => order.category))];

    const filteredOrders = orders.filter((order) => {
        const matchesSearch = order.customer.toLowerCase().includes(search.toLowerCase()) ||
            order.product.toLowerCase().includes(search.toLowerCase()) ||
            order.category.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter ? order.category === filter : true;
        return matchesSearch && matchesFilter;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="orderlist-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Canceled Order List</h3>
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
                    <DropdownButton variant="primary" title="Filter" id="category-filter-dropdown">
                        <Dropdown.Item onClick={() => handleFilter('')}>All</Dropdown.Item>
                        {uniqueCategories.map(category => (
                            <Dropdown.Item key={category} onClick={() => handleFilter(category)}>{category}</Dropdown.Item>
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
                                            <FaDownload title="Download Invoice" />
                                        </td>
                                        <td>
                                            <FaEye title="View" className="icon-blue me-2" onClick={() => navigate('/dms/canceled-orders/view', { state: { order } })} />
                                            <FaEdit title="Edit" className="icon-green me-2" onClick={() => navigate('/dms/canceled-orders/edit', { state: { order } })} />
                                            <FaTrash title="Delete" className="icon-red" onClick={() => setOrders(orders.filter(o => o.id !== order.id))} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No canceled orders found.</td>
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