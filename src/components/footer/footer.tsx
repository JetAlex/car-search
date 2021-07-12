import React from 'react';
import { Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <Navbar variant="light" className="border-top mt-4">
      <Container className="px-4 py-2">
        <div className="m-auto">Copyright</div>
      </Container>
    </Navbar>
  );
}

export default Footer;
