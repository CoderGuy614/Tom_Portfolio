import React, { useState, useEffect } from "react";
import { Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import title from "../assets/LogoSmall.png";

const Navigation = ({ updateActive }) => {
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setActiveTab(window.location.pathname);
  }, [activeTab, updateActive]);
  return (
    <Navbar expand="md">
      <Navbar.Brand
        as={NavLink}
        to="/home"
        onClick={() => setActiveTab("/home")}
      >
        <Image src={title} className="title-image" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar" className="m-2" />
      <Navbar.Collapse id="basic-navbar">
        <Nav className="nav-items px-4">
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/home"
              onClick={() => setActiveTab("/home")}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={() => setActiveTab("/about")}
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/contact"
              onClick={() => setActiveTab("/contact")}
            >
              Contact
            </Nav.Link>
          </Nav.Item>

          <NavDropdown
            active={
              activeTab === "/location-cool-places" ||
              activeTab === "/location-learn" ||
              activeTab === "/location-live" ||
              activeTab === "/location-work" ||
              activeTab === "/personal" ||
              activeTab === "/photoshop" ||
              activeTab === "/portraits-environmental" ||
              activeTab === "/portraits-studio"
                ? true
                : false
            }
            title="Galleries"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Header>Location</NavDropdown.Header>

            <NavDropdown.Item
              as={NavLink}
              to="/location-learn"
              onClick={() => setActiveTab("/location-learn")}
            >
              Learn
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              to="/location-live"
              onClick={() => setActiveTab("/location-live")}
            >
              Live
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              to="/location-work"
              onClick={() => setActiveTab("/location-work")}
            >
              Work
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              to="/location-cool-places"
              onClick={() => setActiveTab("/location-cool-places")}
            >
              Cool Places
            </NavDropdown.Item>
            <NavDropdown.Divider></NavDropdown.Divider>

            <NavDropdown.Header>Portraits</NavDropdown.Header>

            <NavDropdown.Item
              as={NavLink}
              to="/portraits-environmental"
              onClick={() => setActiveTab("/portraits-environmental")}
            >
              Environmental
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              to="/portraits-studio"
              onClick={() => setActiveTab("/portraits-studio")}
            >
              Studio
            </NavDropdown.Item>

            <NavDropdown.Divider></NavDropdown.Divider>
            <NavDropdown.Item
              className="dropdown-header activeWhite"
              as={NavLink}
              to="/personal"
              onClick={() => setActiveTab("/personal")}
            >
              Personal
            </NavDropdown.Item>

            <NavDropdown.Divider></NavDropdown.Divider>
            <NavDropdown.Item
              className="dropdown-header activeWhite"
              as={NavLink}
              to="/photoshop"
              onClick={() => setActiveTab("/photoshop")}
            >
              Photoshop
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
