/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React from 'react';
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
            
            <section className="landingPage">
                
            </section>
            <div ref={this.carouselRef} className="CarouselDiv">
            <Carousel >
                <Cards name={Image.ban7}/>
                <Cards name={Image.dye2}/>
                <Cards name={Image.dye1}/>
                <Cards name={Image.ban6}/>
                <Cards name={Image.spices8}/>
                <Cards name={Image.atchaar5}/>
                <Cards name={Image.spice1}/>
                <Cards name={Image.atchaar6}/>
                <Cards name={Image.spices9}/>

                

            </Carousel>
        </div>

            <p className="bottomLinks"><Link to="/products/Atchaar" style={{color:"black"}} title="View Atchaar">Atchaar</Link> | <Link to="/products/AtchaarSpices" style={{color:"black"}} title="View Atchaar Spices">Spices</Link> | <Link to="/products/AtchaarDye" style={{color:"black"}} title="View Atchaar Dye">Dye</Link> | <Link to="/products/bananas" style={{color:"black"}} title="View Bananas">Bananas</Link></p>
    
        </div>
        )
    }
    

    
}
export default HomePage