import React from "react";
import ImageGallery from "react-image-gallery";
import testpic1 from "../assets/testpic1.jpg";
import testpic2 from "../assets/testpic2.jpg";
import testpic3 from "../assets/testpic3.jpg";
import testpic4 from "../assets/testpic4.jpg";
import testpic5 from "../assets/testpic5.jpg";
import testpic6 from "../assets/testpic6.jpg";
import testpic7 from "../assets/testpic7.jpg";
import testpic8 from "../assets/testpic8.jpg";

const Location = () => {
  const images = [
    {
      original: testpic1,
      thumbnail: testpic1,
    },
    {
      original: testpic2,
      thumbnail: testpic2,
    },
    {
      original: testpic3,
      thumbnail: testpic3,
    },
    {
      original: testpic4,
      thumbnail: testpic4,
    },
    {
      original: testpic5,
      thumbnail: testpic5,
    },
    {
      original: testpic6,
      thumbnail: testpic6,
    },
    {
      original: testpic7,
      thumbnail: testpic7,
    },
    {
      original: testpic8,
      thumbnail: testpic8,
    },
  ];
  return (
    <div className="gallery-container">
      <h1 className="text-center text-white">Location</h1>
      <ImageGallery items={images} originalClass="original-class" />
    </div>
  );
};

export default Location;
