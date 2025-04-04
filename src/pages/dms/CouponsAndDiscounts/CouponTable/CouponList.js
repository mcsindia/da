import React, { useState } from 'react';
import { Table, InputGroup, Form, Pagination, Dropdown, DropdownButton, FormCheck, Button } from 'react-bootstrap';
import { FaTrash, FaEye, FaEdit, FaFileExport, FaFileExcel, FaFilePdf, FaPlus } from 'react-icons/fa';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const CouponList = () => {
    const initialCoupons = [
        { id: 'CP001', code: 'DESI10', type: 'Percent', value: '10%', minOrder: '₹500', maxDiscount: '₹200', validFrom: '01-Apr-2025', validTo: '15-Apr-2025', status: 'Active' },
        { id: 'CP002', code: 'FESTIVE100', type: 'Flat', value: '₹100', minOrder: '₹999', maxDiscount: 'N/A', validFrom: '01-Apr-2025', validTo: '10-Apr-2025', status: 'Active' },
        { id: 'CP003', code: 'SUMMER20', type: 'Percent', value: '20%', minOrder: '₹1000', maxDiscount: '₹300', validFrom: '01-May-2025', validTo: '31-May-2025', status: 'Inactive' },
        { id: 'CP004', code: 'WELCOME50', type: 'Flat', value: '₹50', minOrder: '₹499', maxDiscount: 'N/A', validFrom: '01-Jan-2025', validTo: '01-Jan-2026', status: 'Active' },
    ];

    const navigate = useNavigate();
    const [coupons, setCoupons] = useState(initialCoupons);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState(''); // NEW
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (e) => setSearch(e.target.value);

    const toggleStatus = (id) => {
        const updatedCoupons = coupons.map(coupon => {
            if (coupon.id === id) {
                return {
                    ...coupon,
                    status: coupon.status === 'Active' ? 'Inactive' : 'Active',
                };
            }
            return coupon;
        });
        setCoupons(updatedCoupons);
    };

    const filteredCoupons = coupons.filter((coupon) =>
        (coupon.code.toLowerCase().includes(search.toLowerCase()) ||
            coupon.type.toLowerCase().includes(search.toLowerCase())) &&
        (statusFilter ? coupon.status === statusFilter : true)
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCoupons = filteredCoupons.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCoupons.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="couponlist-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Coupon List</h3>
                    <div className="d-flex">
                        <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
                        </DropdownButton>
                        <Button onClick={() => navigate('/dms/manage-coupons/add')}>
                            <FaPlus /> Add Coupon
                        </Button>
                    </div>
                </div>

                {/* Filter + Search */}
                <div className="d-flex justify-content-between mb-3">
                    <DropdownButton variant="primary" title="Filter" id="filter-dropdown">
                        <Dropdown.Item onClick={() => setStatusFilter('')}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => setStatusFilter('Active')}>Active</Dropdown.Item>
                        <Dropdown.Item onClick={() => setStatusFilter('Inactive')}>Inactive</Dropdown.Item>
                        <Dropdown.Item className="text-danger" onClick={() => setStatusFilter('')}>Clear Filter</Dropdown.Item>
                    </DropdownButton>

                    <InputGroup className="dms-custom-width">
                        <Form.Control placeholder="Search coupons..." value={search} onChange={handleSearch} />
                    </InputGroup>
                </div>

                {/* Table */}
                <div className="dms-table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Coupon ID</th>
                                <th>Code</th>
                                <th>Type</th>
                                <th>Value</th>
                                <th>Min Order ₹</th>
                                <th>Max Discount ₹</th>
                                <th>Valid From</th>
                                <th>Valid To</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCoupons.length > 0 ? (
                                currentCoupons.map((coupon) => (
                                    <tr key={coupon.id}>
                                        <td>{coupon.id}</td>
                                        <td>{coupon.code}</td>
                                        <td>{coupon.type}</td>
                                        <td>{coupon.value}</td>
                                        <td>{coupon.minOrder}</td>
                                        <td>{coupon.maxDiscount}</td>
                                        <td>{coupon.validFrom}</td>
                                        <td>{coupon.validTo}</td>
                                        <td>
                                            <FormCheck
                                                type="switch"
                                                id={`status-switch-${coupon.id}`}
                                                label={coupon.status}
                                                checked={coupon.status === 'Active'}
                                                onChange={() => toggleStatus(coupon.id)}
                                            />
                                        </td>
                                        <td>
                                            <FaEye title="View" className="icon-blue me-2" onClick={() => navigate("/dms/manage-coupons/view", { state: { coupon } })} />
                                            <FaEdit
                                                title="Edit"
                                                className="icon-green me-2"
                                                onClick={() => navigate("/dms/manage-coupons/edit", { state: { coupon } })}
                                            />
                                            <FaTrash title="Delete" className="icon-red" onClick={() => setCoupons(coupons.filter(c => c.id !== coupon.id))} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="text-center">No coupons found.</td>
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
