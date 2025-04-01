import React from 'react';
import { Header } from '../../../components/web/Header/Header';
import { Footer } from '../../../components/web/Footer/Footer';
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutImg from '../../../assets/images/about-us.jpg';

export const About = () => {
  return (
    <>
      <Header />
      <div className="about-page py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-section">
              <h2 className="section-heading">About Us</h2>
              <p className="about-us-content">
                Welcome to <strong>E-commerce</strong>, your go-to destination for authentic, handcrafted, and antique products.
                Our mission is to bring India’s rich heritage and craftsmanship to the modern world, empowering artisans and promoting sustainable shopping.
                We take pride in offering a wide range of <strong>handmade, eco-friendly, and unique</strong> items sourced directly from skilled artisans across India.
                Every product tells a story, blending tradition with contemporary elegance.
              </p>
            </Col>
            <Col md={6} className="image-section">
              <Image src={aboutImg} alt="About Us" fluid className="about-image" />
            </Col>
          </Row>

          <Row className="mt-5 values-section">
            <Col md={4} className="value-card animate-card">
              <h4>Our Vision</h4>
              <p>To create a global marketplace that celebrates and preserves India's rich artistic legacy.</p>
              <p>We aim to connect local artisans with customers worldwide, ensuring that their talent receives the recognition it deserves.</p>
            </Col>
            <Col md={4} className="value-card animate-card">
              <h4>Our Mission</h4>
              <p>To support local artisans, ensure fair trade, and provide customers with high-quality, ethical products.</p>
              <p>We believe in sustainable sourcing, minimal environmental impact, and empowering small businesses.</p>
            </Col>
            <Col md={4} className="value-card animate-card">
              <h4>Why Choose Us?</h4>
              <p>Handmade authenticity, sustainable sourcing, and an unwavering commitment to quality.</p>
              <p>With every purchase, you contribute to preserving India’s cultural heritage while enjoying one-of-a-kind, handcrafted treasures.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
