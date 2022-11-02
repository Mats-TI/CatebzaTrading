import React from 'react';
import "./style.css" ; import "./styleIpad.css"; import "./styleMobile.css"
import axios from "axios";

class Contact extends React.Component{
    constructor(){
        super();
        this.nameErrorRef=React.createRef();
        this.state={
            name:"",
            tel:"",
            Email:"",
            Subject:"",
            errorName:'',
            errorTel:'',
            errorMail:'',
            errorSubject:"",
            sent:false
        }
    }
    formValidation=()=>{
            let isError=false;
            const errors={
                errorName:'',
                errorTel:'',
                errorMail:'',
                errorSubject:"",
            }
            /*if (this.state.name.length===0){
                isError=true;
                errors.errorName="Name cannot be blank";
            }*/
            if (isNaN(this.state.tel)){
                
                isError=true;
            
                errors.errorTel="Contact number is either invalid or blank. Input should be numbers only. Example: '27123456789' instead of '+27 123456789' ";
                alert(errors.errorTel);
            }

            /*if(this.state.Subject.length===0){
                isError=true;
                errors.errorSubject="Message cannot be blank";
            }*/
            this.setState({
                ...this.state,
                ...errors
            })
            return(isError);
        
        }
        onChangeName=(event)=>{
            this.setState({
                name:event.target.value
            });
      
        }
        onChangeTel=(event)=>{
            this.setState({
                tel:event.target.value
            })
        }
        onChangeMail=(event)=>{
            this.setState({
                Email:event.target.value
            })
        }
        onChangeMsg=(event)=>{
            this.setState({
                Subject:event.target.value
            })
        }
        dataHandler=(event)=>{
            event.preventDefault();
            const formErrors=this.formValidation();
            if (!formErrors){
                console.log("There are no form errors");
                this.setState({
                    name:"",
                    tel:'',
                    Email:'',
                    Subject:'',
                    errorMail:'',
                    errorName:'',
                    errorSubject:'',
                    errorTel:"",
                    
                })
            }
            if (!formErrors){
                let formData={
                    Name:this.state.name,
                    Tel:this.state.tel,
                    Mail:this.state.Email,
                    Message:this.state.Subject
                }
                axios.post("https://catebza-server.herokuapp.com/contact/api/catebzaForm",formData)
                .then((res)=>{
                    
                })
                .catch((err)=>{
                    console.log(`An error occured ${err}`)
                });
                this.setState({sent:true});
                alert("Thank you for getting in touch. Your form has been submitted.")

                
            }
        }
    render(){
        return(<div className="contactSection" id="contactSection">
            <h1>Have an Inquiry?</h1>
            <h2>Do get in touch...</h2>
            <div className="contactDiv">
                <div>
                <form onSubmit={this.dataHandler.bind(this)}>
                    <label id="nameLabel">Name*:</label><input required id="nameInput" placeholder="Required" value={this.state.name} onChange={this.onChangeName.bind(this)}></input>
                    <label id="telLabel">Tel/Cell no*:</label><input required id="telInput" placeholder="Required" value={this.state.tel} onChange={this.onChangeTel.bind(this)}></input>
                    <label id="mailLabel">E-mail:</label><input id="mailInput" value={this.state.Email} onChange={this.onChangeMail.bind(this)}></input>
                    <label id="msgLabel">Message*:</label><textarea required id="msgInput" placeholder="Enter a message..." value={this.state.Subject} onChange={this.onChangeMsg.bind(this)}></textarea>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
    
                </div>
                
                <div id="googleMapsSection">
               
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title*/}
                <iframe src="https://www.google.com/maps/embed?pb=!4v1613142130144!6m8!1m7!1sIsHPdWRs4tjf7ywjsgyXeg!2m2!1d-24.31298052854167!2d29.47595904710375!3f255.5493691597444!4f-11.400019175762978!5f0.5970117501821992" width="100%" height="100%" frameborder="0" style={{border:"groove 5px green"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                {/* eslint-disable-next-line react/jsx-no-target-blank*/}
                <a href="https://goo.gl/maps/vUv4r1p5TqbY8Uxq6" target="_blank">Open Map location</a>
                </div>
            </div>
        </div>)
    }
    

}
export default Contact