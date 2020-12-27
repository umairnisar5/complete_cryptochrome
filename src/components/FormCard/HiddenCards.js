import React from "react";
import headerLogo from "./images/headerLogo.png";
import "./HiddenCards.css";
import { v4 as uuidv4 } from "uuid";


export const HiddenCards = ({ lpToken }) => {
  const myInput = uuidv4();
  const clickCopyHandler = () => {
    var elemToCopy = document.getElementById(myInput);
    const textToCopy = myInput.innerText;
    alert("Copy");
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
        <button onClick={clickCopyHandler} >
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
