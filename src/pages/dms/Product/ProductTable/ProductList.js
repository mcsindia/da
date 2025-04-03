import React, { useState } from 'react';
import { Button, Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaFileExport, FaPlus, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const ProductList = () => {
  const navigate = useNavigate();

  const initialProducts = [
    { id: 'P101', name: 'Antique Necklace', category: 'Jewelry', price: 1200, stock: 50, status: 'Active' },
    { id: 'P102', name: 'Block Print Saree', category: 'Clothing', price: 2500, stock: 30, status: 'Active' },
    { id: 'P103', name: 'Wooden Handicraft Box', category: 'Home Decor', price: 899, stock: 20, status: 'Inactive' }, 
  ];

  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter ? product.status === filter : true;
    return matchesSearch && matchesFilter;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (product) => {
    navigate('/dms/product/edit', { state: { product } });
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <AdminLayout>
      <div className="productlist-container p-3">
        <div className="dms-pages-header sticky-header">
          <h3>Product List</h3>
          <div className="d-flex">
            <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
              <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
              <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
            </DropdownButton>
            <Button onClick={() => navigate('/dms/product/add')}>
              <FaPlus /> Add Product
            </Button>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <DropdownButton variant="primary" title="Filter" id="filter-dropdown">
            <Dropdown.Item onClick={() => setFilter('')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('Active')}>Active</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('Inactive')}>Inactive</Dropdown.Item>
            <Dropdown.Item className='text-custom-danger' onClick={() => setFilter('')}>Cancel</Dropdown.Item>
          </DropdownButton>
          <InputGroup className="dms-custom-width">
            <Form.Control placeholder="Search products..." value={search} onChange={handleSearch} />
          </InputGroup>
        </div>

        <div className="dms-table-container">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price (INR)</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>₹{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.status}</td>
                    <td>
                      <FaEye title="View" className="icon-blue me-2" onClick={() => navigate('/dms/product/view', { state: { product } })} />
                      <FaEdit title="Edit" className="icon-green me-2" onClick={() => handleEdit(product)} />
                      <FaTrash title="Delete" className="icon-red" onClick={() => handleDelete(product.id)} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">No products found.</td>
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
