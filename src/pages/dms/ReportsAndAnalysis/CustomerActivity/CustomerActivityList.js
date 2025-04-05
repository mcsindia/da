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

export const CustomerActivityList = () => {
    const navigate = useNavigate();

    const initialData = [
        {
            id: 'U101',
            name: 'Mayank Joshi',
            orders: 5,
            totalSpend: '₹4,450',
            lastLogin: '30-Mar-2025',
            status: 'Active',
        },
        {
            id: 'U102',
            name: 'Ananya Rao',
            orders: 12,
            totalSpend: '₹13,200',
            lastLogin: '01-Apr-2025',
            status: 'Active',
        },
        {
            id: 'U103',
            name: 'Raghav Mehra',
            orders: 3,
            totalSpend: '₹2,340',
            lastLogin: '27-Mar-2025',
            status: 'Inactive',
        },
    ];

    const [users, setUsers] = useState(initialData);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (e) => setSearch(e.target.value);
    const handleStatusFilter = (value) => setStatusFilter(value);

    const handleStatusToggle = (id) => {
        setUsers(prev =>
            prev.map(user =>
                user.id === id
                    ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
                    : user
            )
        );
    };

    const filteredUsers = users.filter((u) => {
        const matchesSearch =
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.id.toLowerCase().includes(search.toLowerCase());

        const matchesStatus = statusFilter ? u.status === statusFilter : true;

        return matchesSearch && matchesStatus;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="customer-activity-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Customer Activity</h3>
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
                    <DropdownButton
                        title="Filter by Status"
                        onSelect={(value) => handleStatusFilter(value)}
                    >
                        <Dropdown.Item eventKey="">All</Dropdown.Item>
                        <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
                        <Dropdown.Item eventKey="Inactive">Inactive</Dropdown.Item>
                    </DropdownButton>
                    <InputGroup className="dms-custom-width">
                        <Form.Control
                            placeholder="Search users..."
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
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Orders Placed</th>
                                <th>Total Spend (₹)</th>
                                <th>Last Login</th>
                                <th>Account Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.length > 0 ? (
                                currentUsers.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.orders}</td>
                                        <td>{user.totalSpend}</td>
                                        <td>{user.lastLogin}</td>
                                        <td>
                                            <Form.Check
                                                type="switch"
                                                id={`status-switch-${user.id}`}
                                                checked={user.status === 'Active'}
                                                onChange={() => handleStatusToggle(user.id)}
                                                label={user.status}
                                            />
                                        </td>
                                        <td>
                                            <FaEye
                                                className="icon-blue me-2"
                                                title="View"
                                                onClick={() =>
                                                    navigate('/dms/customer-activity/view', {
                                                        state: { user },
                                                    })
                                                }
                                                role="button"
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">
                                        No users found.
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
