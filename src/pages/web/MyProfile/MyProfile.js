import React, { useState } from 'react';
import { Container, Form, Button, Accordion, Row, Col } from 'react-bootstrap';
import { Header } from '../../../components/web/Header/Header';
import { Footer } from '../../../components/web/Footer/Footer';

export const MyProfile = () => {
  const [editFields, setEditFields] = useState({
    fullName: false,
    gender: false,
    email: false,
    phone: false,
  });

  const toggleEditField = (field) => {
    setEditFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <>
      <Header />
      <Container className="profile-container">
        <Form>
          <h3 className="mb-3">Personal Information</h3>
          <Row className="mb-3">
            <Col md={12}>
            <div className="profile-form">
              <Form.Label className='profile-form-label'>Full Name*</Form.Label>
              <Button variant="link" onClick={() => toggleEditField('fullName')}>
                  {editFields.fullName ? "Save" : "Edit"}
                </Button>
              </div>
                <Form.Control type="text" placeholder="Enter Full Name" disabled={!editFields.fullName} className="profile-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={12}>
              <div className="profile-form">
              <Form.Label className='profile-form-label'>Gender</Form.Label>
                <Button variant="link" onClick={() => toggleEditField('gender')}>
                  {editFields.gender ? "Save" : "Edit"}
                </Button>
              </div>
                <div className="d-flex gap-3">
                  <Form.Check type="radio" label="Male" name="gender" disabled={!editFields.gender} />
                  <Form.Check type="radio" label="Female" name="gender" disabled={!editFields.gender} />
                </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={12}>
            <div className="profile-form">
              <Form.Label className='profile-form-label'>Email*</Form.Label>
              <Button variant="link" onClick={() => toggleEditField('email')}>
                  {editFields.email ? "Save" : "Edit"}
                </Button>
                </div>
                <Form.Control type="email" placeholder="Enter Email" disabled={!editFields.email} className="profile-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={12}>
            <div className="profile-form">
              <Form.Label className='profile-form-label'>Phone Number*</Form.Label>
              <Button variant="link" onClick={() => toggleEditField('phone')}>
                  {editFields.phone ? "Save" : "Edit"}
                </Button>
                </div>
                <Form.Control type="text" placeholder="Enter Phone Number" disabled={!editFields.phone} className="profile-input" />
            </Col>
          </Row>
        </Form>

        <h3 className="mt-4">FAQs</h3>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What happens when I update my email address or mobile number?</Accordion.Header>
            <Accordion.Body>
              Your login email ID or mobile number will be updated, and all account-related communication will be sent to the new email or mobile number.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>When will my account be updated with the new details?</Accordion.Header>
            <Accordion.Body>
              As soon as you confirm the verification code sent to your email or mobile and save the changes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Will my order history and details remain intact?</Accordion.Header>
            <Accordion.Body>
              Yes, updating your email or mobile will not affect your order history or saved details.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How do I delete my account?</Accordion.Header>
            <Accordion.Body>
              You can request account deletion through your settings. This will permanently remove all your data and cannot be undone.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Button variant="danger" className="mt-3">Deactivate Account</Button>
        <Button variant="outline-danger" className="mt-3 ms-2">Delete Account</Button>
      </Container>
      <Footer />
    </>
  );
};
