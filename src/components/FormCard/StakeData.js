import React from "react";
import headerLogo from "./images/headerLogo.png";
import "./StakeData.css";

const StakeData = () => {
     

  return (
    <div >
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
      <div className="stakeFooter" 
          data-toggle="modal"
          data-target="#myWallet">
        <i className="fa fa-paw" aria-hidden="true"></i>
        <p>Get liquidity tokens</p>
      </div>
<hr />
      <div  className="my-first-div">
      <div className="univ2-div">
        <p>Avaiable to stake</p>
        <p>🛇UNIv2</p>
        <p>$ 0</p>
     </div>
     <div >
        <button className="stake-btn">stake</button>
        </div>
      </div>

      
      <div className="second-div">
      <div className="icon-div">
      <div id="add-more-div">
      <button >Add more liquidity</button>
      <i class="fa fa-clone" aria-hidden="true"></i>
      </div>
      <div className="your-pool-div">
      <p>Your pool share: 0.01% </p>
      </div>
      </div>
      <div className="third-div">
        <div className="third-1-div">
        <h5>Staking</h5>
        <h4>0.015471961 UNIv2</h4>
        <p>$ 5</p>
        </div>
        <div >
        <button className="withdraw-btn">Withdraw</button>
        </div>
      </div>
     
      <div className="forth-div">
      <div className="unclaim-p">
        <p >Unclaimed rewards</p>
        </div>
        <div className="unclaimed-div">
        <div className="uncl-logo">
        <div className="uncl-div">
        <img src={headerLogo} height="35" />
        <h2>UNCL</h2>
        </div>
        <p>Wallet balance:</p>
        </div>
        <div className="digit">
        <h2>0.0106160</h2>
        <p>0</p>
        </div>
        </div>
      
      <button>Harvest</button>
      </div>
      

      </div>
    </div>
  );
};

export default StakeData;
