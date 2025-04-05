import React, { useState } from 'react';
import {
    Table,
    InputGroup,
    Form,
    Pagination,
    Dropdown,
    DropdownButton,
} from 'react-bootstrap';
import { FaEye, FaFileExport, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const SalesReportList = () => {
    const navigate = useNavigate();

    const initialReports = [
        { id: 'SR001', month: 'March ', totalOrders: 156, revenue: '₹1,54,200', avgOrderValue: '₹989', createdOn: '01-Apr-' },
        { id: 'SR002', month: 'Feb ', totalOrders: 132, revenue: '₹1,32,900', avgOrderValue: '₹1006', createdOn: '01-Mar-' },
        { id: 'SR003', month: 'Jan ', totalOrders: 145, revenue: '₹1,38,750', avgOrderValue: '₹957', createdOn: '01-Feb-' },
    ];

    const [reports, setReports] = useState(initialReports);
    const [search, setSearch] = useState('');
    const [monthFilter, setMonthFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (e) => setSearch(e.target.value);
    const handleMonthFilter = (value) => setMonthFilter(value);

    const filteredReports = reports.filter((r) => {
        const matchesSearch =
            r.month.toLowerCase().includes(search.toLowerCase()) ||
            r.id.toLowerCase().includes(search.toLowerCase());

        const matchesMonth = monthFilter ? r.month === monthFilter : true;

        return matchesSearch && matchesMonth;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentReports = filteredReports.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredReports.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const months = [
        'January ',
        'February ',
        'March ',
        'April ',
        'May ',
        'June ',
        'July ',
        'August ',
        'September ',
        'October ',
        'November ',
        'December ',
    ];

    return (
        <AdminLayout>
            <div className="salesreportlist-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Sales Reports</h3>
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

                {/* Filter & Search */}
                <div className="d-flex justify-content-between mb-3">
                    <DropdownButton title="Filter by Month" onSelect={handleMonthFilter}>
                        <Dropdown.Item eventKey="">All Months</Dropdown.Item>
                        {months.map((m) => (
                            <Dropdown.Item key={m} eventKey={m}>{m}</Dropdown.Item>
                        ))}
                    </DropdownButton>

                    <InputGroup className="dms-custom-width">
                        <Form.Control
                            placeholder="Search reports..."
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
                                <th>Report ID</th>
                                <th>Month</th>
                                <th>Total Orders</th>
                                <th>Revenue (₹)</th>
                                <th>Avg Order Value</th>
                                <th>Created On</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentReports.length > 0 ? (
                                currentReports.map((report) => (
                                    <tr key={report.id}>
                                        <td>{report.id}</td>
                                        <td>{report.month}</td>
                                        <td>{report.totalOrders}</td>
                                        <td>{report.revenue}</td>
                                        <td>{report.avgOrderValue}</td>
                                        <td>{report.createdOn}</td>
                                        <td>
                                            <FaEye
                                                className="icon-blue me-2"
                                                title="View"
                                                onClick={() => navigate('/dms/sales-report/view', { state: { report } })}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">No reports found.</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

                {/* Pagination */}
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
