import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">
        <h1 className="nav-branding">
          <span style={{ color: "#a69a95" }}>TOM</span>DUBANOWICH
        </h1>
        <h4 className="float-right">PHOTOGRAPHER</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar" />

      <Navbar.Collapse id="basic-navbar">
        <Nav
          activeKey="/home"
          //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          className="nav-items"
        >
          <Nav.Item>
            <Nav.Link href="/home">ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/people">PEOPLE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="places">PLACES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="corporate">CORPORATE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="contact">CONTACT</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
