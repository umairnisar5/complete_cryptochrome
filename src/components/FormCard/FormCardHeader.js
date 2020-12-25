import React from "react";
import headerLogo from "./images/headerLogo.png";
import "./FormCardHeader.css";

const FormCardHeader = () => {
  return (
    <div className="cardHeaderContainer">
      <div className="headerLogo">
        <img src={headerLogo} height="35" />
      </div>
      <div className="titleSubtitle">
        <h2>Farm UNCL</h2>
        <p>UNCX / WETH</p>
      </div>
    </div>
  );
};

export default FormCardHeader;
