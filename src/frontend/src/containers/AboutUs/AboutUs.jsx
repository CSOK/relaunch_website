import React from "react";
import "./AboutUs.scss";
import COSK from "../../assets/COSK.png";
const AboutUs = () => {
  return (
    <div className="aboutUs" id="aboutUs">
      <h1>About Us</h1>
      <div className="aboutContainer">
        <div className="aboutContent">
          <p>
            We are an academic-technology club founded in 2012 that has a
            mission of cultivating a tech structure through meetups, talks,
            training, hackathons and social activities for its members.
          </p>
          <p>
            The club membership is open for students and staff within the
            university.We aim to create awareness, promote growth of computer
            knowledge and entrepreneurship and nurture technological and
            programming talent.
          </p>

          <div className="aboutButtons">
            {/* <button className="readMore">Read More</button> */}
            <button className="joinNow">Join Now</button>
          </div>
        </div>
        <div className="aboutImage">
          <img src={COSK} alt="COSK" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
