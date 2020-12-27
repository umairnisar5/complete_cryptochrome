import React from "react";
import { Link } from "react-router-dom";
import "./Navigate.css";
export default function Navigate() {
  return (
    <div className="jumbotron" id="section2">
      <div className="navigate-row">
        <Link to="/token">
          <div className="token-div">
            <i className="fa fa-circle-o fa-3x"></i>
            <h3>TOKEN</h3>
          </div>
        </Link>

        <Link to="/">
          <div>
            <i className="fa fa-superpowers fa-3x"></i>
            <h3>FARM</h3>
          </div>
        </Link>

        <Link to="/account">
          <div>
            <span className="fa fa-user fa-3x"></span>
            <h3>ACCOUNTS</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
