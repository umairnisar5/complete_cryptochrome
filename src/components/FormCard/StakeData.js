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
<hr />
      <div  className="my-first-div">
      <div className="univ2-div">
        <p>Avaiable to stake</p>
        <p>0 UNIv2</p>
        <p>$ 0</p>
     </div>
     <div >
        <button className="stake-btn">stake</button>
        </div>
      </div>

      <hr />
      <div className="second-div">
      <div className="icon-div">
      <i class="fa fa-clone" aria-hidden="true"></i>
      <button>Add more liquidity</button>
      <p>Your pool share: <p className="number">0.01%</p> </p>
      </div>
      <div className="third-div">
        <h5>Staking</h5>
        <h2>0.015471961 UNIv2</h2>
        <button>Withdraw</button>
        <p>$ 5</p>
      </div>
      <hr />
      <div className="forth-div">
        <p>Unclaimed rewards</p>
        <div className="uncl-logo">
        <img src={headerLogo} height="35" />
        <h2>UNCL</h2>
        <p>Wallet balance:</p>
        </div>
        <div className="digit">
        <h2>0.0106160</h2>
        </div>
      </div>
      <button>Harvest</button>
      <hr />

      </div>
    </div>
  );
};

export default StakeData;
