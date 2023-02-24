import React from "react";
import "./Hero.scss";
import { ImageSlider } from "../../components";
const sliderImages = [
  { url: "src/assets/enviroment_5.jpg", title: "beach" },
  { url: "src/assets/enviroment_3.jpg", title: "boat" },
];
const containerStyles = {
  width: "100%",
  height: "70vh",
  margin: "0 auto",
};
const Hero = () => {
  return (
    <div className="hero">
      <div style={containerStyles}>
        <ImageSlider slides={sliderImages} />
      </div>
    </div>
  );
};

export default Hero;
