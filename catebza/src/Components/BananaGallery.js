import React from 'react';
import Images from "./imgDatabase";
import Cards from "./carouselCards";
import Carousel from "react-elastic-carousel";
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"

class Gallery extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="productWrapper">
            <h2>Bananas</h2> 
            <div className="ReelPages">
                <Carousel >
                    
                    
                    <Cards name={Images.ban3}/>
                    <Cards name={Images.ban5}/>
                    <Cards name={Images.ban6}/>
                    <Cards name={Images.ban7}/>
                </Carousel>
            </div>
            </div>
        )
    }
}
export default Gallery;