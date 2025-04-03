import React, { useState } from 'react';
import { Button, Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaFileExport, FaPlus, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const CategoryList = () => {
    const navigate = useNavigate();

    const initialCategories = [
        { id: 'C101', name: 'Jewelry', description: 'Ethnic necklaces & earrings' },
        { id: 'C102', name: 'Clothing', description: 'Handloom sarees, kurtas, etc.' },
        { id: 'C103', name: 'Home Decor', description: 'Antique clocks, showpieces' },
    ];

    const [categories, setCategories] = useState(initialCategories);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const handleSearch = (e) => setSearch(e.target.value);

    const filteredCategories = categories.filter((category) => {
        const matchesSearch = category.name.toLowerCase().includes(search.toLowerCase()) ||
            category.description.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter ? category.name === filter : true;
        return matchesSearch && matchesFilter;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCategories = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="categorylist-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Category List</h3>
                    <div className="d-flex">
                        <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                            <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
                            <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
                        </DropdownButton>
                        <Button  onClick={() => navigate('/dms/manage-category/add')}>
                            <FaPlus /> Add Category
                        </Button>
                    </div>
                </div>

                <div className="d-flex justify-content-between mb-3">
                    <DropdownButton variant="primary" title="Filter" id="filter-dropdown">
                        <Dropdown.Item onClick={() => setFilter('')}>All</Dropdown.Item>
                        {initialCategories.map((category) => (
                            <Dropdown.Item key={category.id} onClick={() => setFilter(category.name)}>
                                {category.name}
                            </Dropdown.Item>
                        ))}
                        <Dropdown.Item className='text-custom-danger' onClick={() => setFilter('')}>Cancel</Dropdown.Item>
                    </DropdownButton>
                    <InputGroup className="dms-custom-width">
                        <Form.Control placeholder="Search categories..." value={search} onChange={handleSearch} />
                    </InputGroup>
                </div>

                <div className="dms-table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Category ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCategories.length > 0 ? (
                                currentCategories.map((category) => (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>{category.description}</td>
                                        <td>
                                            <FaEye title="View" className="icon-blue me-2" onClick={() => navigate('/dms/manage-category/view', { state: { category } })} />
                                            <FaEdit title="Edit" className="icon-green me-2" onClick={() => navigate('/dms/manage-category/edit', { state: { category } })} />
                                            <FaTrash title="Delete" className="icon-red" onClick={() => setCategories(categories.filter(c => c.id !== category.id))} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No categories found.</td>
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
