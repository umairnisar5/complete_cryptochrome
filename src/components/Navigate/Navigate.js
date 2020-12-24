import React from 'react'
import {Link} from "react-router-dom"
import "./Navigate.css"
export default function Navigate() {
    return (
        <div className="jumbotron" id="section2" style={{borderRadius:"0px"}}> 
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                    <Link to="/token">
                        <div className="card" id="card_module" style={{borderRadius:"30px",background:"#f0103a"}}>
                            <center><span className="fa fa-circle-o fa-3x"></span><h3>TOKEN</h3></center>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-2">
                    <Link to="/">
                        <div className="card" id="card_module" style={{borderRadius:"30px",background:"#f0103a"}}>
                            <center><span className="fa fa-superpowers fa-3x"></span><h3>FARM</h3></center>
                        </div>
                    </Link>
                </div>
                
                <div className="col-sm-2">
                    <Link to="/account">
                        <div className="card" id="card_module" style={{borderRadius:"30px",background:"#f0103a"}}>
                            <center><span className="fa fa-user fa-3x"></span><h3>ACCOUNTS</h3></center>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
