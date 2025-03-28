import React, { useState } from 'react';
import { Table, DropdownButton, Dropdown, Button, InputGroup, Form, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { FaFileExport, FaPlus, FaEdit, FaTrash, FaFileExcel, FaFilePdf, FaEye } from 'react-icons/fa';

export const StateList = () => {
  const navigate = useNavigate();

  // Initial State Data
  const initialStates = [
    { id: 1, name: 'Texas', country_id: 1, status: 'Active' },
    { id: 2, name: 'Delhi', country_id: 2, status: 'Active' },
    { id: 3, name: 'Bavaria', country_id: 3, status: 'Inactive' },
    { id: 4, name: 'Provence', country_id: 4, status: 'Active' },
  ];

  const [states, setStates] = useState(initialStates);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Search Functionality
  const handleSearch = (e) => setSearch(e.target.value);

  // Filter Functionality
  const handleStatusFilter = (status) => setStatusFilter(status);

  // Filtered and Paginated States
  const filteredStates = states.filter((state) =>
    (state.name.toLowerCase().includes(search.toLowerCase()) ||
      String(state.country_id).includes(search)) &&
    (statusFilter ? state.status === statusFilter : true)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStates = filteredStates.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredStates.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Edit Action
  const handleEdit = (state) => {
    navigate('/master/state/edit', { state: { state } });
  };

  // Delete Action
  const handleDelete = (id) => {
    const updatedStates = states.filter((state) => state.id !== id);
    setStates(updatedStates);
  };

  return (
    <AdminLayout>
      <div className="state-list-container p-3">
        {/* Header Options */}
        <div className="dms-pages-header sticky-header">
          <h3>State List</h3>
          <div className="d-flex">
            <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
            </DropdownButton>
            <Button variant="primary" onClick={() => navigate('/master/state/add')}>
              <FaPlus /> Add State
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="d-flex justify-content-between mb-3">

          <DropdownButton
            title={`Filter: ${statusFilter || ''}`}
            onSelect={handleStatusFilter}
          >
            <Dropdown.Item eventKey="">All</Dropdown.Item>
            <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
            <Dropdown.Item eventKey="Inactive">Inactive</Dropdown.Item>
            <Dropdown.Item className="text-custom-danger" onClick={() => setStatusFilter('')}>Cancel</Dropdown.Item>

          </DropdownButton>

          <InputGroup className="dms-custom-width">
            <Form.Control
              placeholder="Search states..."
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
                <th>ID</th>
                <th>State Name</th>
                <th>Country ID</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentStates.length > 0 ? (
                currentStates.map((state, index) => (
                  <tr key={state.id}>
                    <td>{state.id}</td>
                    <td>{state.name}</td>
                    <td>{state.country_id}</td>
                    <td>{state.status}</td>
                    <td>
                      <FaEye
                        title="View"
                        className="icon-blue me-2"
                      />
                      <FaEdit
                        title="Edit"
                        className="icon-green me-2"
                        onClick={() => handleEdit(state)}
                      />
                      <FaTrash
                        title="Delete"
                        className="icon-red"
                        onClick={() => handleDelete(state.id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No states found.</td>
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
