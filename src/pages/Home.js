import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import GalleryList from "./GalleryList";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import { galleries } from "../GalleryData";
const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <Row className="home-row">
          <Col md={8} className="d-flex justify-content-center">
            <Image fluid src={home1} className="w-100" />
          </Col>
          <Col
            md={4}
            className="d-none d-md-flex flex-column justify-content-between"
          >
            <Row>
              <Image src={home2} className="w-100 mb-2" fluid />
            </Row>
            <Row>
              <Image src={home3} className="w-100 mt-2" fluid />
            </Row>
          </Col>
        </Row>
        <GalleryList galleries={galleries} responsive={true} />
      </div>
    </div>
  );
};

export default Home;
