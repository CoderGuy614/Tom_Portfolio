import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const GalleryThumbnail = ({ category }) => {
  return (
    <Link to={`/${category}`} className="gallery-thumb-links text-white">
      <h5 className="text-center">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h5>
      <Image src={`https://loremflickr.com/100/100/${category}`} />
    </Link>
  );
};

export default GalleryThumbnail;
