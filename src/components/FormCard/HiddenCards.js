import React from "react";
import headerLogo from "./images/headerLogo.png";
import "./HiddenCards.css";

export const HiddenCards = ({ lpToken }) => {
  return (
    <div className="hiddenCardContainer">
      <div className="cardLogo">
        <img src={headerLogo} height="35" />
      </div>
      <div className="cardDetail">
        <p>Uniswap pair</p>
        <h2>UNCX / WETH</h2>
        <button>
          {lpToken}
          <i class="fa fa-clone" aria-hidden="true"></i>
        </button>
        <br />
        <a href="#"> view on Uniswap</a>
      </div>
    </div>
  );
};

export default HiddenCards;
