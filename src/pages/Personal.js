import React from "react";
import ImageGallery from "react-image-gallery";

const Personal = () => {
  const images = [
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
    {
      original: "https://loremflickr.com/1000/600/personal",
      thumbnail: "https://loremflickr.com/250/150/personal",
    },
  ];
  return (
    <>
      <h1 className="text-center my-3">Personal</h1>
      <ImageGallery items={images} />
    </>
  );
};

export default Personal;
