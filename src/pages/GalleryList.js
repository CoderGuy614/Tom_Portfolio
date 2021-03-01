import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import GalleryThumbnail from "../components/GalleryThumbnail";

const GalleryList = ({ galleries, setUpdateActive, updateActive }) => {
  return (
    <Container className="gallery-list-container">
      <div className="d-md-none">
        <hr className="my-4"></hr>
        <h3 className="text-center text-white mb-2">Web Galleries</h3>
        <hr className="my-4"></hr>
      </div>
      <Row className="d-md-none d-block"></Row>
      <Row className="d-md-none d-flex justify-content-between">
        {galleries.map((cat, i) => (
          <Col key={i} className="mt-4 text-center">
            <GalleryThumbnail
              setUpdateActive={setUpdateActive}
              updateActive={updateActive}
              gallery={cat.url}
              category={cat.category}
              subCategory={cat.subCategory}
              thumb={cat.thumb}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryList;
