import { useState } from "react";
const navigation = {
  top: "50%",
  transform: "translate(0, -50%)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "95%",
  position: "absolute",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};
const dots = {
  display: "flex",
  flexDirection: "row",
  position: "absolute",
  bottom: "30px",
  color: "white",
  justifyContent: "center",
};

const dotStyle = {
  display: "flex",
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "25px",
  color: "white",
};

const sliderStyles = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStylesWidthBackground = {
    position: "relative",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: "2rem",
    color: "white",
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: "cover",
    transition: "background-image 0.5s linear",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  setTimeout(() => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    }
  }, 5000);

  return (
    <div style={sliderStyles}>
      <div style={navigation}>
        <div onClick={goToPrevious}>❰</div>
        <div onClick={goToNext}>❱</div>
      </div>
      <div id="image" style={slideStylesWidthBackground}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          corporis!
        </p>
      </div>
      <div className="dots" style={dots}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            className={`${currentIndex === slideIndex ? "active" : ""}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
