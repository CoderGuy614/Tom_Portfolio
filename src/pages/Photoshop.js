import React from "react";
import ImageGallery from "react-image-gallery";
import pic1 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_001.jpg";
import pic1a from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_001-1080p.jpg";
import pic2 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_002.jpg";
import pic3 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_003.jpg";
import pic4 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_004.jpg";
import pic5 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_005-cropped.jpg";
import pic6 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_006.jpg";
import pic7 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_007.jpg";
import pic8 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_008.jpg";
import pic9 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_009.jpg";
import pic10 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_010.jpg";
import pic11 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_011.jpg";
import pic12 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_012-cropped.jpg";
import pic13 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_013-cropped.jpg";
import pic14 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_014-cropped.jpg";
import pic15 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_015-cropped.jpg";
import pic16 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_016.jpg";
import pic17 from "../assets/gallery-photos/photoshop/Photoshop-3-16-21_017.jpg";
import pic19 from "../assets/gallery-photos/photoshop/Photoshop-OSU-1080p.jpg";

const Photoshop = () => {
  const images = [
    {
      original: pic1a,
      thumbnail: pic1a,
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
      original: pic19,
      thumbnail: pic19,
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
  ];
  return (
    <div className="gallery-container">
      <h1 className="text-center text-white pt-2">Photoshop</h1>
      <ImageGallery items={images} />
    </div>
  );
};

export default Photoshop;
