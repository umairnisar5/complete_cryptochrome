import React from "react";
import headerLogo from "./images/headerLogo.png";
import {connect} from "react-redux";
import "./HiddenCards.css";

export const HiddenCards2 = (props) => {
  return (
    <div className="hiddenCardContainer">
      <div className="cardLogo">
        <img src={headerLogo} height="35" />
      </div>
      <div className="cardDetail">
        <p>Uniswap pair</p>
        <h2>UNCX / WETH</h2>
        <button>
          {props.state.rewardToken}
          <i class="fa fa-clone" aria-hidden="true"></i>
        </button>
        <br />
        <a href="#"> view on Uniswap</a>
      </div>
    </div>
  );
};


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps)(HiddenCards2);
