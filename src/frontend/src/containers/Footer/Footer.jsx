import React from "react";
import "./Footer.scss";
import githubLogo from "../../assets/github.png";
import twitterLogo from "../../assets/twitter.png";
import facebookLogo from "../../assets/facebook.png";
import CSOKLogo from "../../assets/CSOK_2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container-1">
        <div className="child">
          <img src={CSOKLogo} alt="" />
        </div>
        {/* <ul className="child">
          <li className="head">POLICY INFO </li>
          <li>PRIVACY INFO</li>
          <li>FAQ</li>
          <li>TERMS OF POLICY</li>
        </ul> */}
        <div className="child">
          <div className="head center">
            <p>SOCIALS</p>
          </div>
          <div className="socials">
            <a href="#">
              <img src={facebookLogo} alt="Facebook logo" />
            </a>
            <a href="#">
              <img src={githubLogo} alt="Github logo" />
            </a>
            <a href="#">
              <img src={twitterLogo} alt="Twitter logo" />
            </a>
          </div>
        </div>
      </div>
      <div>
        @{currentYear} <span>|</span> COMPUTER SOCIETY OF KIMATHI
      </div>
    </footer>
  );
};

export default Footer;
