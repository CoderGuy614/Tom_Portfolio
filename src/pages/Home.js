import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import GalleryThumbnail from "../components/GalleryThumbnail";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import thumb1 from "../assets/gallery-photos/thumbs/location-cool-places-thumb.jpg";
import thumb2 from "../assets/gallery-photos/thumbs/location-learn-thumb.jpg";
import thumb3 from "../assets/gallery-photos/thumbs/location-live-thumb.jpg";
import thumb4 from "../assets/gallery-photos/thumbs/location-work-thumb.jpg";
import thumb5 from "../assets/gallery-photos/thumbs/personal-thumb.jpg";
import thumb6 from "../assets/gallery-photos/thumbs/photoshop-thumb.jpg";
import thumb7 from "../assets/gallery-photos/thumbs/portraits-environmental-thumb.jpg";
import thumb8 from "../assets/gallery-photos/thumbs/portraits-studio-thumb.jpg";

const Home = () => {
  const galleries = [
    {
      url: "location-cool-places",
      category: "Location",
      subCategory: "Cool Places",
      thumb: thumb1,
    },
    {
      url: "location-learn",
      category: "Location",
      subCategory: "Learn",
      thumb: thumb2,
    },
    {
      url: "location-live",
      category: "Location",
      subCategory: "Live",
      thumb: thumb3,
    },
    {
      url: "location-work",
      category: "Location",
      subCategory: "Work",
      thumb: thumb4,
    },
    { url: "personal", category: "Personal", subCategory: "", thumb: thumb5 },
    { url: "photoshop", category: "Photoshop", subCategory: "", thumb: thumb6 },
    {
      url: "portraits-environmental",
      category: "Portraits",
      subCategory: "Environmental",
      thumb: thumb7,
    },
    {
      url: "portraits-studio",
      category: "Portraits",
      subCategory: "Studio",
      thumb: thumb8,
    },
  ];
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
        <Row className="d-md-none d-block">
          <hr className="my-4" />
          <h3 className="text-center text-white my-2">Web Galleries</h3>
        </Row>
        <Row className="d-flex d-md-none justify-content-between">
          {galleries.map((cat, i) => (
            <Col key={i} className="mt-4 text-center">
              <GalleryThumbnail
                gallery={cat.url}
                category={cat.category}
                subCategory={cat.subCategory}
                thumb={cat.thumb}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
