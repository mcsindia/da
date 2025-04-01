import React from 'react';
import { Header } from '../../../components/web/Header/Header';
import { Footer } from '../../../components/web/Footer/Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-page py-5">
        <Container>
          {/* Contact Heading */}
          <Row className="text-center mb-4">
            <Col>
              <h2 className="section-heading">Contact Us</h2>
              <p className="contact-description">
                We'd love to hear from you! Reach out with any questions, feedback, or inquiries.
              </p>
            </Col>
          </Row>

          {/* Contact Form & Help Center */}
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="contact-form">
              <h4>Send Us a Query</h4>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="helpCenter">
                  <Form.Label>Help Center</Form.Label>
                  <Form.Select>
                    <option value="">Select a topic</option>
                    <option value="order">Order Issues</option>
                    <option value="payment">Payment & Billing</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="product">Product Inquiry</option>
                    <option value="account">Account & Login</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Write your message" required />
                </Form.Group>

                <Button className='details-button' type="submit">Send Message</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
