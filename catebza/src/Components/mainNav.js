/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.css";
import logo from "./Media/iconfinder_Fruits_-_Color-06_4619636.png";
import phoneIcon from "./Media/iconfinder__59ui_2303164.png";
import {Link} from "react-router-dom"

class MainNav extends React.Component{

    render(){
        return(
        <div className="mainNavParentDiv">
            <nav>
                <div className="mainLogo" title="Main"><Link to="/"><p>CATEBZA TRADING</p><img src={logo} alt="logo"></img></Link></div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Our Products</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className="contactDetails">
                    <img src={phoneIcon} alt="mobile icon"  className="phoneIcon" /><p className="p1">(+27) 071 433 7806/</p><p className="p2"> (+27) 072 334 4381</p>
                </div>
            </nav>
            
        </div>
        )
    }

}
export default MainNav