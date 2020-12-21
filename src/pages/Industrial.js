import React from "react";
import ImageGallery from "react-image-gallery";

const Industrial = () => {
  const images = [
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
    {
      original: "https://loremflickr.com/1000/600/business",
      thumbnail: "https://loremflickr.com/250/150/business",
    },
  ];
  return (
    <div className="gallery-container">
      <h1 className="text-center text-white">Industrial</h1>
      <ImageGallery items={images} />
    </div>
  );
};

export default Industrial;
