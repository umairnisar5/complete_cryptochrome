import React from 'react'
import {Link} from "react-router-dom"

export default function Account() {
    return (
        <div className="container">
            <center>
                <h1 style={{color:"#fff"}}>Account</h1>
                <div className="jumbotron" id="ticket">
                    <img src="img/icon/farm_token.png" alt=""/>
                        <p style={{color:"#fff", fontWeight:"bold"}}>Your not farming any tokens yet!</p>
                        <Link to="/">
                            <button className="btn btn-primary btn-lg" style={{background:"none",color:"#fff", border:"2px solid #fff"}}>View Farm</button>
                        </Link>
                </div>
            </center>
        </div>
  
    )
}