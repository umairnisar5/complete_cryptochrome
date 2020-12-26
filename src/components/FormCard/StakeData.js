import React from "react";
import headerLogo from "./images/headerLogo.png";
import "./StakeData.css";

const StakeData = () => {
  return (
    <div className="stakeDataContainer">
      <div className="stakeHeader">
      <div>
        <img src={headerLogo} height="35" />
        <h2>UNCX</h2>
        </div>
        <div>
        <img src={headerLogo} height="35" />
        <h2>WETH</h2>
        </div>
      </div>
      <div className="stakeDes">
        <p>You need UniV2 liquidity tokens to farm this pool</p>
      </div>
      <div className="stakeFooter">
        <i className="fa fa-paw" aria-hidden="true"></i>
        <p>Get liquidity tokens</p>
      </div>
    </div>
  );
};

export default StakeData;
