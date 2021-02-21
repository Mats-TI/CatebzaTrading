/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React from 'react';
import catebzaLogo from "./Media/CatebzaLogo.png"
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css"
import Cards from "./carouselCards"
import Carousel from "react-elastic-carousel"
import Image from "./imgDatabase"
import {Link} from "react-router-dom"



class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.carouselRef=React.createRef();
        //this.moveLeft=this.moveLeft.bind(this);
    }
    render(){

        return(
        <div className="wrapper" id="wrapper">
            
            <section className="info">
                <img src={catebzaLogo} alt="logo"/>
                <h2>Your Ideal stop for a range of fruit produce,atchaar, atchaar spices and dye! Available for both wholesale and retail orders.</h2>
            </section>
            <div ref={this.carouselRef} className="CarouselDiv">
            <Carousel >
                <Cards name={Image.img1}/>
                <Cards name={Image.img2}/>
                <Cards name={Image.img3}/>
                <Cards />
                <Cards />
            </Carousel>
        </div>

            <p className="bottomLinks"><Link to="/products/Atchaar" style={{color:"black"}} title="View Atchaar">Atchaar</Link> | <Link to="/products/AtchaarSpices" style={{color:"black"}} title="View Atchaar Spices">Spices</Link> | <Link to="/products/AtchaarDye" style={{color:"black"}} title="View Atchaar Dye">Dye</Link> | <Link to="/products/bananas" style={{color:"black"}} title="View Bananas">Bananas</Link></p>
    
        </div>
        )
    }
    

    
}
export default HomePage