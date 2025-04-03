import React, { useState } from 'react';
import { Button, Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaFileExport, FaPlus, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const InventoryList = () => {
    const navigate = useNavigate();

    const initialInventory = [
        { id: 'P101', name: 'Antique Necklace', stock: 50, restockDate: '10-Apr-2025', supplier: 'Royal Handicrafts' },
        { id: 'P102', name: 'Block Print Saree', stock: 30, restockDate: '12-Apr-2025', supplier: 'Desi Weavers' },
    ];

    const [inventory, setInventory] = useState(initialInventory);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const handleSearch = (e) => setSearch(e.target.value);

    const filteredInventory = inventory.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.supplier.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter ? item.supplier === filter || (filter === 'In Stock' && item.stock > 0) : true;
        return matchesSearch && matchesFilter;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentInventory = filteredInventory.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
    const handleEdit = (item) => navigate('/dms/inventory/edit', { state: { item } });
    const handleDelete = (id) => setInventory(inventory.filter((item) => item.id !== id));

    return (
        <AdminLayout>
            <div className="inventorylist-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Inventory List</h3>
                    <div className="d-flex">
                        <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                            <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
                            <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                            <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
                            <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
                        </DropdownButton>
                        <Button onClick={() => navigate('/dms/inventory/add')}>
                            <FaPlus /> Add Inventory
                        </Button>
                    </div>
                </div>

                <div className="d-flex justify-content-between mb-3">
                    <DropdownButton variant="primary" title="Filter" id="filter-dropdown">
                        <Dropdown.Item onClick={() => setFilter('')}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('Royal Handicrafts')}>Royal Handicrafts</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('Desi Weavers')}>Desi Weavers</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilter('In Stock')}>In Stock</Dropdown.Item>
                        <Dropdown.Item className='text-custom-danger' onClick={() => setFilter('')}>Cancel</Dropdown.Item>
                    </DropdownButton>
                    <InputGroup className="dms-custom-width">
                        <Form.Control placeholder="Search inventory..." value={search} onChange={handleSearch} />
                    </InputGroup>
                </div>

                <div className="dms-table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Name</th>
                                <th>Stock</th>
                                <th>Restock Date</th>
                                <th>Supplier</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentInventory.length > 0 ? (
                                currentInventory.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.restockDate}</td>
                                        <td>{item.supplier}</td>
                                        <td>
                                            <FaEye title="View" className="icon-blue me-2" onClick={() => navigate('/dms/inventory/view', { state: { item } })} />
                                            <FaEdit title="Edit" className="icon-green me-2" onClick={() => handleEdit(item)} />
                                            <FaTrash title="Delete" className="icon-red" onClick={() => handleDelete(item.id)} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No inventory found.</td>
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