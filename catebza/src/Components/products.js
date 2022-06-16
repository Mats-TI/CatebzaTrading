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
                <h1 className="productsHeading">Our Products...</h1>
                <h3>Click one to expand Gallery</h3>
                <section className="productsDiv">
                    <div className="bananaSection" >
                            <div className="banana-front">
                            <Link to="/products/bananas">
                            <img src={bananas}></img>
                            <div className="viewMore">
                            </div>
                            </Link>
                            </div>                     
                        <p>Bananas</p>
                    </div>

                    <div className="atchaarSection">
                        
                            <div className="atchaar-front">
                            <Link to="/products/Atchaar">
                            <img src={atchaars}></img>
                            <div className="viewMore">
                            </div>
                            </Link>
                            </div>
                        <p>Atchaar</p>
                    </div>
                    
                    <div className="dyeSection">
                    
                            <div className="atchaarDye-front">
                            <Link to="/products/AtchaarDye">
                            <img src={dyes}></img>
                            <div className="viewMore">
                            </div>
                            </Link>
                            </div>
                        <p>Atchaar Dye</p>
                    </div>
                    <div className="spiceSection">
                            <div className="atchaarSpice-front">
                            <Link to="/products/AtchaarSpices">
                            <img src={spice}></img>
                            <div className="viewMore">
                            </div>
                            </Link>
                            </div>
                        <p>Atchaar Spices</p>
                    </div>
                </section>
            </div>
        )
    }
}
export default Products