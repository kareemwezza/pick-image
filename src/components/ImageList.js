import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

//// for react each list should have a key to help in rerender to prevent duplication of content
//// Also it should have an alt property
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
