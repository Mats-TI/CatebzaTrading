/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css";
import logo from "./Media/CatebzaTrading.png";
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
                    <li><Link to="/" onClick={this.openSideNav}>Home</Link></li>
                    <li><Link to="/products" onClick={this.openSideNav}>Our Products</Link></li>
                    <li><Link to="/contact" onClick={this.openSideNav}>Contact Us</Link></li>
                    <li className="phone-No">(+27) 072 334 4381</li>
                    <li className="phone-No">(+27) 071 433 7806</li>
                </ul>
            </div>
            <nav>
                <img className="mobileMenu" src={mobileMenuIcon} alt="menu" ref={this.hamburgerRef} onClick={this.openSideNav}></img>
                <Link to="/"><img src={logo} className="mainLogo" alt="logo"></img></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Our Products</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            
        </div>
        )
    }

}
export default MainNav