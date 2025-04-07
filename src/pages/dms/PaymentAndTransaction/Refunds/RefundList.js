import React, { useState } from 'react';
import { Button, Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaFileExport, FaPlus, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const RefundList = () => {
    const navigate = useNavigate();

    const initialRefunds = [
        {
            id: 'R101',
            orderId: 'O456',
            customerName: 'Ananya Sharma',
            refundDate: '2025-04-01',
            amount: 1500,
            reason: 'Product Damaged',
            status: 'Processed'
        },
        {
            id: 'R102',
            orderId: 'O457',
            customerName: 'Rohit Verma',
            refundDate: '2025-04-03',
            amount: 800,
            reason: 'Late Delivery',
            status: 'Pending'
        },
        {
            id: 'R103',
            orderId: 'O458',
            customerName: 'Priya Nair',
            refundDate: '2025-04-05',
            amount: 1200,
            reason: 'Wrong Item',
            status: 'Rejected'
        }
    ];

    const [refunds, setRefunds] = useState(initialRefunds);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (e) => setSearch(e.target.value);

    const filteredRefunds = refunds.filter((refund) => {
        const matchesSearch = refund.customerName.toLowerCase().includes(search.toLowerCase()) ||
            refund.reason.toLowerCase().includes(search.toLowerCase()) ||
            refund.id.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter ? refund.status === filter : true;
        return matchesSearch && matchesFilter;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRefunds = filteredRefunds.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredRefunds.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="refundlist-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Refund List</h3>
                    <div className="d-flex">
                        <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                            <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
                            <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
                        </DropdownButton>
                        <Button onClick={() => navigate('/dms/refunds/add')}>
                            <FaPlus /> Add Refund
                        </Button>
                    </div>
                </div>

                <div className="d-flex justify-content-between mb-3">
                    <DropdownButton variant="primary" title="Filter by Status" id="filter-dropdown">
                        <Dropdown.Item onClick={() => setFilter('')}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('Processed')}>Processed</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('Pending')}>Pending</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('Rejected')}>Rejected</Dropdown.Item>
                        <Dropdown.Item className='text-custom-danger' onClick={() => setFilter('')}>Cancel</Dropdown.Item>
                    </DropdownButton>
                    <InputGroup className="dms-custom-width">
                        <Form.Control placeholder="Search refunds..." value={search} onChange={handleSearch} />
                    </InputGroup>
                </div>

                <div className="dms-table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Refund ID</th>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Refund Date</th>
                                <th>Refund Amount (₹)</th>
                                <th>Reason</th>
                                <th>Refund Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRefunds.length > 0 ? (
                                currentRefunds.map((refund) => (
                                    <tr key={refund.id}>
                                        <td>{refund.id}</td>
                                        <td>{refund.orderId}</td>
                                        <td>{refund.customerName}</td>
                                        <td>{refund.refundDate}</td>
                                        <td>₹{refund.amount}</td>
                                        <td>{refund.reason}</td>
                                        <td>{refund.status}</td>
                                        <td>
                                            <FaEye title="View" className="icon-blue me-2" onClick={() => navigate('/dms/refunds/view', { state: { refund } })} />
                                            <FaEdit title="Edit" className="icon-green me-2" onClick={() => navigate('/dms/refunds/edit', { state: { refund } })} />
                                            <FaTrash title="Delete" className="icon-red" onClick={() => setRefunds(refunds.filter(r => r.id !== refund.id))} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No refunds found.</td>
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
