import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import CSOKLogo from "../../assets/CSOK_2.png";

const Navbar = ({ openModal }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    // <nav className={`navigation ${isNavExpanded ? "expanded" : " "}`}>
    <nav className="navigation">
      <div className="logo-wrapper">
        <img src={CSOKLogo} alt="" />
      </div>
      <ul
        className={`navigation-menu ${
          isNavExpanded ? "nav-expanded" : "nav-collapsed"
        } `}
      >
        <li>
          <a
            href="#app"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#aboutUs"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            ABOUT US
          </a>
        </li>
        <li>
          <a
            href="#objectives"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            OBJECTIVES
          </a>
        </li>
        <li>
          <a
            href="#stories"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            STORIES
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            GALLERY
          </a>
        </li>
      </ul>

      <ul className={`navigation-pc`}>
        <li>
          <a href="#app">HOME</a>
        </li>
        <li>
          <a href="#aboutUs">ABOUT US</a>
        </li>
        <li>
          <a href="#objectives">OBJECTIVES</a>
        </li>
        <li>
          <a href="#stories">STORIES</a>
        </li>
        <li>
          <a href="#gallery">GALLERY</a>
        </li>
      </ul>

      <div className="btn-wrapper">
        <button
          className="btn"
          onClick={() => {
            openModal();
          }}
        >
          Join Now
        </button>
      </div>

      <button
        className="hamburger"
        onClick={() => {
          console.log("This button has been clicked");
          setIsNavExpanded(!isNavExpanded);
          console.log(isNavExpanded);
        }}
      >
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default Navbar;
