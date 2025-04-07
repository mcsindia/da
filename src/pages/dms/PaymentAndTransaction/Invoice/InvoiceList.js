import React, { useState } from 'react';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { Button, Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaFileExport, FaPlus, FaFileExcel, FaFilePdf, FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const InvoiceList = () => {
    const navigate = useNavigate();

    const initialInvoices = [
        {
            id: 'INV001',
            orderId: 'ORD1234',
            customer: 'Riya Sharma',
            date: '2025-03-10',
            amount: '₹2,300',
            status: 'Paid',
            file: 'invoice_INV001.pdf',
        },
        {
            id: 'INV002',
            orderId: 'ORD1235',
            customer: 'Aarav Joshi',
            date: '2025-03-12',
            amount: '₹1,450',
            status: 'Pending',
            file: 'invoice_INV002.pdf',
        },
        {
            id: 'INV003',
            orderId: 'ORD1236',
            customer: 'Kavya Mehta',
            date: '2025-03-15',
            amount: '₹3,100',
            status: 'Paid',
            file: 'invoice_INV003.pdf',
        },
    ];

    const [invoices, setInvoices] = useState(initialInvoices);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (e) => setSearch(e.target.value);

    const filteredInvoices = invoices.filter(
        (inv) =>
            (inv.customer.toLowerCase().includes(search.toLowerCase()) ||
                inv.id.toLowerCase().includes(search.toLowerCase()) ||
                inv.orderId.toLowerCase().includes(search.toLowerCase())) &&
            (statusFilter ? inv.status === statusFilter : true)
    );

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentInvoices = filteredInvoices.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);

    const handlePageChange = (num) => setCurrentPage(num);
    const handleDelete = (id) => setInvoices(invoices.filter(inv => inv.id !== id));

    return (
        <AdminLayout>
            <div className="p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Invoice List</h3>
                    <div className="d-flex">
                        <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
                        </DropdownButton>
                        <Button onClick={() => navigate('/dms/invoice/add')}>
                            <FaPlus /> Add Invoice
                        </Button>
                    </div>
                </div>

                <div className="d-flex justify-content-between mb-3">
                    <DropdownButton variant="primary" title="Filter by Status" id="filter-dropdown">
                        <Dropdown.Item onClick={() => setStatusFilter('')}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => setStatusFilter('Paid')}>Paid</Dropdown.Item>
                        <Dropdown.Item onClick={() => setStatusFilter('Pending')}>Pending</Dropdown.Item>
                        <Dropdown.Item className='text-custom-danger' onClick={() => setStatusFilter('')}>Cancel</Dropdown.Item>
                    </DropdownButton>
                    <InputGroup className="dms-custom-width">
                        <Form.Control
                            placeholder="Search invoices..."
                            value={search}
                            onChange={handleSearch}
                        />
                    </InputGroup>
                </div>

                <div className="dms-table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Invoice ID</th>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Date</th>
                                <th>Amount (₹)</th>
                                <th>Payment Status</th>
                                <th>Invoice File</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentInvoices.length > 0 ? (
                                currentInvoices.map((invoice) => (
                                    <tr key={invoice.id}>
                                        <td>{invoice.id}</td>
                                        <td>{invoice.orderId}</td>
                                        <td>{invoice.customer}</td>
                                        <td>{invoice.date}</td>
                                        <td>{invoice.amount}</td>
                                        <td>{invoice.status}</td>
                                        <td>
                                            <a href={`/${invoice.file}`} download>
                                                <FaDownload className="me-1" />
                                                {invoice.file}
                                            </a>
                                        </td>
                                        <td>
                                            <FaEye
                                                title="View"
                                                className="icon-blue me-2"
                                                onClick={() => navigate('/dms/invoice/view', { state: { invoice } })}
                                            />
                                            <FaEdit
                                                title="Edit"
                                                className="icon-green me-2"
                                                onClick={() => navigate('/dms/invoice/edit', { state: { invoice } })}
                                            />
                                            <FaTrash
                                                title="Delete"
                                                className="icon-red"
                                                onClick={() => handleDelete(invoice.id)}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No invoices found.</td>
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
