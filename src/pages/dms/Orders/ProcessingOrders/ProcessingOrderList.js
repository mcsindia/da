import React, { useState } from 'react';
import { Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaFileExport, FaFileExcel, FaFilePdf, FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const ProcessingOrderList = () => {
  const navigate = useNavigate();

  const initialOrders = [
    { id: 'O301', customer: 'Amit Verma', product: 'Handmade Vase', category: 'Home Decor', quantity: 1, amount: 1800, },
    { id: 'O302', customer: 'Neha Gupta', product: 'Silver Anklet', category: 'Jewelry', quantity: 2, amount: 2500, },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const itemsPerPage = 3;

  const handleSearch = (e) => setSearch(e.target.value);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredOrders = orders.filter((order) =>
    (order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase()) ||
      order.category.toLowerCase().includes(search.toLowerCase())) &&
    (selectedCategory ? order.category === selectedCategory : true)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const categories = [...new Set(orders.map(order => order.category))];

  return (
    <AdminLayout>
      <div className="orderlist-container p-3">
        <div className="dms-pages-header sticky-header">
          <h3>Processing Order List</h3>
          <div className="d-flex">
            <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
              <Dropdown.Item><FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
              <Dropdown.Item><FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <DropdownButton title="Filter" id="filter-dropdown" >
            <Dropdown.Item onClick={() => handleCategoryFilter('')}>All</Dropdown.Item>
            {categories.map((category, index) => (
              <Dropdown.Item key={index} onClick={() => handleCategoryFilter(category)}>{category}</Dropdown.Item>
            ))}
            <Dropdown.Item className='text-custom-danger' onClick={() => handleCategoryFilter('')}>Cancel</Dropdown.Item>
          </DropdownButton>
          <InputGroup className="dms-custom-width">
            <Form.Control placeholder="Search orders..." value={search} onChange={handleSearch} />
          </InputGroup>
        </div>

        <div className="dms-table-container">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Product</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Amount (INR)</th>
                <th>Invoice</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.length > 0 ? (
                currentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>{order.category}</td>
                    <td>{order.quantity}</td>
                    <td>₹{order.amount}</td>
                    <td>
                      <FaEye title="View Invoice" className="icon-green me-2" />
                      <FaDownload title="Download Invoice" />
                    </td>
                    <td>
                      <FaEye title="View" className="icon-blue me-2" onClick={() => navigate('/dms/processing-orders/view', { state: { order } })} />
                      <FaEdit title="Edit" className="icon-green me-2" onClick={() => navigate('/dms/processing-orders/edit', { state: { order } })} />
                      <FaTrash title="Delete" className="icon-red" onClick={() => setOrders(orders.filter(o => o.id !== order.id))} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">No orders found.</td>
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
