import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import CSOKLogo from "../../assets/CSOK_2.png";

const Navbar = ({ isModalOpen, openModal, closeModal }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className={`navigation ${isNavExpanded ? "expanded" : " "}`}>
      <div className="logo-wrapper">
        <img src={CSOKLogo} alt="" />
      </div>
      <ul className={`navigation-menu `}>
        <li>
          <a href="/">HOME</a>
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
