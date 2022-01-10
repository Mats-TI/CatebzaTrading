import React from 'react';
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css"
import {Carousel} from "react-responsive-carousel"
import Image from "./imgDatabase"
import logo from "./Media/CatebzaTrading.png";

class Gallery extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div ref={this.carouselRef} id="MainGallery">
            <Carousel showThumbs="false" infiniteLoop="true" autoPlay="true" interval={5000}>
                <section>
                    <img src={Image.ban7} />
                    <p className="legend">Bananas, Full Crate</p>
                </section>
                <section>
                    <img src={Image.dye3} />
                    <p className='legend'>Dye, small bottle</p>
                </section>
                <section>
                    <img src={Image.spices10} />
                    <p className='legend'>Atchar spices, ~80ml</p>
                </section>
                <section>
                    <img src={Image.spices8}/>
                    <p className='legend'>Atchar spices, ~80ml</p>
                </section>
                <section>
                    <img src={Image.atchaar5} />
                    <p className='legend'>Atchar, ~10kg</p>
                </section>
                <section>
                    <img src={Image.atchaar7}/>
                    <p className='legend'>Atchar, ~50kg</p>
                </section>
            </Carousel>
            </div>
        )
    }
}
export default Gallery
