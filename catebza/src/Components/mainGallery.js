import React from 'react';
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css"
import {Carousel} from "react-responsive-carousel"
import Image from "./imgDatabase"

class Gallery extends React.Component{
    render(){
        return(
            <div ref={this.carouselRef} id="MainGallery">
            <Carousel showThumbs="false" infiniteLoop="true" autoPlay="true" interval={5000}>
                <section>
                    <img src={Image.ban7} alt="Gallery Img"/>
                    <p className="legend">Bananas, Full Crate</p>
                </section>
                <section>
                    <img src={Image.dye3} alt="Gallery Img"/>
                    <p className='legend'>Dye, small bottle</p>
                </section>
                <section>
                    <img src={Image.spices10} alt="Gallery Img"/>
                    <p className='legend'>Atchar spices, ~80ml</p>
                </section>
                <section>
                    <img src={Image.spices8} alt="Gallery Img"/>
                    <p className='legend'>Atchar spices, ~80ml</p>
                </section>
                <section>
                    <img src={Image.atchaar5} alt="Gallery Img"/>
                    <p className='legend'>Atchar, ~10kg</p>
                </section>
                <section>
                    <img src={Image.atchaar7} alt="Gallery Img"/>
                    <p className='legend'>Atchar, ~50kg</p>
                </section>
            </Carousel>
            </div>
        )
    }
}
export default Gallery
