import React, { useState } from 'react';
import { Button, Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaFileExport, FaFileExcel, FaFilePdf, FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const PressReleases = () => {
  // Initial Press Release Data
  const initialPressReleases = [
    { id: 1, title: 'AI Advances in 2025', content: 'The future of artificial intelligence...', publish_date: '2025-02-10', author: 'John Doe', status: 'Published' },
    { id: 2, title: 'Marketing Trends', content: 'What to expect in 2025 marketing...', publish_date: '2025-02-15', author: 'Jane Smith', status: 'Draft' },
  ];

  const navigate = useNavigate();
  const [pressReleases, setPressReleases] = useState(initialPressReleases);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Search Functionality
  const handleSearch = (e) => setSearch(e.target.value);

  // Filter Press Releases
  const filteredPressReleases = pressReleases.filter((pressRelease) => {
    const matchesSearch =
      pressRelease.title.toLowerCase().includes(search.toLowerCase()) ||
      pressRelease.content.toLowerCase().includes(search.toLowerCase()) ||
      pressRelease.author.toLowerCase().includes(search.toLowerCase()) ||
      pressRelease.status.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter ? pressRelease.status === filter : true;
    return matchesSearch && matchesFilter;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPressReleases = filteredPressReleases.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPressReleases.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // View, Edit, Delete Actions
  const handleView = (pressReleaseId) => {
    navigate(`/media/press-releases/view/${pressReleaseId}`); // Adjust the path as per your routing setup
  };

  const handleEdit = (pressReleaseId) => {
    navigate(`/media/press-releases/edit`, { state: { pressReleaseId } }); // Passing the press release ID
  };

  const handleDelete = (pressReleaseId) => {
    const updatedPressReleases = pressReleases.filter((pressRelease) => pressRelease.id !== pressReleaseId);
    setPressReleases(updatedPressReleases);
  };

  return (
    <AdminLayout>
      <div className="pressrelease-list-container p-3">
        {/* Header Options */}
        <div className="dms-pages-header sticky-header">
          <h3>Press Releases List</h3>
          <div className="d-flex">
            <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
              <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
              <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
              <Dropdown.Item><FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
              <Dropdown.Item><FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
            </DropdownButton>
            <Button variant="primary" onClick={() => navigate('/media/press-releases/add')}>
              <FaPlus /> Add Press Release
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="d-flex justify-content-between mb-3">
          <DropdownButton variant="primary" title={`Filter: ${filter || 'All'}`} id="filter-dropdown">
            <Dropdown.Item onClick={() => setFilter('')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('Published')}>Published</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('Draft')}>Draft</Dropdown.Item>
            <Dropdown.Item className='text-danger' onClick={() => setFilter('')}>Cancel</Dropdown.Item>
          </DropdownButton>

          <InputGroup className="dms-custom-width">
            <Form.Control
              placeholder="Search press releases..."
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
                <th>Title</th>
                <th>Content</th>
                <th>Publish Date</th>
                <th>Author</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPressReleases.length > 0 ? (
                currentPressReleases.map((pressRelease, index) => (
                  <tr key={pressRelease.id}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>{pressRelease.title}</td>
                    <td>{pressRelease.content}</td>
                    <td>{pressRelease.publish_date}</td>
                    <td>{pressRelease.author}</td>
                    <td>{pressRelease.status}</td>
                    <td>
                      <FaEye
                        title="View"
                        className="icon-blue me-2"
                        onClick={() => handleView(pressRelease.id)}
                      />
                      <FaEdit
                        title="Edit"
                        className="icon-green me-2"
                        onClick={() => handleEdit(pressRelease.id)}
                      />
                      <FaTrash
                        title="Delete"
                        className="icon-red"
                        onClick={() => handleDelete(pressRelease.id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">No press releases found.</td>
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
