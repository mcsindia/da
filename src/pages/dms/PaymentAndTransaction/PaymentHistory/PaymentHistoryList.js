import React, { useState } from 'react';
import {
    Table,
    InputGroup,
    Form,
    Pagination,
    Dropdown,
    DropdownButton,
   
} from 'react-bootstrap';
import {
    FaEye,
    FaFileExport,
    FaFileExcel,
    FaFilePdf,
} from 'react-icons/fa';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const PaymentHistoryList = () => {
    const initialData = [
        {
            transactionId: 'TXN0001',
            orderId: 'ORD1234',
            customerName: 'Riya Sharma',
            paymentDate: '2025-03-10',
            amount: '₹2,300',
            method: 'UPI',
            status: 'Success',
        },
        {
            transactionId: 'TXN0002',
            orderId: 'ORD1235',
            customerName: 'Aarav Joshi',
            paymentDate: '2025-03-12',
            amount: '₹1,450',
            method: 'Credit Card',
            status: 'Failed',
        },
        {
            transactionId: 'TXN0003',
            orderId: 'ORD1236',
            customerName: 'Kavya Mehta',
            paymentDate: '2025-03-15',
            amount: '₹3,100',
            method: 'Net Banking',
            status: 'Success',
        },
    ];

    const [data, setData] = useState(initialData);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    const handleSearch = (e) => setSearch(e.target.value);
    const handleStatusFilter = (value) => setStatusFilter(value);

    const filteredData = data.filter((entry) => {
        const matchSearch =
            entry.customerName.toLowerCase().includes(search.toLowerCase()) ||
            entry.transactionId.toLowerCase().includes(search.toLowerCase()) ||
            entry.orderId.toLowerCase().includes(search.toLowerCase());

        const matchStatus = statusFilter ? entry.status === statusFilter : true;

        return matchSearch && matchStatus;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="payment-history-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Payment History</h3>
                    <div className="d-flex">
                        <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>

                {/* Filters */}
                <div className="d-flex justify-content-between mb-3">
                    <DropdownButton title="Filter by Status" onSelect={handleStatusFilter}>
                        <Dropdown.Item eventKey="">All</Dropdown.Item>
                        <Dropdown.Item eventKey="Success">Success</Dropdown.Item>
                        <Dropdown.Item eventKey="Failed">Failed</Dropdown.Item>
                    </DropdownButton>
                    <InputGroup className="dms-custom-width">
                        <Form.Control
                            placeholder="Search transactions..."
                            value={search}
                            onChange={handleSearch}
                        />
                    </InputGroup>
                </div>

                {/* Table */}
                <div className="dms-table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Payment Date</th>
                                <th>Amount (₹)</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.length > 0 ? (
                                currentData.map((entry) => (
                                    <tr key={entry.transactionId}>
                                        <td>{entry.transactionId}</td>
                                        <td>{entry.orderId}</td>
                                        <td>{entry.customerName}</td>
                                        <td>{entry.paymentDate}</td>
                                        <td>{entry.amount}</td>
                                        <td>{entry.method}</td>
                                        <td>{entry.status}</td>
                                        <td>
                                        <FaEye
                                                className="icon-blue me-2"
                                                title="View"
                                                onClick={() =>
                                                    navigate('/dms/payment-history/view', {
                                                        state: { payment: entry },
                                                    })
                                                }
                                            />
                                         
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">
                                        No payment history found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

                {/* Pagination */}
                <Pagination className="justify-content-center">
                    <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    />
                </Pagination>
            </div>
        </AdminLayout>
    );
};
