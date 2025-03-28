import React, { useState } from 'react';
import { Table, DropdownButton, Dropdown, Button, InputGroup, Form, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { FaFileExport, FaFileExcel, FaFilePdf, FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

export const CityList = () => {
    const navigate = useNavigate();

    // Initial City Data
    const initialCities = [
        { id: 1, name: 'New York', state_id: 1, country_id: 1, is_active: true },
        { id: 2, name: 'Los Angeles', state_id: 2, country_id: 1, is_active: false },
        { id: 3, name: 'Mumbai', state_id: 3, country_id: 2, is_active: true },
        { id: 4, name: 'Paris', state_id: 4, country_id: 3, is_active: true },
    ];

    const [cities, setCities] = useState(initialCities);
    const [search, setSearch] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Search Functionality
    const handleSearch = (e) => setSearch(e.target.value);

    // Filtered Cities
    const filteredCities = cities.filter((city) => {
        const matchesSearch =
            city.name.toLowerCase().includes(search.toLowerCase()) ||
            city.state_id.toString().includes(search) ||
            city.country_id.toString().includes(search);
        const matchesFilter =
            filterStatus === '' || (filterStatus === 'Active' && city.is_active) || (filterStatus === 'Inactive' && !city.is_active);
        return matchesSearch && matchesFilter;
    });

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCities = filteredCities.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCities.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    // Edit Action
    const handleEdit = (city) => {
        navigate('/master/city/edit', { state: { city } });
    };

    // Delete Action
    const handleDelete = (id) => {
        const updatedCities = cities.filter((city) => city.id !== id);
        setCities(updatedCities);
    };

    return (
        <AdminLayout>
            <div className="city-list-container p-3">
                {/* Header Options */}
                <div className="dms-pages-header sticky-header">
                    <h3>City List</h3>
                    <div className="d-flex">
                        <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                            <Dropdown.Item> <FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
                            <Dropdown.Item> <FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                            <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
                            <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
                        </DropdownButton>
                        <Button variant="primary" onClick={() => navigate('/master/city/add')}>
                            <FaPlus /> Add City
                        </Button>
                    </div>
                </div>

                {/* Search and Filter */}
                <div className="d-flex justify-content-between mb-3">
                    <DropdownButton
                        variant="primary"
                        title={`Filter: ${filterStatus || ''}`}
                        id="filter-dropdown"
                    >
                        <Dropdown.Item onClick={() => setFilterStatus('')}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilterStatus('Active')}>Active</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilterStatus('Inactive')}>Inactive</Dropdown.Item>
                        <Dropdown.Item className="text-custom-danger" onClick={() => setFilterStatus('')}>Cancel</Dropdown.Item>
                    </DropdownButton>

                    <InputGroup className="dms-custom-width">
                        <Form.Control
                            placeholder="Search cities..."
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
                                <th>S.No</th>
                                <th>City Name</th>
                                <th>State ID</th>
                                <th>Country ID</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCities.length > 0 ? (
                                currentCities.map((city, index) => (
                                    <tr key={city.id}>
                                        <td>{indexOfFirstItem + index + 1}</td>
                                        <td>{city.name}</td>
                                        <td>{city.state_id}</td>
                                        <td>{city.country_id}</td>
                                        <td>{city.is_active ? 'Active' : 'Inactive'}</td>
                                        <td>
                                            <FaEye
                                                title="View"
                                                className="icon-blue me-2"
                                            />
                                            <FaEdit
                                                title="Edit"
                                                className="icon-green me-2"
                                                onClick={() => handleEdit(city)}
                                            />
                                            <FaTrash
                                                title="Delete"
                                                className="icon-red"
                                                onClick={() => handleDelete(city.id)}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No cities found.</td>
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
