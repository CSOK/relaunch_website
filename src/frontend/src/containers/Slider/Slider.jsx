import React, { useState, useEffect } from "react";
import "./Slider.scss";
import csoklearn from "../../assets/csoklearn.jpg";
import csokstudents3 from "../../assets/csokstudents3.jpg";

const Slider = () => {
  const slides = [
    { name: csoklearn, title: "beach" },
    { name: csokstudents3, title: "boat" },

    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      incrementSlider();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const incrementSlider = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const decrementSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${slides[currentIndex].name})` }}
      ></div>
      <div className="navigation">
        <div onClick={decrementSlider}>❰</div>
        <div onClick={incrementSlider}>❱</div>
      </div>
      <div className="slider-dots">
        {slides.map((slide, slideIndex) => (
          <div
            className={`dot ${
              currentIndex === slideIndex ? "active" : "inactive"
            }`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
      <div className="border-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Slider;
