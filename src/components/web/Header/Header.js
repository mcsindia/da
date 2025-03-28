import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar expand="lg" className="ecom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/web" className="brand-text">
          🛍️ E-commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="ecom-navbar-nav" />
        <Navbar.Collapse id="ecom-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/web">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/jewelry">Jewelry</NavDropdown.Item>
              <NavDropdown.Item href="/category/home-decor">Home Decor</NavDropdown.Item>
              <NavDropdown.Item href="/category/clothing">Clothing</NavDropdown.Item>
              <NavDropdown.Item href="/category/art">Art & Collectibles</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
