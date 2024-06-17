import React, { useState, useEffect } from "react";
import "./Gallery.scss";
import atlassian1 from "../../assets/csokstudents.jpg";

const Gallery = ({ toggleGallery, isGalleryOpen }) => {
  const slides = [
    {
      image: atlassian1,
      title: "Upcoming Event 1",
      date: "25 October 2024",
      description: "Details about upcoming event 1...",
    },
    {
      image: atlassian1,
      title: "Past Event 1",
      date: "15 September 2023",
      description: "Details about past event 1...",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU",
      title: "Past Event 2",
      date: "12 June 2023",
      description: "Details about past event 2...",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="gallery" id="gallery">
      <h1>Upcoming and Past Events</h1>
      <div className={`content_container ${isGalleryOpen ? "gallery-open" : "gallery-closed"}`}>
        <div className="slide">
          <div className="image-container">
            <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
          </div>
          <div className="slide-details">
            <h2>{slides[currentIndex].title}</h2>
            <p className="date">{slides[currentIndex].date}</p>
            <p className="description">{slides[currentIndex].description}</p>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button onClick={toggleGallery}>
          {!isGalleryOpen ? "View All" : "Minimize"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
