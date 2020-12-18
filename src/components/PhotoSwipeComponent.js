import React from "react";
import { PhotoSwipe } from "react-photoswipe";
import { PhotoSwipeGallery } from "react-photoswipe";

class PhotoSwipeComponent extends React.Component {
  state = {
    isOpen: false,
    items: [
      {
        src: "http://picsum.photos/1200/899",
        w: 1200,
        h: 900,
        title: "Image 1",
      },
      {
        src: "http://picsum.photos/1200/900",
        w: 1200,
        h: 900,
        title: "Image 2",
      },
      {
        src: "http://picsum.photos/1200/901",
        w: 1200,
        h: 900,
        title: "Image 3",
      },
    ],
    galleryItems: [
      {
        src: "http://picsum.photos/1200/899",
        thumbnail: "http://picsum.photos/120/90",
        w: 1200,
        h: 900,
        title: "Image 1",
      },
      {
        src: "http://picsum.photos/1200/900",
        thumbnail: "http://picsum.photos/120/90",
        w: 1200,
        h: 900,
        title: "Image 2",
      },
      {
        src: "http://picsum.photos/1200/901",
        thumbnail: "http://picsum.photos/120/90",
        w: 1200,
        h: 900,
        title: "Image 3",
      },
      {
        src: "http://picsum.photos/1200/900",
        thumbnail: "http://picsum.photos/120/90",
        w: 1200,
        h: 900,
        title: "Image 4",
      },
    ],
    options: {},
  };

  openPhotoSwipe = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: true,
      options: {
        closeOnScroll: false,
      },
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  getThumbnailContent = (item) => {
    return <img src={item.thumbnail} with={120} height={90} />;
  };
  render() {
    return (
      <div className="layout-page">
        <main className="layout-main">
          <div className="container">
            <h2>PhotoSwipe</h2>

            {/* <button className="btn btn-primary" onClick={this.openPhotoSwipe}>
              Click me
            </button> */}
            <PhotoSwipe
              isOpen={this.state.isOpen}
              items={this.state.items}
              options={this.state.options}
              onClose={this.handleClose}
            />
            <hr />
            <h2>PhotoSwipeGallery</h2>
            <hr />
            <PhotoSwipeGallery
              items={this.state.galleryItems}
              thumbnailContent={this.getThumbnailContent}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default PhotoSwipeComponent;
