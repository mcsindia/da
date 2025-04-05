import React, { useState } from 'react';
import {
    Table,
    InputGroup,
    Form,
    Pagination,
    Dropdown,
    DropdownButton,
    Row,
    Col,
} from 'react-bootstrap';
import {
    FaEye,
    FaEdit,
    FaTrash,
    FaFileExport,
    FaFileExcel,
    FaFilePdf,
    FaFilter,
} from 'react-icons/fa';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const ProductPerformanceList = () => {
    const navigate = useNavigate();

    const initialData = [
        {
            id: 'P001',
            name: 'Antique Necklace',
            unitsSold: 75,
            revenue: '₹63,750',
            returnRate: '1.5%',
            rating: 4.6,
            period: 'March 2025',
        },
        {
            id: 'P002',
            name: 'Wooden Tray',
            unitsSold: 52,
            revenue: '₹51,948',
            returnRate: '2.3%',
            rating: 4.5,
            period: 'March 2025',
        },
        {
            id: 'P003',
            name: 'Brass Pooja Thali',
            unitsSold: 66,
            revenue: '₹59,334',
            returnRate: '0.8%',
            rating: 4.7,
            period: 'March 2025',
        },
    ];

    const [products, setProducts] = useState(initialData);
    const [search, setSearch] = useState('');
    const [ratingFilter, setRatingFilter] = useState(null); // ⭐
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (e) => setSearch(e.target.value);
    const handleRatingFilter = (value) => setRatingFilter(value); // ⭐

    const filteredProducts = products.filter((p) => {
        const matchesSearch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.id.toLowerCase().includes(search.toLowerCase());

        const matchesRating = ratingFilter ? p.rating >= ratingFilter : true;

        return matchesSearch && matchesRating;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="product-performance-container p-3">
                <div className="dms-pages-header sticky-header">
                    <h3>Product Performance</h3>
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

                        title="Filter"
                        onSelect={(value) => handleRatingFilter(parseFloat(value))}
                    >
                        <Dropdown.Item eventKey="">All Ratings</Dropdown.Item>
                        <Dropdown.Item eventKey="3.0">3.0 & up</Dropdown.Item>
                        <Dropdown.Item eventKey="4.0">4.0 & up</Dropdown.Item>
                        <Dropdown.Item eventKey="4.5">4.5 & up</Dropdown.Item>
                    </DropdownButton>
                    <InputGroup className="dms-custom-width">
                        <Form.Control
                            placeholder="Search products..."
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
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Units Sold</th>
                                <th>Total Revenue (₹)</th>
                                <th>Return Rate (%)</th>
                                <th>Rating</th>
                                <th>Period</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.length > 0 ? (
                                currentProducts.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.unitsSold}</td>
                                        <td>{product.revenue}</td>
                                        <td>{product.returnRate}</td>
                                        <td>{product.rating}</td>
                                        <td>{product.period}</td>
                                        <td>
                                            <FaEye
                                                className="icon-blue me-2"
                                                title="View"
                                                onClick={() =>
                                                    navigate('/dms/product-performance/view', {
                                                        state: { product },
                                                    })
                                                }
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">
                                        No products found.
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
