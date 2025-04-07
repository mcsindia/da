import React from 'react';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'

export const CategoryView = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Dummy fallback category in case location.state is not passed
  const category = location.state?.category || {
    id: 'CAT001',
    name: 'Electronics',
    slug: 'electronics',
    description: 'All types of electronic gadgets and devices.',
    status: 'Active',
    parent: 'Products > Main',
    createdAt: '2025-04-01',
    updatedAt: '2025-04-05',
    createdBy: 'Admin',
    updatedBy: 'Editor',
    metaTitle: 'Buy Electronics Online',
    metaDescription: 'Shop latest electronics online with best prices.',
    sortOrder: 1,
    isFeatured: true,
    productCount: 56,
  };


  return (
    <AdminLayout>
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Category Details</h3>
            <Button className="me-2 back-button" onClick={() => navigate(-1)}> <FaArrowLeft/> Back</Button>     
        </div>

        <Card className="shadow-sm">
          <Card.Body>
            <Row>
              <Col md={6}>
                <p><strong>ID:</strong> {category.id}</p>
                <p><strong>Name:</strong> {category.name}</p>
                <p><strong>Slug:</strong> {category.slug}</p>
                <p>
                  <strong>Status:</strong>{' '}
                  <Badge bg={category.status === 'Active' ? 'success' : 'secondary'}>
                    {category.status}
                  </Badge>
                </p>
                <p><strong>Display Order:</strong> {category.sortOrder}</p>
                <p><strong>Is Featured:</strong> {category.isFeatured ? 'Yes' : 'No'}</p>
                <p><strong>Product Count:</strong> {category.productCount}</p>
              </Col>

              <Col md={6}>
                <p><strong>Created At:</strong> {category.createdAt}</p>
                <p><strong>Updated At:</strong> {category.updatedAt}</p>
                <p><strong>Created By:</strong> {category.createdBy}</p>
                <p><strong>Updated By:</strong> {category.updatedBy}</p>

                <hr />
                <h6 className="mt-3">SEO Metadata</h6>
                <p><strong>Meta Title:</strong> {category.metaTitle}</p>
                <p><strong>Meta Description:</strong> {category.metaDescription}</p>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col md={12}>
                <p><strong>Description:</strong></p>
                <p>{category.description}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </AdminLayout>
  );
};
