import React from "react";
import ImageGallery from "react-image-gallery";
import pic1 from "../assets/gallery-photos/location-learn/Location-Learn_001-cropped.jpg";
import pic2 from "../assets/gallery-photos/location-learn/Location-Learn_002.jpg";
import pic3 from "../assets/gallery-photos/location-learn/Location-Learn_003.jpg";
import pic3a from "../assets/gallery-photos/location-learn/Location-Learn_003-a-.jpg";
import pic3b from "../assets/gallery-photos/location-learn/Location-Learn_003-b-.jpg";
import pic3c from "../assets/gallery-photos/location-learn/Location-Learn_003-c-.jpg";
import pic3d from "../assets/gallery-photos/location-learn/Location-Learn_003-d-.jpg";
import pic3e from "../assets/gallery-photos/location-learn/Location-Learn_003-e-.jpg";
import pic3f from "../assets/gallery-photos/location-learn/Location-Learn_003-f-.jpg";
import pic3g from "../assets/gallery-photos/location-learn/Location-Learn_003-g-.jpg";
import pic3h from "../assets/gallery-photos/location-learn/Location-Learn_003-h-.jpg";
import pic3i from "../assets/gallery-photos/location-learn/Location-Learn_003-i-.jpg";
import pic3j from "../assets/gallery-photos/location-learn/Location-Learn_003-j-.jpg";
import pic3k from "../assets/gallery-photos/location-learn/Location-Learn_003-k-.jpg";
import pic4 from "../assets/gallery-photos/location-learn/Location-Learn_004.jpg";
import pic5 from "../assets/gallery-photos/location-learn/Location-Learn_005.jpg";
import pic6 from "../assets/gallery-photos/location-learn/Location-Learn_006.jpg";
import pic7 from "../assets/gallery-photos/location-learn/Location-Learn_007.jpg";
import pic8 from "../assets/gallery-photos/location-learn/Location-Learn_008.jpg";
import pic9 from "../assets/gallery-photos/location-learn/Location-Learn_009.jpg";
import pic10 from "../assets/gallery-photos/location-learn/Location-Learn_010.jpg";
import pic11 from "../assets/gallery-photos/location-learn/Location-Learn_011.jpg";
import pic11a from "../assets/gallery-photos/location-learn/Location-Learn_011-a-.jpg";
import pic12 from "../assets/gallery-photos/location-learn/Location-Learn_012.jpg";
import pic13 from "../assets/gallery-photos/location-learn/Location-Learn_013.jpg";
import pic14 from "../assets/gallery-photos/location-learn/Location-Learn_014.jpg";
import pic15 from "../assets/gallery-photos/location-learn/Location-Learn_015.jpg";
import pic16 from "../assets/gallery-photos/location-learn/Location-Learn_016.jpg";
import pic17 from "../assets/gallery-photos/location-learn/Location-Learn_017.jpg";
import pic18 from "../assets/gallery-photos/location-learn/Location-Learn_018.jpg";
import pic19 from "../assets/gallery-photos/location-learn/Location-Learn_019.jpg";
import pic20 from "../assets/gallery-photos/location-learn/Location-Learn_020.jpg";
import pic21 from "../assets/gallery-photos/location-learn/Location-Learn_021.jpg";
import pic22 from "../assets/gallery-photos/location-learn/Location-Learn_022.jpg";
import pic23 from "../assets/gallery-photos/location-learn/Location-Learn_023.jpg";
import pic24 from "../assets/gallery-photos/location-learn/Location-Learn_024.jpg";

const Personal = () => {
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
      original: pic3a,
      thumbnail: pic3a,
    },
    {
      original: pic3b,
      thumbnail: pic3b,
    },
    {
      original: pic3c,
      thumbnail: pic3c,
    },
    {
      original: pic3d,
      thumbnail: pic3d,
    },
    {
      original: pic3e,
      thumbnail: pic3e,
    },
    {
      original: pic3f,
      thumbnail: pic3f,
    },
    {
      original: pic3g,
      thumbnail: pic3g,
    },
    {
      original: pic3h,
      thumbnail: pic3h,
    },
    {
      original: pic3i,
      thumbnail: pic3i,
    },
    {
      original: pic3j,
      thumbnail: pic3j,
    },
    {
      original: pic3k,
      thumbnail: pic3k,
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
      original: pic11a,
      thumbnail: pic11a,
    },
    {
      original: pic12,
      thumbnail: pic12,
    },
    {
      original: pic13,
      thumbnail: pic13,
    },
    // {
    //   original: pic14,
    //   thumbnail: pic14,
    // },
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
    {
      original: pic23,
      thumbnail: pic23,
    },
    {
      original: pic24,
      thumbnail: pic24,
    },
  ];
  return (
    <div className="gallery-container">
      <h1 className="text-center text-white pt-2">Location - Learn</h1>
      <ImageGallery items={images} />
    </div>
  );
};

export default Personal;
