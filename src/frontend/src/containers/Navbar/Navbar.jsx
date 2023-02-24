import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import CSOKLogo from "../../assets/CSOK_2.png";

const Navbar = ({ openModal }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    // <nav className={`navigation ${isNavExpanded ? "expanded" : " "}`}>
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={CSOKLogo} alt="" />
      </div>
      <div className={`navbar-links ${isNavExpanded ? "active" : ""}`}>
        <ul>
          <li>
            <a
              href="#app"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#aboutUs"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#objectives"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              OBJECTIVES
            </a>
          </li>
          <li>
            <a
              href="#stories"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              STORIES
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              GALLERY
            </a>
          </li>
        </ul>
      </div>

      <div className={`btn-wrapper ${isNavExpanded ? "active" : ""}`}>
        <button
          className="btn"
          onClick={() => {
            openModal();
            setIsNavExpanded(false);
          }}
        >
          Join Now
        </button>
      </div>

      <div
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
