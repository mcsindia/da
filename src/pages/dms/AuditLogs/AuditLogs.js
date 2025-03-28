import React, { useState } from 'react';
import { Button, Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaFileExport, FaFileExcel, FaFilePdf, FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { AdminLayout } from '../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const AuditLogs = () => {
  // Initial Audit Logs Data
  const initialLogs = [
    { id: 1, action_type: 'Create', module: 'User', performed_by: 'Admin', date_time: '2025-01-10 10:00:00', details: 'Created user 2' },
    { id: 2, action_type: 'Update', module: 'News', performed_by: 'Editor', date_time: '2025-01-10 11:00:00', details: 'Edited news 1' },
    { id: 3, action_type: 'Delete', module: 'User', performed_by: 'Admin', date_time: '2025-01-09 15:30:00', details: 'Deleted user 3' },
  ];

  const navigate = useNavigate();
  const [logs, setLogs] = useState(initialLogs);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Search Functionality
  const handleSearch = (e) => setSearch(e.target.value);

  // Filter Logs
  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.action_type.toLowerCase().includes(search.toLowerCase()) ||
      log.module.toLowerCase().includes(search.toLowerCase()) ||
      log.performed_by.toLowerCase().includes(search.toLowerCase()) ||
      log.details.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter ? log.action_type === filter : true;
    return matchesSearch && matchesFilter;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // View, Edit, Delete Actions
  const handleView = (logId) => {
    navigate(`/audit-logs/view/${logId}`); // Adjust the path as per your routing setup
  };

  const handleEdit = (logId) => {
    navigate(`/audit-logs/edit/${logId}`); // Adjust the path as per your routing setup
  };

  const handleDelete = (logId) => {
    const updatedLogs = logs.filter((log) => log.id !== logId);
    setLogs(updatedLogs);
  };

  return (
    <AdminLayout>
      <div className="auditlogs-container p-3">
        {/* Header Options */}
        <div className="dms-pages-header sticky-header">
          <h3>Audit Logs</h3>
          <div className="d-flex">
            <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
              <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
              <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
            </DropdownButton>
            <Button variant="primary" onClick={() => navigate('/audit-logs/add')}>
              <FaPlus /> Add Audit Log
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="d-flex justify-content-between mb-3">
          <DropdownButton variant="primary" title={`Filter: ${filter || 'All'}`} id="filter-dropdown">
            <Dropdown.Item onClick={() => setFilter('')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('Create')}>Create</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('Update')}>Update</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('Delete')}>Delete</Dropdown.Item>
            <Dropdown.Item className='text-custom-danger' onClick={() => setFilter('')}>Cancel</Dropdown.Item>
          </DropdownButton>

          <InputGroup className="dms-custom-width">
            <Form.Control
              placeholder="Search logs..."
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
                <th>S.no</th>
                <th>Action Type</th>
                <th>Module</th>
                <th>Performed By</th>
                <th>Date/Time</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentLogs.length > 0 ? (
                currentLogs.map((log, index) => (
                  <tr key={log.id}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>{log.action_type}</td>
                    <td>{log.module}</td>
                    <td>{log.performed_by}</td>
                    <td>{log.date_time}</td>
                    <td>{log.details}</td>
                    <td>
                      <FaEye
                        title="View"
                        className="icon-blue me-2"
                        onClick={() => handleView(log.id)}
                      />
                      <FaEdit
                        title="Edit"
                        className="icon-green me-2"
                        onClick={() => handleEdit(log.id)}
                      />
                      <FaTrash
                        title="Delete"
                        className="icon-red"
                        onClick={() => handleDelete(log.id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">No logs found.</td>
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
