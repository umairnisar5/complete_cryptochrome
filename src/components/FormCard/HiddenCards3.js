import React, { useState } from "react";
import headerLogo from "./images/headerLogo.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./HiddenCards.css";

export const HiddenCards3 = ({ address }) => {
  const [value, setValue] = useState("");
  return (
    <div className="hiddenCardContainer">
      <div className="cardLogo">
        <img src={headerLogo} height="35" />
      </div>
      <div className="cardDetail">
        <p>Uniswap pair</p>
        <h2>UNCX / WETH</h2>
        <CopyToClipboard text={value}>
          <button>
            <span
              className="ip-btn"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              {address}
            </span>
            <i class="fa fa-clone" aria-hidden="true"></i>
          </button>
        </CopyToClipboard>
        <br />
        <a href="https://etherscan.io/" target="blank">
          Etherscan
        </a>
      </div>
    </div>
  );
};

export default HiddenCards3;
