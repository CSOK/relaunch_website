import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import { Register } from "../Form/Register";
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <GiHamburgerMenu />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
            <a href="/">OBJECTIVES</a>
          </li>
          <li>
            <a href="/">STORIES</a>
          </li>
          <li>
            <a href="/">GALLERIES</a>
          </li>
          <li>
            <button className="btn btn-primary"><Register/></button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
