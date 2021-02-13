/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./style.css";
import img1 from "./Media/RandomImages/index1.jpg";
import {Switch, BrowserRouter as Router, Route, Link} from "react-router-dom"
import bananaReel from './BananaReel';
import moreIcon from "./Media/viewMore.png"

class Products extends React.Component{
    render(){
        return(

            <div className="productSection" id="productSection">
                <h1 className="productsHeading">Our Products</h1>
                <section className="productsDiv">
                    <div className="bananaSection" >
                        <Link to="/products/bananas">
                            <div className="banana-front">
                            <img src={img1}></img>
                            <div className="viewMore">
                            </div>
                            </div>                     
                        </Link>
                        <p>Bananas</p>
                    </div>

                    <div className="atchaarSection">
                        <Link to="/products/Atchaar">
                            <div className="atchaar-front">
                            <img src={img1}></img>
                            <div className="viewMore">
                            </div>
                            </div>
                     
                        </Link>
                        <p>Atchaar</p>
                    </div>
                    
                    <div className="dyeSection">
                    <Link to="/products/AtchaarDye">
                            <div className="atchaarDye-front">
                            <img src={img1}></img>
                            <div className="viewMore">
                            </div>
                            </div>
                     
                        </Link>
                        <p>Atchaar Dye</p>
                    </div>
                    <div className="spiceSection">
                    <Link to="/products/AtchaarSpices">
                            <div className="atchaarSpice-front">
                            <img src={img1}></img>
                            <div className="viewMore">
                            </div>
                            </div>
                     
                        </Link>
                        <p>Atchaar Spices</p>
                    </div>
                </section>
            </div>
        )
    }
}
export default Products