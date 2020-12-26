import React from "react";
import "./HiddenCardInfo.css";

const HiddenCardInfo = ({blockReward, startBlock, bonusEndBlock, bonus, endBlock, bonnumFarmersus}) => {
  return (
    <div className="hiddenCardInfo">
      <div className="percentageDiv">
        <div className="arrowLogo">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
        <div className="arrowLogoDetail">
          <p>APY (in dollar value)</p>
          <h2>39%</h2>
          <p>
            This fluctuates based on the reward token price and the value of
            total lp tokens farming
          </p>
        </div>
      </div>
      <hr />
      <div className="dollarDiv">
        <div className="tintLogo">
          <i className="fa fa-tint" aria-hidden="true"></i>
        </div>
        <div className="tintLogoDetail">
          <p>Total Ip tokens farming</p>
          <h2>$ 216,068</h2>
          <p>578.3487 UNIV2</p>
        </div>
      </div>
      <hr />
      <div className="blockRewardDiv">
        <div className="cubeLogo">
          <i className="fa fa-cube" aria-hidden="true"></i>
        </div>
        <div className="cubeLogoDetail">
          <p>Block reward</p>
          <div>
          <h2><span id="hiden-no">{blockReward}</span></h2>
          <h4 className="uncl"> UNCL</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="startBlockDiv">
        <div className="toggleOffLogo">
          <i className="fa fa-toggle-off" aria-hidden="true"></i>
        </div>
        <div className="toggleOffLogoDetail">
          <p>Start Block</p>
          <h2>{startBlock}</h2>
        </div>
      </div>
      <hr />
      <div className="bonusMultiplierDiv">
        <div className="toggleOnLogo">
          <i className="fa fa-toggle-on" aria-hidden="true"></i>
        </div>
        <div className="toggleOnLogoDetail">
          <p className="sameP2">Bonus Multiplier / Bonus end block</p>
          <p className="sameP">{bonus}x Bonus</p>
          <p className="sameP">Sat 21 Nov 14:52 / a month ago</p>
          <p className="sameP2">Block:{bonusEndBlock} </p>
        </div>
      </div>
      <hr />
      <div className="endBlockDiv">
        <div className="toggleOff2Logo">
          <i className="fa fa-toggle-off" aria-hidden="true"></i>
        </div>
        <div className="toggleOff2LogoDetail">
          <p>End block (in 4 months)</p>
          <h2>{endBlock}</h2>
        </div>
      </div>
      <hr />
      <div className="amountVaultDiv">
        <div className="shieldLogo">
          <i className="fa fa-shield" aria-hidden="true"></i>
        </div>
        <div className="shieldLogoDetail">
          <p>Amount in vault</p>
          <h2>14,195.5974 UNCL</h2>
        </div>
      </div>
      <hr />
      <div className="numberFarmerDiv">
        <div className="userLogo">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
        <div className="userLogoDetail">
          <p>Number of farmers</p>
          <h2>{bonnumFarmersus}</h2>
        </div>
      </div>
      <hr />
      <div className="pendingRewardDiv">
        <div className="arrowDownLogo">
          <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
        </div>
        <div className="arrowDownLogoDetail">
          <p>Your pending reward</p>
          <h2>0 UNCL</h2>
        </div>
      </div>
    </div>
  );
};
export default HiddenCardInfo;
