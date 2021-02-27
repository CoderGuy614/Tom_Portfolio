import React from "react";
import ImageGallery from "react-image-gallery";
import pic1 from "../assets/gallery-photos/location-work/Location-Work-001.jpg";
import pic2 from "../assets/gallery-photos/location-work/Location-Work-002.jpg";
import pic3 from "../assets/gallery-photos/location-work/Location-Work-003.jpg";
import pic4 from "../assets/gallery-photos/location-work/Location-Work-004.jpg";
import pic5 from "../assets/gallery-photos/location-work/Location-Work-005.jpg";
import pic6 from "../assets/gallery-photos/location-work/Location-Work-006.jpg";
import pic7 from "../assets/gallery-photos/location-work/Location-Work-007.jpg";
import pic8 from "../assets/gallery-photos/location-work/Location-Work-008.jpg";
import pic9 from "../assets/gallery-photos/location-work/Location-Work-009.jpg";
import pic10 from "../assets/gallery-photos/location-work/Location-Work-010.jpg";
import pic11 from "../assets/gallery-photos/location-work/Location-Work-011.jpg";
import pic12 from "../assets/gallery-photos/location-work/Location-Work-012.jpg";
import pic13 from "../assets/gallery-photos/location-work/Location-Work-013.jpg";
import pic14 from "../assets/gallery-photos/location-work/Location-Work-014.jpg";
import pic15 from "../assets/gallery-photos/location-work/Location-Work-015.jpg";
import pic16 from "../assets/gallery-photos/location-work/Location-Work-016.jpg";
import pic17 from "../assets/gallery-photos/location-work/Location-Work-017.jpg";
import pic18 from "../assets/gallery-photos/location-work/Location-Work-018.jpg";
import pic19 from "../assets/gallery-photos/location-work/Location-Work-019.jpg";
import pic20 from "../assets/gallery-photos/location-work/Location-Work-020.jpg";
import pic21 from "../assets/gallery-photos/location-work/Location-Work-021.jpg";
import pic22 from "../assets/gallery-photos/location-work/Location-Work-022.jpg";

const LocationWork = () => {
  const images = [
    {
      original: pic1,
      thumbnail: pic1,
    },
    {
      original: pic2,
      thumbnail: pic2,
    },
    {
      original: pic3,
      thumbnail: pic3,
    },
    {
      original: pic4,
      thumbnail: pic4,
    },
    {
      original: pic5,
      thumbnail: pic5,
    },
    {
      original: pic6,
      thumbnail: pic6,
    },
    {
      original: pic7,
      thumbnail: pic7,
    },
    {
      original: pic8,
      thumbnail: pic8,
    },
    {
      original: pic9,
      thumbnail: pic9,
    },
    {
      original: pic10,
      thumbnail: pic10,
    },
    {
      original: pic11,
      thumbnail: pic11,
    },
    {
      original: pic12,
      thumbnail: pic12,
    },
    {
      original: pic13,
      thumbnail: pic13,
    },
    {
      original: pic14,
      thumbnail: pic14,
    },
    {
      original: pic15,
      thumbnail: pic15,
    },
    {
      original: pic16,
      thumbnail: pic16,
    },
    {
      original: pic17,
      thumbnail: pic17,
    },
    {
      original: pic18,
      thumbnail: pic18,
    },
    {
      original: pic19,
      thumbnail: pic19,
    },
    {
      original: pic20,
      thumbnail: pic20,
    },
    {
      original: pic21,
      thumbnail: pic21,
    },
    {
      original: pic22,
      thumbnail: pic22,
    },
  ];
  return (
    <div className="gallery-container">
      <h1 className="text-center text-white pt-2">Location - Work</h1>
      <ImageGallery items={images} />
    </div>
  );
};

export default LocationWork;
