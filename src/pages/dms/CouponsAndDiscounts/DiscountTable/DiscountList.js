import React, { useState } from 'react';
import { Table, InputGroup, Form, Pagination, Dropdown, DropdownButton, FormCheck, Button } from 'react-bootstrap';
import { FaTrash, FaEye, FaEdit, FaFileExport, FaFileExcel, FaFilePdf, FaPlus } from 'react-icons/fa';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const DiscountList = () => {
    const navigate = useNavigate();

    const initialDiscounts = [
        { id: 'D001', productName: 'Antique Necklace', productId: '2', type: 'Percentage', value: '15%', startDate: '01-Apr-2025', endDate: '10-Apr-2025', status: 'Active' },
        { id: 'D002', productName: 'Block Print Cushion Cover', productId: '8', type: 'Flat', value: '₹100', startDate: '02-Apr-2025', endDate: '12-Apr-2025', status: 'Active' },
        { id: 'D003', productName: 'Brass Diya with Handle', productId: '18', type: 'Percentage', value: '10%', startDate: '03-Apr-2025', endDate: '30-Apr-2025', status: 'Active' },
        { id: 'D004', productName: 'Wooden Tray', productId: '6', type: 'Flat', value: '₹75', startDate: '01-Apr-2025', endDate: '05-Apr-2025', status: 'Inactive' },
    ];

    const [discounts, setDiscounts] = useState(initialDiscounts);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (e) => setSearch(e.target.value);

    const toggleStatus = (id) => {
        const updated = discounts.map(d => d.id === id ? { ...d, status: d.status === 'Active' ? 'Inactive' : 'Active' } : d);
        setDiscounts(updated);
    };

    const filteredDiscounts = discounts.filter((d) =>
        (d.productName.toLowerCase().includes(search.toLowerCase()) ||
            d.type.toLowerCase().includes(search.toLowerCase())) &&
        (statusFilter ? d.status === statusFilter : true)
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDiscounts = filteredDiscounts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredDiscounts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="discountlist-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Discount List</h3>
                    <div className="d-flex">
                        <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
                        </DropdownButton>
                        <Button onClick={() => navigate('/dms/discounts/add')}>
                            <FaPlus /> Add Discount
                        </Button>
                    </div>
                </div>

                {/* Filter + Search */}
                <div className="d-flex justify-content-between mb-3">
                    <DropdownButton variant="primary" title="Filter">
                        <Dropdown.Item onClick={() => setStatusFilter('')}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => setStatusFilter('Active')}>Active</Dropdown.Item>
                        <Dropdown.Item onClick={() => setStatusFilter('Inactive')}>Inactive</Dropdown.Item>
                        <Dropdown.Item className="text-danger" onClick={() => setStatusFilter('')}>Clear Filter</Dropdown.Item>
                    </DropdownButton>

                    <InputGroup className="dms-custom-width">
                        <Form.Control placeholder="Search discounts..." value={search} onChange={handleSearch} />
                    </InputGroup>
                </div>

                {/* Table */}
                <div className="dms-table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Discount ID</th>
                                <th>Product Name</th>
                                <th>Product ID</th>
                                <th>Discount Type</th>
                                <th>Value</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentDiscounts.length > 0 ? (
                                currentDiscounts.map((discount) => (
                                    <tr key={discount.id}>
                                        <td>{discount.id}</td>
                                        <td>{discount.productName}</td>
                                        <td>{discount.productId}</td>
                                        <td>{discount.type}</td>
                                        <td>{discount.value}</td>
                                        <td>{discount.startDate}</td>
                                        <td>{discount.endDate}</td>
                                        <td>
                                            <FormCheck
                                                type="switch"
                                                id={`status-switch-${discount.id}`}
                                                label={discount.status}
                                                checked={discount.status === 'Active'}
                                                onChange={() => toggleStatus(discount.id)}
                                            />
                                        </td>
                                        <td>
                                            <FaEye className="icon-blue me-2" title="View" onClick={() => navigate('/dms/discounts/view', { state: { discount } })} />
                                            <FaEdit className="icon-green me-2" title="Edit" onClick={() => navigate('/dms/discounts/edit', { state: { discount } })} />
                                            <FaTrash className="icon-red" title="Delete" onClick={() => setDiscounts(discounts.filter(d => d.id !== discount.id))} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className="text-center">No discounts found.</td>
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
