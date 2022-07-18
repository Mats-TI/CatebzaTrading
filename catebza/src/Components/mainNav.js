/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css";
import logo from "./Media/CatebzaTrading.png";
import {Link} from "react-router-dom"
import mobileMenuIcon from "./Media/HamburgerMenuIcon.png";
import {HashLink} from 'react-router-hash-link'

class MainNav extends React.Component{
    constructor(){
        super();
        this.sideBarRef=React.createRef();
        this.hamburgerRef=React.createRef();
        this.state={
            toggleSideNav:true,
            scrolledNav:false
        }
    }
    changeNavColour=()=>{
        if(window.scrollY >15){
            this.setState({
            scrolledNav:true
            })
        }
        else{
            this.setState({
            scrolledNav:false
        })
        }  
    };
    componentDidMount=()=>{
        window.addEventListener("scroll",this.changeNavColour)
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
                    <li><Link to="/" onClick={this.openSideNav} style={{textDecoration:"none"}}>Home</Link></li>
                    <li><Link to="/products" onClick={this.openSideNav} style={{textDecoration:"none"}} >Our Products</Link></li>
                    <li><Link to="/contact" onClick={this.openSideNav} style={{textDecoration:"none"}}>Contact Us</Link></li>
                    <li className="phone-No">(+27) 072 334 4381</li>
                    <li className="phone-No">(+27) 071 433 7806</li>
                </ul>
            </div>
            <nav className={this.state.scrolledNav ? "active":""}>
                <img className="mobileMenu" src={mobileMenuIcon} alt="menu" ref={this.hamburgerRef} onClick={this.openSideNav}></img>
                <a href="/CatebzaTrading" className={this.state.scrolledNav ? "mainLogoAnchor-active" : "mainLogoAnchor-inactive"}><img src={logo} className="mainLogo" alt="logo"></img></a>
                <ul>
                    <li><a href="/CatebzaTrading" style={{textDecoration:"none"}}>Home</a></li>
                    <li><Link to="/products" style={{textDecoration:"none"}}>Our Products</Link></li>
                    <li><HashLink smooth to="/#MainGallery" style={{textDecoration:"none"}}>Gallery</HashLink></li>
                    <li><Link to="/contact" style={{textDecoration:"none"}}>Contact Us</Link></li>
                    
                </ul>
            </nav>
            
        </div>
        )
    }

}
export default MainNav