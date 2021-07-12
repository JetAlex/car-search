import React from 'react';
import './header.scss';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from './logo.svg';

function Header() {
  return (
    <Navbar variant="light" className="border-bottom mb-4">
      <Container className="px-4 py-2">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link href="#home">Purchase</Nav.Link>
          <Nav.Link href="#features">My Orders</Nav.Link>
          <Nav.Link href="#pricing">Sell</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
