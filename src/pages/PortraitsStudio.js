import React from "react";
import ImageGallery from "react-image-gallery";
import pic1 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_001.jpg";
import pic2 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_002.jpg";
import pic3 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_003.jpg";
import pic4 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_004.jpg";
import pic5 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_005.jpg";
import pic6 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_006.jpg";
import pic7 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_007.jpg";
import pic8 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_008.jpg";
import pic9 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_009.jpg";
import pic10 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_010.jpg";
import pic11 from "../assets/gallery-photos/portraits-studio/Studio-1-14-21_011.jpg";

const PortraitsStudio = () => {
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
  ];
  return (
    <div className="gallery-container">
      <h1 className="text-center text-white pt-2">Portraits - Studio</h1>
      <ImageGallery items={images} />
    </div>
  );
};

export default PortraitsStudio;
