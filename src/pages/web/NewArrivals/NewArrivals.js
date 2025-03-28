import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import new_prod1 from '../../../assets/images/new-arrival-img.jpeg'
import new_prod2 from '../../../assets/images/new-arrival-img2.jpeg'
import new_prod3 from '../../../assets/images/new-arrival-img3.jpeg'
import new_prod4 from '../../../assets/images/new-arrival-img4.jpeg'

const newProducts = [
  {
    id: 1,
    name: 'Handcrafted Terracotta Pot',
    image: new_prod1,
    price: '₹799',
  },
  {
    id: 2,
    name: 'Desi Jute Sling Bag',
    image: new_prod2,
    price: '₹499',
  },
  {
    id: 3,
    name: 'Ethnic Wooden Wall Clock',
    image: new_prod3,
    price: '₹1,299',
  },
  {
    id: 4,
    name: 'Handwoven Cotton Table Runner',
    image: new_prod4,
    price: '₹699',
  },
];

export const NewArrivals = () => {
  return (
    <div className="new-arrivals-section py-5">
      <Container>
        <h2 className="section-heading "> New Arrivals</h2>
        <p className="section-subheading">
          Explore our latest additions—fresh, authentic, and full of tradition.
        </p>
        <Row>
          {newProducts.map((product) => (
            <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">
              <Card className="arrival-card h-100 text-center">
                <Card.Img variant="top" src={product.image} className="product-img" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="price">{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
