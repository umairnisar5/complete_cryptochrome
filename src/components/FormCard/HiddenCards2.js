import React from "react";
import headerLogo from "./images/headerLogo.png";
import { v4 as uuidv4 } from "uuid";
import "./HiddenCards.css";

export const HiddenCards2 = ({ rewardToken }) => {
  const textElemId = uuidv4();
  const clickCopyHandler = () => {
    var elemToCopy = document.getElementById(textElemId);
    const textToCopy = elemToCopy.innerText;
    alert("Copy")
    navigator.clipboard.writeText(textToCopy).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };
  return (
    <div className="hiddenCardContainer">
      <div className="cardLogo">
        <img src={headerLogo} height="35" />
      </div>
      <div className="cardDetail">
        <p>Uniswap pair</p>
        <h2>UNCX / WETH</h2>
        <button onClick={clickCopyHandler}>
          <span className="ip-btn" id={textElemId}>
            {rewardToken}
          </span>
          <i class="fa fa-clone" aria-hidden="true"></i>
        </button>
        <br />
        <a href="https://etherscan.io/address/0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49">
          {" "}
          view on Uniswap
        </a>
      </div>
    </div>
  );
};

export default HiddenCards2;
