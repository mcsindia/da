import React, { useState } from 'react';
import { Form, Button, Row, Col,  Alert, Table } from 'react-bootstrap';
import { AdminLayout } from '../../../layouts/dms/AdminLayout/AdminLayout';

export const ProfileSetting = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState({ email: true, sms: false, inApp: true });
  const [language, setLanguage] = useState('English');
  const [timezone, setTimezone] = useState('GMT');
  const [twoFA, setTwoFA] = useState(false);

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h3 className="mb-4">Profile Settings</h3>

        <h5>1. Personal Information</h5>
        <Form className="mb-4">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter mobile number" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" accept="image/*" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Role/Designation</Form.Label>
                <Form.Control type="text" value="Admin" disabled />
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <h5>2. Login & Security</h5>
        <Form className="mb-4">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Current Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Check 
            type="switch"
            id="2fa-toggle"
            label="Enable Two-Factor Authentication"
            checked={twoFA}
            onChange={() => setTwoFA(!twoFA)}
          />

          {twoFA && <Alert variant="info">Scan this QR code with your Authenticator app. (QR Placeholder)</Alert>}

          <Row className="mt-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Security Question</Form.Label>
                <Form.Select>
                  <option>Choose a question...</option>
                  <option>What was your first pet’s name?</option>
                  <option>What is your mother’s maiden name?</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Answer</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <h5>3. Preferences</h5>
        <Form className="mb-4">
          <Form.Check 
            type="switch"
            id="theme-toggle"
            label="Dark Theme"
            checked={theme === 'dark'}
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />

          <Form.Group className="mb-3 mt-3">
            <Form.Label>Notification Settings</Form.Label>
            <Form.Check type="checkbox" name="email" label="Email" checked={notifications.email} onChange={handleNotificationChange} />
            <Form.Check type="checkbox" name="sms" label="SMS" checked={notifications.sms} onChange={handleNotificationChange} />
            <Form.Check type="checkbox" name="inApp" label="In-app" checked={notifications.inApp} onChange={handleNotificationChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Language Preferences</Form.Label>
            <Form.Select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Timezone</Form.Label>
            <Form.Select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
              <option>GMT</option>
              <option>IST</option>
              <option>PST</option>
              <option>EST</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <h5>4. Activity Log / Session Management</h5>
        <Table striped bordered hover className="mb-3">
          <thead>
            <tr>
              <th>Login Time</th>
              <th>IP Address</th>
              <th>Device</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-04-05 10:30 AM</td>
              <td>192.168.1.101</td>
              <td>Chrome on Windows</td>
            </tr>
            <tr>
              <td>2025-04-04 08:10 PM</td>
              <td>192.168.1.102</td>
              <td>Safari on iPhone</td>
            </tr>
          </tbody>
        </Table>

        <Table bordered hover className="mb-4">
          <thead>
            <tr>
              <th>Device</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chrome on Windows</td>
              <td>Active</td>
              <td><Button variant="danger" size="sm">Revoke</Button></td>
            </tr>
            <tr>
              <td>Safari on iPhone</td>
              <td>Active</td>
              <td><Button variant="danger" size="sm">Revoke</Button></td>
            </tr>
          </tbody>
        </Table>

        <div className="d-flex gap-2">
          <Button variant="primary">Save Changes</Button>
          <Button variant="danger">Delete Account</Button>
          <Button variant="warning">Logout from All Devices</Button>
        </div>
      </div>
    </AdminLayout>
  );
};
