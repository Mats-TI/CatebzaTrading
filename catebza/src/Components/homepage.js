/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React from 'react';
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css"
import {Carousel} from "react-responsive-carousel"
import Image from "./imgDatabase"
import logo from "./Media/CatebzaTrading.png";
import Gallery from "./mainGallery"



class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.carouselRef=React.createRef();
        //this.moveLeft=this.moveLeft.bind(this);
    }
    render(){

        return(
        <div className="wrapper" id="wrapper">
            
            <section className="landingPage">
                <img src={logo} className="mainLogo" alt="logo"></img>
                <h1 className="welcomeInfo"> Welcome to your ideal stop for a range of fruit produce, atchar, atchar spices and dye!</h1>
                <h2>Available for both wholesale and retail orders.</h2>
            </section>
            <Gallery />
            </div>
            
        )
    }
    

    
}
export default HomePage