import React from 'react'
import CSOKLogo from "../../assets/CSOK_2.png";

function Logo() {
  return (
    <div className="flex gap-3 items-center w-40">
      <img src={CSOKLogo} alt="" />
    </div>
  );
}

export default Logo