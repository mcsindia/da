import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'; 

export const Header = () => {
  return (
    <Navbar expand="lg" className="ecom-navbar" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="/web" className="brand-text">
          🛙️ E-commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="ecom-navbar-nav" />
        <Navbar.Collapse id="ecom-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='home-link' href="/web">Home</Nav.Link>
            <Nav.Link className='product-link' href="/products">Products</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className='catagory-link'>
              <NavDropdown.Item as={Link} to="/category/Jewelry">Jewelry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Home Decor">Home Decor</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Art & Collectibles">Art & Collectibles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Pooja Essentials">Pooja Essentials</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Kitchenware">Kitchenware</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Clothing">Clothing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='wish-link' href="/wishlist">
              <span className="icon"><FaHeart /></span> Wishlist
            </Nav.Link>
            <Nav.Link href="/cart">
              <span className="icon"><FaShoppingCart /></span> Cart
            </Nav.Link>
            <NavDropdown title={<><FaUser className='icon' />  Profile</>} id="profile-nav-dropdown" className='catagory-link'>
              <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/orders">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
