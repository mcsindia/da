import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="ecom-footer mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>🛍️ E-commerce</h5>
            <p>Promoting handcrafted and antique desi products across India with love and authenticity.</p>
          </Col>
          <Col md={2}>
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/web">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="/category/jewelry">Jewelry</a></li>
              <li><a href="/category/Home Decor">Home Decor</a></li>
              <li><a href="/category/Pooja Essentials">Pooja Essentials</a></li>
              <li><a href="/category/Art & Collectibles">Art & Collectibles</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Contact</h6>
            <p>Email: support@desitreasure.in</p>
            <p>Phone: +91 98765 43210</p>
            <p>Made with ❤️ in India</p>
          </Col>
        </Row>
        <hr className="footer-line" />
        <Row className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} E-commerce. All rights reserved.</p>
        </Row>
      </Container>
    </footer>
  );
};
