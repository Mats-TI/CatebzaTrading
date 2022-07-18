import React from 'react';
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css"
import {Carousel} from "react-responsive-carousel"
import axios from 'axios';

class Gallery extends React.Component{
    constructor(){
        super()
        this.state={
            GalleryImages:null
        }
    }
    getImages=async ()=>{
        const Images=[]
        await axios.get('http://localhost:5001/api/testing').then((res)=>{
        res.data.forEach(element => {
            Images.push(element)
            

        });
        })
        await this.setState({
            GalleryImages:Images
        });
    }
    componentDidMount(){
        this.getImages()
    }
    render(){
            return(this.state.GalleryImages ? 
            (<div ref={this.carouselRef} id="MainGallery">
            <Carousel showThumbs="false" infiniteLoop="true" autoPlay="true" interval={5000} emulateTouch="true">
                <section>
                    <img src={this.state.GalleryImages[0]} alt="Gallery Img"/>
                    <p className="legend">Bananas, Full Crate</p>
                </section>
                <section>
                    <img src={this.state.GalleryImages[3]} alt="Gallery Img"/>
                    <p className='legend'>Dye, small bottle</p>
                </section>
                <section>
                    <img src={this.state.GalleryImages[5]} alt="Gallery Img"/>
                    <p className='legend'>Atchar spices, ~80ml</p>
                </section>
                <section>
                    <img src={this.state.GalleryImages[4]} alt="Gallery Img"/>
                    <p className='legend'>Atchar spices, ~80ml</p>
                </section>
                <section>
                    <img src={this.state.GalleryImages[1]} alt="Gallery Img"/>
                    <p className='legend'>Atchar, ~10kg</p>
                </section>
                <section>
                    <img src={this.state.GalleryImages[2]} alt="Gallery Img"/>
                    <p className='legend'>Atchar, ~50kg</p>
                </section>
            </Carousel>
            </div>) : (<h1>Lodading...</h1>))
    }
}
export default Gallery
