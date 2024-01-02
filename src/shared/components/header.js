import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">User Management</Navbar.Brand>
        <div className="header-button">
          <Button variant="primary" className="login-btn">Login</Button>
          <Button variant="outline-primary">Register</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;