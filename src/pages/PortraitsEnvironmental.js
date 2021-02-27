import React from "react";
import ImageGallery from "react-image-gallery";
import pic1 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_001.jpg";
import pic2 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_002.jpg";
import pic3 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_003.jpg";
import pic4 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_004.jpg";
import pic5 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_005.jpg";
import pic6 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_006.jpg";
import pic7 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_007.jpg";
import pic8 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_008.jpg";
import pic9 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_009.jpg";
import pic10 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_010.jpg";
import pic11 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_011.jpg";
import pic12 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_012.jpg";
import pic13 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_013.jpg";
import pic14 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_014.jpg";
import pic15 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_015.jpg";
import pic16 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_016.jpg";
import pic17 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_017.jpg";
import pic18 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_018.jpg";
import pic19 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_019.jpg";
import pic20 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_020.jpg";
import pic21 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_021.jpg";
import pic22 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_022.jpg";
import pic23 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_023.jpg";
import pic24 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_024.jpg";
import pic25 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_025.jpg";
import pic26 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_026.jpg";
import pic27 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_027.jpg";
import pic28 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_028.jpg";
import pic29 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_029.jpg";
import pic30 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_030.jpg";
import pic31 from "../assets/gallery-photos/portraits-environmental/Portraits-Environmental_1-14-21_031.jpg";

const PortraitsEnvironmental = () => {
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
    {
      original: pic23,
      thumbnail: pic23,
    },
    {
      original: pic24,
      thumbnail: pic24,
    },
    {
      original: pic25,
      thumbnail: pic25,
    },
    {
      original: pic26,
      thumbnail: pic26,
    },
    {
      original: pic27,
      thumbnail: pic27,
    },
    {
      original: pic28,
      thumbnail: pic28,
    },
    {
      original: pic29,
      thumbnail: pic29,
    },
    {
      original: pic30,
      thumbnail: pic30,
    },
    {
      original: pic31,
      thumbnail: pic31,
    },
  ];
  return (
    <div className="gallery-container">
      <h1 className="text-center text-white pt-2">Portraits - Environmental</h1>
      <ImageGallery items={images} />
    </div>
  );
};

export default PortraitsEnvironmental;
