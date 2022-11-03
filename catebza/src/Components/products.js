/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css";
import bananas from "./Media/productImgs/banana_7.jpg";
import dyes from "./Media/productImgs/dye_4.jpg";
import atchaars from "./Media/productImgs/Atchaar_4.jpg";
import spice from "./Media/productImgs/spice_8.jpg"

import {Link} from "react-router-dom";

class Products extends React.Component{
    render(){
        return(

            <div className="productSection" id="productSection">
                <h1 className="productsHeading">What we have in store.</h1>
                <h3 className='productSubheading1'>Browse through our selection of products...</h3>
                <section className="productsDiv">
                    <div className='products-gallery Banana'>
                        <p>Bananas</p>
                    </div>
                    <div className='products-gallery Atchaar'>
                        <p>Atchaar</p>
                    </div>
                    <div className='products-gallery Spices'>
                        <p>Spices</p>
                    </div>
                    <div className='products-gallery Dye'>
                        <p>Dye</p>
                    </div>                    
                </section>
            </div>
        )
    }
}
export default Products