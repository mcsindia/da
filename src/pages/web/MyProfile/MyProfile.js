import React, { useState } from 'react';
import { Container, Form, Button, Accordion } from 'react-bootstrap';
import { Header } from '../../../components/web/Header/Header';
import { Footer } from '../../../components/web/Footer/Footer';

export const MyProfile = () => {
  const [fullName, setFullName] = useState('Anjali Sharma');
  const [gender, setGender] = useState('Female');
  const [email, setEmail] = useState('anjali@example.com');
  const [mobile, setMobile] = useState('1234567890');
  const [editField, setEditField] = useState(null);

  const handleEditClick = (field) => {
    setEditField(field);
  };

  const handleSaveClick = () => {
    setEditField(null); // Save hone ke baad fields phir se read-only ho jayengi
  };

  return (
    <>
      <Header />
      <Container className="profile-container">
        <Form>
            <h4>Personal Information</h4>
          <Form.Group className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <Form.Label>Full Name</Form.Label>
              {editField === 'fullName' ? (
                <Button variant="link" onClick={handleSaveClick}>Save</Button>
              ) : (
                <Button variant="link" onClick={() => handleEditClick('fullName')}>Edit</Button>
              )}
            </div>
            <Form.Control 
              type="text" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              readOnly={editField !== 'fullName'} 
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <Form.Label>Your Gender</Form.Label>
              {editField === 'gender' ? (
                <Button variant="link" onClick={handleSaveClick}>Save</Button>
              ) : (
                <Button variant="link" onClick={() => handleEditClick('gender')}>Edit</Button>
              )}
            </div>
            <div>
              <Form.Check 
                inline label="Male" type="radio" name="gender" 
                value="Male" checked={gender === 'Male'} 
                onChange={(e) => setGender(e.target.value)} 
                disabled={editField !== 'gender'} 
              />
              <Form.Check 
                inline label="Female" type="radio" name="gender" 
                value="Female" checked={gender === 'Female'} 
                onChange={(e) => setGender(e.target.value)} 
                disabled={editField !== 'gender'} 
              />
            </div>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <Form.Label>Email Address</Form.Label>
              {editField === 'email' ? (
                <Button variant="link" onClick={handleSaveClick}>Save</Button>
              ) : (
                <Button variant="link" onClick={() => handleEditClick('email')}>Edit</Button>
              )}
            </div>
            <Form.Control 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              readOnly={editField !== 'email'} 
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <Form.Label>Mobile Number</Form.Label>
              {editField === 'mobile' ? (
                <Button variant="link" onClick={handleSaveClick}>Save</Button>
              ) : (
                <Button variant="link" onClick={() => handleEditClick('mobile')}>Edit</Button>
              )}
            </div>
            <Form.Control 
              type="text" 
              value={mobile} 
              onChange={(e) => setMobile(e.target.value)} 
              readOnly={editField !== 'mobile'} 
            />
          </Form.Group>
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
