import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState("/");
  useEffect(() => {
    setActive(window.location.pathname);
  }, [active]);
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand as={Link} to="/" onClick={() => setActive("/")}>
        <h1 className="nav-branding">
          <span style={{ color: "#a69a95" }}>TOM</span>DUBANOWICH
        </h1>
        <h4 className="float-right">PHOTOGRAPHER</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar" />

      <Navbar.Collapse id="basic-navbar">
        <Nav
          activeKey={active}
          onSelect={(selectedKey) => setActive(selectedKey)}
          className="nav-items"
        >
          <Nav.Link as={Link} eventKey="/about">
            <Link className="nav-link text-white" to="/about">
              ABOUT
            </Link>
          </Nav.Link>
          <Nav.Link as={Link} eventKey="/people">
            <Link className="nav-link" to="/people">
              PEOPLE
            </Link>
          </Nav.Link>
          <Nav.Link as={Link} eventKey="/places">
            <Link className="nav-link" to="/places">
              PLACES
            </Link>
          </Nav.Link>
          <Nav.Link as={Link} eventKey="/corporate">
            <Link className="nav-link" to="/corporate">
              CORPORATE
            </Link>
          </Nav.Link>
          <Nav.Link as={Link} eventKey="/contact">
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
