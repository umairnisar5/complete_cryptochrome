import React from "react";
import headerLogo from "./images/headerLogo.png";
import "./HiddenCards.css";

export const HiddenCards = ({ lpToken }) => {
  // function myFunction() {
  //   var copyText = document.getElementById("myInput");
  //   copyText.select();
  //   copyText.setSelectionRange(0, 99999)
  //   document.execCommand("copy");
  //   alert("Copied the text: " + copyText.value);
  // }
  return (
    <div className="hiddenCardContainer">
      <div className="cardLogo">
        <img src={headerLogo} height="35" />
      </div>
      <div className="cardDetail">
        <p>Uniswap pair</p>
        <h2>UNCX / WETH</h2>
        <button >
         <span className="ip-btn" id="myInput"> {lpToken}</span>

          <i class="fa fa-clone" aria-hidden="true"></i>
        </button>
        <br />
        <a href="#"> view on Uniswap</a>
      </div>
    </div>
  );
};

export default HiddenCards;
