import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../components/Navigation";
import PhotoSwipeComponent from "../components/PhotoSwipeComponent";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";

const Home = () => {
  return (
    <div>
      <Row>
        <Col md={9}>
          <Image src={home1} />
        </Col>
        <Col
          md={3}
          className="d-none d-md-flex flex-column justify-content-between"
        >
          <Row>
            <Image fluid src={home2} />
          </Row>
          <Row>
            <Image fluid src={home3} />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
