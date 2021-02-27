import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()} TomDubanowich.com
    </div>
  );
};

export default Footer;
