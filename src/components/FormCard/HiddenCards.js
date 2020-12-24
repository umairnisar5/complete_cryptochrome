import React from 'react'
import headerLogo from "./images/headerLogo.png";


export const HiddenCards = () => {
    return (
        <div>
            <div>
                <img src={headerLogo} height="35" />
            </div>
            <div>
                <p>Uniswap pair</p>
                <h2>UNCX / WETH</h2>
                <a href="#"> <h3> 0xC70bB2736e218861DCa818d1e9f7A1930Fe61E5b <i class="fa fa-clone" aria-hidden="true"></i>
                </h3> </a>
                <a href="#"> view on Uniswap </a>
            </div>
        </div>
    );
}

export default HiddenCards;