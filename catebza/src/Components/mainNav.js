/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css";
import logo from "./Media/iconfinder_Fruits_-_Color-06_4619636.png";
import phoneIcon from "./Media/iconfinder__59ui_2303164.png";
import {Link} from "react-router-dom"
import mobileMenuIcon from "./Media/HamburgerMenuIcon.png";

class MainNav extends React.Component{
    constructor(){
        super();
        this.sideBarRef=React.createRef();
        this.hamburgerRef=React.createRef();
        this.state={
            toggleSideNav:true
        }
    }
    openSideNav=()=>{
        
        if (this.state.toggleSideNav===true){
            
            this.sideBarRef.current.style.visibility="visible";
            this.sideBarRef.current.style.transtition="all 0.5s ease-in-out";
            this.hamburgerRef.current.style.backgroundColor="green";
            this.setState({
                toggleSideNav:false
            })
        }
        else{
            this.sideBarRef.current.style.visibility="hidden";
            this.hamburgerRef.current.style.backgroundColor="#35EF2E";
            this.setState({
                toggleSideNav:true
            })
        }

    }

    render(){
        return(
        <div className="mainNavParentDiv">
            <div className="mobileSideNav" ref={this.sideBarRef}>
                <ul className="sideMenu">
                    <li><Link to="/CatebzaTrading" onClick={this.openSideNav}>Home</Link></li>
                    <li><Link to="/products" onClick={this.openSideNav}>Our Products</Link></li>
                    <li><Link to="/contact" onClick={this.openSideNav}>Contact Us</Link></li>
                    <li className="phone-No">(+27) 072 334 4381</li>
                    <li className="phone-No">(+27) 071 433 7806</li>
                </ul>
            </div>
            <nav>
                <img className="mobileMenu" src={mobileMenuIcon} alt="menu" ref={this.hamburgerRef} onClick={this.openSideNav}></img>
                <div className="mainLogo" title="Main"><Link to="/CatebzaTrading"><p>CATEBZA TRADING</p><img src={logo} alt="logo"></img></Link></div>
                <ul>
                    <li><Link to="/CatebzaTrading">Home</Link></li>
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