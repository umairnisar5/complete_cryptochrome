import React from "react";
import headerLogo from "./images/headerLogo.png";
import "./HiddenCards.css";

export const HiddenCards = ({ lpToken }) => {
  const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  return (
    <div className="hiddenCardContainer">
      <div className="cardLogo">
        <img src={headerLogo} height="35" />
      </div>
      <div className="cardDetail">
        <p>Uniswap pair</p>
        <h2>UNCX / WETH</h2>
        <button onClick={copyToClipboard}>
         <span className="ip-btn"> {lpToken}</span>

          <i class="fa fa-clone" aria-hidden="true"></i>
        </button>
        <br />
        <a href="#"> view on Uniswap</a>
      </div>
    </div>
  );
};

export default HiddenCards;
