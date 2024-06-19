import React, { useState, useEffect } from "react";
import "./Gallery.scss";
import atlassian1 from "../../assets/csokstudents.jpg";
import eventcloud from "../../assets/eventscloud.jpeg";
import eventsitsm from "../../assets/eventsitsm.jpeg";

const Gallery = ({ toggleGallery, isGalleryOpen }) => {
  const slides = [
    {
      image: atlassian1,
      title: "Upcoming Event 1",
      date: "25 October 2024",
      description: "Details about upcoming event 1...",
      isPast: false,
      rsvpLink: "https://example.com/rsvp1",
    },
    {
      image: atlassian1,
      title: "Africa's Talking Mini-Summit",
      date: "8 March 2023",
      description: "Hackathon and mini-summit sponsored by Africa's Talking",
      isPast: true,
      viewEventLink: "https://community.elarian.com/events/details/africas-talking-africas-talking-community-presents-africas-talking-mini-summit-dedan-kimathi-university-of-technology-1/",
    },
    {
      image: eventsitsm,
      title: "High Velocity ITSM Nyeri",
      date: "9 March 2023",
      description: "Atlassian demos provided from product leaders in the country",
      isPast: true,
      viewEventLink: "https://ace.atlassian.com/events/details/atlassian-nairobi-presents-welcome-to-high-velocity-itsm-nyeri-dekut/",
    },
    {
      image: eventcloud,
      title: "Beyond the CloudAfrica's Talking Mini-Summit",
      date: "1 February 2024",
      description: "Introduction to the Cloud and an engaging Q&A session with Cloud Experts",
      isPast: true,
      viewEventLink: "https://youtu.be/SxPCqeSdTgI?si=-85gMcykVV5ZAGDf",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentEvents = slides.filter((slide) =>!slide.isPast);
  const pastEvents = slides.filter((slide) => slide.isPast);

  return (
    <div className="gallery" id="gallery">
      <h1>Upcoming and Past Events</h1>
      <div
        className={`content_container ${isGalleryOpen? "gallery-open" : "gallery-closed"}`}
      >
        <h2>Upcoming Events</h2>
        {currentEvents.map((event, index) => (
          <div className="slide" key={index}>
            <div className="image-container">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="slide-details">
              <h2>{event.title}</h2>
              <p className="date">{event.date}</p>
              <p className="description">{event.description}</p>
              <div className="button-wrapper">
                <button><a
                  className="rsvp-button"
                  href={event.rsvpLink}
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  rel="noopener noreferrer"
                >
                  RSVP
                </a>
                </button>
              </div>
            </div>
            {index < currentEvents.length - 1 && <div style={{ height: 20 }} />}
          </div>
        ))}

        <h2>Past Events</h2>
        {pastEvents.map((event, index) => (
          <div className="slide" key={index}>
            <div className="image-container">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="slide-details">
              <h2>{event.title}</h2>
              <p className="date">{event.date}</p>
              <p className="description">{event.description}</p>
              <div className="button-wrapper">
                <a
                  className="view-event-button"
                  href={event.viewEventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Event
                </a>
              </div>
            </div>
            {index < pastEvents.length - 1 && <div style={{ height: 20 }} />}
          </div>
        ))}
      </div>
      <div className="button-wrapper">
        <button onClick={toggleGallery}>
          {!isGalleryOpen? "View All" : "Minimize"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;