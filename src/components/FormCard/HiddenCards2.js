import React from "react";
import headerLogo from "./images/headerLogo.png";
import {connect} from "react-redux";
import "./HiddenCards.css";

export const HiddenCards2 = ({rewardToken}) => {
  return (
    <div className="hiddenCardContainer">
      <div className="cardLogo">
        <img src={headerLogo} height="35" />
      </div>
      <div className="cardDetail">
        <p>Uniswap pair</p>
        <h2>UNCX / WETH</h2>
        <button >
          <span className="ip-btn">{rewardToken}</span>
          <i class="fa fa-clone" aria-hidden="true"></i>
        </button>
        <br />
        <a href="https://etherscan.io/address/0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49"> view on Uniswap</a>
      </div>
    </div>
  );
};

export default HiddenCards2;
