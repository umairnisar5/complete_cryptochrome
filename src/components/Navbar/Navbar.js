import React from 'react';
import {Link} from "react-router-dom"
import "./Navbar.css";

const Navbar = props => {

    const connectBtn = <button className="btn btn-primary" data-toggle="modal" data-target="#myWallet" style={{width:"150px",borderRadius:"50px"}}>Connect</button>
    const address = <button className="btn btn-primary text-center" style={{width:"150px",borderRadius:"50px"}}>{props.address}</button>
    
    const top = props.connected ? address : connectBtn;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav1">
            <img src="img/logo.svg" width='50' alt=""/>
            <Link className="navbar-brand" to="/#" style={{color:"#fff", fontSize:"24px",fontWeight:"bold", marginLeft:"20px"}}> CryptoChrome</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"1100px"}}>
                <div className="row">
                    <div className="col-sm-6">{top}</div>
                    <div className="col-sm-6">
                        <button className="btn btn-warning"><span className="fa fa-cog"></span></button>
                    </div> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
