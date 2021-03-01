import React from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const GalleryThumbnail = ({
  gallery,
  category,
  subCategory,
  thumb,
  setUpdateActive,
  updateActive,
}) => {
  return (
    <div className="thumb-container">
      <NavLink
        to={`/${gallery}`}
        className="gallery-thumb-links text-white"
        onClick={() => setUpdateActive(!updateActive)}
      >
        <h3 className="text-center">{category}</h3>
        <h6 className="text-center">{subCategory}</h6>

        <Image thumbnail src={thumb} />
      </NavLink>
    </div>
  );
};

export default GalleryThumbnail;
