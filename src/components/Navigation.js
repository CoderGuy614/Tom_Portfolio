import React, { useState, useEffect } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import title from "../assets/title.png";

const Navigation = () => {
  const [active, setActive] = useState("/");
  useEffect(() => {
    setActive(window.location.pathname);
  }, [active]);
  return (
    <Navbar expand="md">
      <Navbar.Brand as={Link} to="/" onClick={() => setActive("/")}>
        <Image src={title} className="title-image" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar" className="m-2" />

      <Navbar.Collapse id="basic-navbar">
        <Nav
          activeKey={active}
          onSelect={(selectedKey) => setActive(selectedKey)}
          className="nav-items justify-content-between px-4"
        >
          <Nav.Item>
            <Nav.Link as={Link} to="/about" eventKey="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/people" eventKey="/people">
              People
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/places" eventKey="/places">
              Places
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/corporate" eventKey="/corporate">
              Corporate
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/personal" eventKey="/personal">
              Personal
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" eventKey="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
