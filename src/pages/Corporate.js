import React from "react";
import ImageGallery from "react-image-gallery";

const Corporate = () => {
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
    <>
      <h1 className="text-center my-3">Corporate</h1>
      <ImageGallery items={images} />
    </>
  );
};

export default Corporate;
