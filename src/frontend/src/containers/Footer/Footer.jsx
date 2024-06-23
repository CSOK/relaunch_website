import React from "react";
import { FooterNavs } from "./constants";
import "../../index.css"

import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="w-full debug flex justify-center border-t border-[#ECE4DE] py-20 bg-white">
    <div className="w-full flex-col lg:flex-row max-w-screen-xl mx-5 md:mx-20 flex gap-10 justify-between">
      <div className="flex flex-col gap-9 ">
        <div>
          <Logo />
        </div>
       
      </div>
      <div className="flex justify-between md:gap-28">
        {FooterNavs.map((el, _i) => (
          <div key={_i} className="flex flex-col gap-5">
            <h4 className="text-black font-semibold">{el.category}</h4>
            <ul className="flex flex-col gap-5">
              {el.navs.map((nav, _i) => (
                <li key={_i} className="text-black">
                  <a href={nav.href}>{nav.value}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
  );
};

export default Footer;
