import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import GalleryList from "./GalleryList";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";

import homePic2 from "../assets/homepage-photos/Homepage-Cowboy.jpg";
import homePic3 from "../assets/homepage-photos/Homepage-Glimcher.jpg";
import homePic1 from "../assets/homepage-photos/Homepage-Nexus.jpg";
import homePic4 from "../assets/homepage-photos/Homepage-Nurse.jpg";
import homePic5 from "../assets/homepage-photos/Homepage-Violin.jpg";
import homePic6 from "../assets/homepage-photos/Homepage-Welder.jpg";

import { galleries } from "../GalleryData";
const Home = ({ setUpdateActive, updateActive }) => {
  return (
    <div className="home-container">
      <div className="image-container">
        {/* <Row className="home-row">
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
        </Row> */}
        <Row className="my-2">
          <Col md={3} className="p-1">
            <Image fluid src={homePic1} className="w-100 h-100" />
          </Col>
          <Col md={5} className="p-1">
            <Image fluid src={homePic2} className="w-100 h-100" />
          </Col>
          <Col md={4} className="p-1">
            <Image fluid src={homePic3} className="w-100 h-100" />
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={3} className="p-1">
            <Image fluid src={homePic4} className="w-100 h-100" />
          </Col>
          <Col md={5} className="p-1">
            <Image fluid src={homePic5} className="w-100 h-100" />
          </Col>
          <Col md={4} className="p-1">
            <Image fluid src={homePic6} className="w-100 h-100" />
          </Col>
        </Row>

        <GalleryList
          galleries={galleries}
          setUpdateActive={setUpdateActive}
          updateActive={updateActive}
        />
      </div>
    </div>
  );
};

export default Home;
