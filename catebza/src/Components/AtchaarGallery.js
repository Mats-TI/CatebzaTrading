import React from 'react';
import Images from "./imgDatabase";
import Cards from "./carouselCards";
import Carousel from "react-elastic-carousel";
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"

class AtchaarGallery extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="productWrapper">
            <div className="ReelPages">
                <Carousel>
                    <Cards name={Images.atchaar2}/>
                    <Cards name={Images.atchaar1}/>
                    <Cards name={Images.atchaar4}/>
                    <Cards name={Images.atchaar3}/>
                </Carousel>
            </div>
            </div>
        )
    }
}
export default AtchaarGallery;