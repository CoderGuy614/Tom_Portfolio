import React from "react";
import ImageGallery from "react-image-gallery";

const Institutions = () => {
  const images = [
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
    {
      original: "https://loremflickr.com/1000/600/places",
      thumbnail: "https://loremflickr.com/250/150/places",
    },
  ];
  return (
    <div className="gallery-container">
      <h1 className="text-center">Institutions</h1>
      <ImageGallery items={images} />
    </div>
  );
};

export default Institutions;
