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
            <div className="ReelPages">
                <Carousel>
                    <Cards name={Images.spice4}/>
                    <Cards name={Images.spice2}/>
                    <Cards name={Images.spice1}/>
                    <Cards name={Images.spice5}/>
                    <Cards name={Images.spice3}/>
                </Carousel>
            </div>
            </div>
        )
    }
}
export default SpicesGallery;