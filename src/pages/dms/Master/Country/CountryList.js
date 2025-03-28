import React, { useState } from 'react';
import { Table, DropdownButton, Dropdown, Button, InputGroup, Form, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { FaFileExport, FaFileExcel, FaFilePdf, FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

export const CountryList = () => {
    const navigate = useNavigate();

    // Initial Country Data
    const initialCountries = [
        { id: 1, name: 'United States', code: 'US', is_active: true },
        { id: 2, name: 'India', code: 'IN', is_active: false },
        { id: 3, name: 'Germany', code: 'DE', is_active: true },
        { id: 4, name: 'France', code: 'FR', is_active: true },
    ];

    const [countries, setCountries] = useState(initialCountries);
    const [search, setSearch] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Search Functionality
    const handleSearch = (e) => setSearch(e.target.value);

    // Filtered Countries
    const filteredCountries = countries.filter((country) => {
        const matchesSearch =
            country.name.toLowerCase().includes(search.toLowerCase()) ||
            country.code.toLowerCase().includes(search.toLowerCase());
        const matchesFilter =
            filterStatus === '' || (filterStatus === 'Active' && country.is_active) || (filterStatus === 'Inactive' && !country.is_active);
        return matchesSearch && matchesFilter;
    });

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCountries = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    // Edit Action
    const handleEdit = (country) => {
        navigate('/master/country/edit', { state: { country } });
    };

    // Delete Action
    const handleDelete = (id) => {
        const updatedCountries = countries.filter((country) => country.id !== id);
        setCountries(updatedCountries);
    };

    return (
        <AdminLayout>
            <div className="country-list-container p-3">
                {/* Header Options */}
                <div className="dms-pages-header sticky-header">
                    <h3>Country List</h3>
                    <div className="d-flex">
                        <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                            <Dropdown.Item> <FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
                            <Dropdown.Item> <FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                            <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
                            <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
                        </DropdownButton>
                        <Button variant="primary" onClick={() => navigate('/master/country/add')}>
                            <FaPlus /> Add Country
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
                            placeholder="Search countries..."
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
                                <th>Country Name</th>
                                <th>Country Code</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCountries.length > 0 ? (
                                currentCountries.map((country, index) => (
                                    <tr key={country.id}>
                                        <td>{indexOfFirstItem + index + 1}</td>
                                        <td>{country.name}</td>
                                        <td>{country.code}</td>
                                        <td>{country.is_active ? 'Active' : 'Inactive'}</td>
                                        <td>
                                            <FaEye
                                                title="View"
                                                className="icon-blue me-2"
                                            />
                                            <FaEdit
                                                title="Edit"
                                                className="icon-green me-2"
                                                onClick={() => handleEdit(country)}
                                            />
                                            <FaTrash
                                                title="Delete"
                                                className="icon-red"
                                                onClick={() => handleDelete(country.id)}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">No countries found.</td>
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
