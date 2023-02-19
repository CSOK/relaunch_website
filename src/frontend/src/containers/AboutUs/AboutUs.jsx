import React from "react";
import "./AboutUs.scss";
import COSK from "../../assets/COSK.png";
import { Register } from "../Form/Register";
const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h2>About Us</h2>
      <div className="aboutContainer">
        <div className="aboutContent">
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut ultricies lacinia, nisl nisl aliquam nisl, nec
            lacinia nisl nisl sit amet nisl. Sed condimentum, nisl ut ultricies
            lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet
            nisl.
          </p>
          <p>
            lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet
            nisl. Sed condimentum, nisl ut ultricies lacinia, nisl nisl aliquam
            nisl, nec lacinia nisl nisl sit amet nisl. Sed condimentum, nisl ut
            ultricies lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl sit
          </p>

          <div className="aboutButtons">
            <button className="readMore">Read More</button>
            <button className="joinNow"><Register /></button>
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
