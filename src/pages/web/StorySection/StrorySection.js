import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import story_img from '../../../assets/images/story-img.jpg' 
export const StorySection = () => {
  return (
    <div className="story-why-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Artisan Image */}
          <Col md={6} className="text-center">
            <img
              src={story_img}
              alt="Indian Artisan"
              className="artisan-img img-fluid rounded"
            />
          </Col>

          {/* Right Side - Text Content */}
          <Col md={6}>
            <h2 className="section-title">Meet the Artisans Behind the Craft</h2>
            <p className="section-description">
              Every product has a story. Our mission is to empower local artisans across India by giving their unique creations a platform to shine.
              From rural villages to urban hubs, we celebrate India’s craftsmanship.
            </p>

            <h4 className="why-title">Why Shop with Us?</h4>
            <ul className="why-list">
              <li>🇮🇳 100% Indian Made</li>
              <li>🧵 Handcrafted with Love</li>
              <li>🔒 Secure Payments</li>
              <li>⚡ Fast Shipping</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
