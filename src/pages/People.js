import React from "react";
import ImageGallery from "react-image-gallery";

const People = () => {
  const images = [
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
    {
      original: "https://loremflickr.com/1000/600/people",
      thumbnail: "https://loremflickr.com/250/150/people",
    },
  ];
  return (
    <>
      <h1 className="text-center my-3">People</h1>
      <ImageGallery items={images} />
    </>
  );
};

export default People;
