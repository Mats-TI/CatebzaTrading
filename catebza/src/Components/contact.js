import React from 'react';
import "./style.css"

class Contact extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(<div className="contactSection" id="contactSection">
            <h1>HAVE AN INQUIRY?</h1>
            <h2>DO GET IN TOUCH...</h2>
            <div className="contactDiv">
                <form>
                    <label id="nameLabel">Name*:</label><input id="nameInput"></input>
                    <label id="telLabel">Tel*:</label><input id="telInput"></input>
                    <label id="mailLabel">E-mail:</label><input id="mailInput"></input>
                    <label id="msgLabel">Message*:</label><textarea id="msgInput"></textarea>
                    <button>Submit</button>
                </form>
                <section id="googleMapsSection">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title*/}
                <iframe src="https://www.google.com/maps/embed?pb=!4v1613142130144!6m8!1m7!1sIsHPdWRs4tjf7ywjsgyXeg!2m2!1d-24.31298052854167!2d29.47595904710375!3f255.5493691597444!4f-11.400019175762978!5f0.5970117501821992" width="100%" height="100%" frameborder="0" style={{border:"groove 5px green"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                {/*eslint-disable-next-line react/jsx-no-target-blank*/}
                <a href="https://goo.gl/maps/vUv4r1p5TqbY8Uxq6" target="_blank">Open Map location</a>
                </section>
            </div>
        </div>)
    }
    

}
export default Contact