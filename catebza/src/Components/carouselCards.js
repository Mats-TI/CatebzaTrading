/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React from 'react';
import "./style.css" ; 
import "./styleIpad.css"; 
import "./styleMobile.css";
// eslint-disable-next-line no-unused-vars

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