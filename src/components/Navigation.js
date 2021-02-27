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
            {/* <h6 className="text-center p-2">Locations</h6> */}

            <NavDropdown.Item
              as={Link}
              to="/location-cool-places"
              onClick={() => setActiveTab("/location-cool-places")}
            >
              Cool Places
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/location-learn"
              onClick={() => setActiveTab("/location-learn")}
            >
              Learn
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/location-live"
              onClick={() => setActiveTab("/location-live")}
            >
              Live
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/location-work"
              onClick={() => setActiveTab("/location-work")}
            >
              Work
            </NavDropdown.Item>
            <NavDropdown.Divider></NavDropdown.Divider>
            {/* <h6 className="text-center p-2">Portraits</h6> */}
            <NavDropdown.Header>Portraits</NavDropdown.Header>

            <NavDropdown.Item
              as={Link}
              to="/portraits-environmental"
              onClick={() => setActiveTab("/portraits-environmental")}
            >
              Environmental
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/portraits-studio"
              onClick={() => setActiveTab("/portraits-studio")}
            >
              Studio
            </NavDropdown.Item>
            <NavDropdown.Divider></NavDropdown.Divider>
            <NavDropdown.Item
              as={Link}
              to="/personal"
              onClick={() => setActiveTab("/personal")}
            >
              Personal
            </NavDropdown.Item>
            <NavDropdown.Divider></NavDropdown.Divider>
            <NavDropdown.Item
              as={Link}
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
