import React from "react";
import "./Sponsors.scss";
import dehub from "../../assets/sponsors/dehub.png";
import dkut from "../../assets/sponsors/dkut.png";
import gdsc from "../../assets/sponsors/gdsc.png";
import microsoft from "../../assets/sponsors/microsoft.png";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h1>Sponsors & Organizers.</h1>
      <div className="container">
          <img src={dehub} alt="" />
          <img src={dkut} alt="" />
          <img src={gdsc} alt="" />
          <img src={microsoft} alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
