import React from 'react';
import Images from "./imgDatabase";
import Cards from "./carouselCards";
import Carousel from "react-elastic-carousel";
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"

class SpicesGallery extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="productWrapper">
            <h2>Atchaar Spices</h2>
            <div className="ReelPages">
                <Carousel>
                    <Cards name={Images.spices8}/>
                    <Cards name={Images.spices9}/>
                    <Cards name={Images.spices10}/>
                    <Cards name={Images.spices6}/>
                </Carousel>
            </div>
            </div>
        )
    }
}
export default SpicesGallery;