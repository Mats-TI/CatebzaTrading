import React from 'react';
import Images from "./imgDatabase";
import Cards from "./carouselCards";
import Carousel from "react-elastic-carousel";
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css" ; import "./styleIpad.css"; import "./styleMobile.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"

class Gallery extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="productWrapper">
            <div className="ReelPages">
                <Carousel>
                    <Cards name={Images.dye4}/>
                    <Cards name={Images.dye2}/>
                    <Cards name={Images.dye3}/>
                    <Cards name={Images.dye1}/>
                </Carousel>
            </div>
            </div>
        )
    }
}
export default Gallery;