import React, { useState, useEffect } from "react";
import { Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import title from "../assets/LogoSmall.png";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setActiveTab(window.location.pathname);
  }, [activeTab]);
  return (
    <Navbar expand="md">
      <Navbar.Brand as={Link} to="/" onClick={() => setActiveTab("/")}>
        <Image src={title} className="title-image" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar" className="m-2" />

      {/* <Navbar.Collapse id="basic-navbar">
        <Nav
          activeKey={active}
          onSelect={(selectedKey) => setActive(selectedKey)}
          className="nav-items justify-content-between"
        >
          <Nav.Item>
            <Nav.Link as={Link} to="/about" eventKey="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" eventKey="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/industrial" eventKey="/industrial">
              Industrial
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/institutions" eventKey="/institutions">
              Institutions
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/location" eventKey="/location">
              Location
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/personal" eventKey="/personal">
              Personal
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/portraits" eventKey="/portraits">
              Portraits
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse> */}

      <Navbar.Collapse id="basic-navbar">
        <Nav
          activeKey={activeTab}
          onSelect={(selectedKey) => setActiveTab(selectedKey)}
          className="nav-items px-4"
        >
          <Nav.Item>
            <Nav.Link as={Link} to="/about" eventKey="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" eventKey="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>

          <NavDropdown
            active={
              activeTab == "/institutions" ||
              activeTab == "/industrial" ||
              activeTab == "/location" ||
              activeTab == "/personal" ||
              activeTab == "/portraits"
                ? true
                : false
            }
            title="Galleries"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              as={Link}
              to="/industrial"
              onClick={() => setActiveTab("/industrial")}
            >
              Industrial
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/institutions"
              onClick={() => setActiveTab("/institutions")}
            >
              Institutions
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/location"
              onClick={() => setActiveTab("/location")}
            >
              Location
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/personal"
              onClick={() => setActiveTab("/personal")}
            >
              Personal
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/portraits"
              onClick={() => setActiveTab("/portraits")}
            >
              Portraits
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
