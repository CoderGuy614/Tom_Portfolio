import React from "react";
import ImageGallery from "react-image-gallery";

const Places = () => {
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
    <>
      <h1 className="text-center my-3">Places</h1>
      <ImageGallery items={images} />
    </>
  );
};

export default Places;
