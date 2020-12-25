import React from 'react'

export default function Token() {
    return (
        <div className="container">
            <center>
                <div className="jumbotron" id="ticket">
                    <h2 style={{ textAlign: "left" }}>Farmable tokens</h2>
                    <form method="POST">
                        <input type="text" name="find" placeholder="Search Tokens" className="form-control" style={{ background: "none", color: "#fff" }} />
                    </form>
                </div>
            </center>
        </div>
    )
}
