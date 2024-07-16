import React from "react";
import "./AboutUs.scss";
import CSOK from "../../assets/csokcontinuity.png";
const AboutUs = ({ isModalOpen, openModal, closeModal }) => {
  return (
    <div className="aboutUs" id="aboutUs">
      <h1>ABOUT COMPUTER SOCIETY OF kIMATHI</h1>
      <div className="aboutContainer">
        <div className="aboutContent">
          <p>
            We are an academic-technology club founded in 2012 that has a
            mission of cultivating a tech structure through meetups, talks,
            training, hackathons and social activities for its members.
          </p>
          <p>
            The club membership is open for students and staff within the
            university. We aim to create awareness, promote growth of computer
            knowledge and entrepreneurship and nurture technological and
            programming talent.
          </p>

          <div className="aboutButtons">
            {/* <button className="readMore">Read More</button> */}
            <button className="joinNow"
              onClick={() => {
                  window.open("https://chat.whatsapp.com/IIRGp3f7kdjDYn57HL6UU5", "_blank");
                }}
              >
                Join Now
              </button>
          </div>
        </div>
        <div className="aboutImage">
          <img src={CSOK} alt="CSOK" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
