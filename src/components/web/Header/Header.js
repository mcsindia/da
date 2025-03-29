import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'; // Icons

export const Header = () => {
  return (
    <Navbar expand="lg" className="ecom-navbar" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="/web" className="brand-text">
          🛍️ E-commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="ecom-navbar-nav" />
        <Navbar.Collapse id="ecom-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='home-link' href="/web">Home</Nav.Link>
            <Nav.Link className='product-link' href="/products">Products</Nav.Link>

            <NavDropdown title="Categories" id="basic-nav-dropdown" className='catagory-link'>
              <NavDropdown.Item href="/category/jewelry">Jewelry</NavDropdown.Item>
              <NavDropdown.Item href="/category/home-decor">Home Decor</NavDropdown.Item>
              <NavDropdown.Item href="/category/clothing">Clothing</NavDropdown.Item>
              <NavDropdown.Item href="/category/art">Art & Collectibles</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='wish-link' href="/wishlist">
              <span className="icon"><FaHeart /></span> Wishlist
            </Nav.Link>
            <Nav.Link href="/cart">
              <span className="icon"><FaShoppingCart /></span> Cart
            </Nav.Link>
            <Nav.Link href="/profile">
              <span className="icon"><FaUser /></span> Profile
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
