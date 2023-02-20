import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import CSOKLogo from "../../assets/CSOK_2.png";

const Navbar = ({ isModalOpen, openModal, closeModal }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <div>
        <img className="logo" src={CSOKLogo} alt="" />
      </div>
      <div className={`navigation-menu ${isNavExpanded ? "expanded" : " "}`}>
        <ul>
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

          <div>
            <button
              className="btn"
              onClick={() => {
                openModal();
              }}
            >
              Join Now
            </button>
          </div>
        </ul>
      </div>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default Navbar;
