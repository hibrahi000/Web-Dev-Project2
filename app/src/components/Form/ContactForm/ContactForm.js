import React, { Component } from 'react'
import Style from './ContactForm.module.css';
import Heading from '../FormComponents/Heading/Heading';
import GenInput from '../FormComponents/Inputs/GenInput/GenInput';
import TextArea from '../FormComponents/Inputs/TextArea/TextArea';
import SendMessageBtn from '../FormComponents/Buttons/SendMessageBtn/SendMessageBtn'

class ContactForm extends Component {

    state ={
        Heading : {
            Title : 'Contact Us',
            Message: 'Got a Question? We would love to hear from you. Send us a message and we will respond as soon as possible.' 
        },
        FormSubmitted : false,
        FormSubmitValid : true,
        NameInvalid : false,
        EmailInvalid: false

    }

    submitionValidation(TextInput,inputType) {
        TextInput.toUpperCase();
        let nameValid = !TextInput.charAt(0).equals('') && !TextInput.charAt(0).equals(' ');
        let emailValid = !TextInput.indexOf('@') == -1 && !TextInput.indexOf('.COM') == -1;
        let res = {valid : true, source : 'null'};
        switch(inputType){

            case 'Name' :
                res.valid = nameValid;
                res.source = 'Name Validation'
                break;

            case 'Email':
                res.valid = emailValid;
                res.source= 'Email Validation';
                break;

            default :
                console.log('This must be used for name and email validation');
                break;
        }
        return res;
    }


    render() {
        let {formBody} = Style;

        return(
           <div className={formBody}>
                <Heading Title={this.state.Heading.Title} Message ={this.state.Heading.Message}/>
                <GenInput Label = {'Name *'} Error ={this.state.NameInvalid} Change={this.nameChangeHandler}/>
                <GenInput Label = {'Email *'} Error = {this.state.EmailInvalid} Change = {this.emailChangeHandeler}/>
                <TextArea Label = {'Message'}/>
                <SendMessageBtn onClick= {this.sendBtnHandler}/>
            </div>
        )
    }


}

export default ContactForm;