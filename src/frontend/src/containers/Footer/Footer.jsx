import React from "react";
import "./Footer.scss";
import githubLogo from "../../assets/github.png";
import twitterLogo from "../../assets/twitter.png";
import facebookLogo from "../../assets/facebook.png";
import CSOKLogo from "../../assets/CSOK_2.png";
const Footer = () => {
  return (
    <footer>
      <div class="container-1">
        <div class="child">
          <img src={CSOKLogo} alt="" />
        </div>
        <ul class="child">
          <li class="head">INFORMATION</li>
          <li>ABOUT US</li>
          <li>OBJECTIVES</li>
          <li>STORIES</li>
          <li>GALLERY</li>
        </ul>
        <ul class="child">
          <li class="head">POLICY INFO </li>
          <li>PRIVACY INFO</li>
          <li>FAQ</li>
          <li>TERMS OF POLICY</li>
        </ul>
        <div class="child">
          <div class="head center">
            <p>SOCIALS</p>
          </div>
          <div class="socials">
            <a href="#">
              <img src={facebookLogo} alt="Twitter logo" />
            </a>
            <a href="#">
              <img src={githubLogo} alt="Github Logo" />
            </a>
            <a href="#">
              <img src={twitterLogo} alt="Twitter logo" />
            </a>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div>
        @2023 <span>|</span> COMPUTER SOCIETY OF KIMATHI
      </div>
    </footer>
  );
};

export default Footer;
