import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import hero_img from '../../../assets/images/eco-hero1.png'

export const Hero = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="hero-title">Celebrate Indian Heritage</h1>
            <p className="hero-subtitle">
              Discover handpicked antique & desi treasures made with love by Indian artisans. Support local, shop proudly.
            </p>
            <Button className="me-3 active-hero-btn">Shop Now</Button>
            <Button className="notactive-hero-btn" >Explore Categories</Button>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src={hero_img}
              alt="Make in India Hero"
              className="hero-img img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
