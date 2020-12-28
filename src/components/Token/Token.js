import React from "react";
import "../Token/token.css"
export default function Token() {
  return (
    <div>
      <center>
        <div id="token-ticket">
          <h2 style={{ textAlign: "left" }}>Farmable tokens</h2>
          <form method="POST">
            <input
              type="text"
              name="find"
              placeholder="Search Tokens"
              className="form-control"
              style={{ background: "none", color: "#fff" }}
            />
          </form>
        </div>
      </center>
    </div>
  );
}
