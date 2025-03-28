import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("Employee");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [savePassword, setSavePassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      userType,
      username,
      password,
      savePassword,
    });
  };

  return (
    <div className="dms-auth-wrapper">
    <Container
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Card className="p-4 shadow-sm" style={{ width: "350px", borderRadius: "10px" }}>
        <Card.Body>
          {/* Header */}
          <h3 className="text-center mb-2">
            Ride Sharing App
          </h3>
          <p className="text-center text-muted mb-4">Sign in to access your account</p>

          {/* Form */}
          <Form onSubmit={handleSubmit}>
            {/* User Type */}
            <Form.Group className='dms-form-group'>
              <Form.Label>User Type</Form.Label>
              <Form.Select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="Employee">User</option>
                <option value="Employee">Employee</option>
                <option value="Vendor">Rider</option>
                <option value="Client">Driver</option>
              </Form.Select>
            </Form.Group>

            {/* Username */}
            <Form.Group className='dms-form-group'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className='dms-form-group'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Save Password & Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Form.Check
                type="checkbox"
                label="Save Password"
                checked={savePassword}
                onChange={(e) => setSavePassword(e.target.checked)}
              />
              <Button
                variant="link"
                className="p-0 text-decoration-none text-primary"
                onClick={() => navigate("/forget-password")}
              >
                Forgot Password?
              </Button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-100"/* 
              onClick={() => navigate("/")} */
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};
