import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1020/1000/600/",
    thumbnail: "https://picsum.photos/id/1020/250/150/",
  },
  {
    original: "https://picsum.photos/id/1016/1000/600/",
    thumbnail: "https://picsum.photos/id/1016/250/150/",
  },
  {
    original: "https://picsum.photos/id/1014/1000/600/",
    thumbnail: "https://picsum.photos/id/1014/250/150/",
  },
  {
    original: "https://picsum.photos/id/1021/1000/600/",
    thumbnail: "https://picsum.photos/id/1021/250/150/",
  },
  {
    original: "https://picsum.photos/id/1022/1000/600/",
    thumbnail: "https://picsum.photos/id/1022/250/150/",
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery;
