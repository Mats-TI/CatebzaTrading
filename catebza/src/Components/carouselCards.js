/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React from 'react';
import "./style.css"
// eslint-disable-next-line no-unused-vars
import img1 from "./Media/RandomImages/images.jpg"

class Cards extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(<div className="card">
            <img src={this.props.name}></img>

        </div>)
    }
}
export default Cards;