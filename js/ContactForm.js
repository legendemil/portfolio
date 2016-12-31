import React from "react";
import PopUp from "./PopUp";


export default class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowPopUp: false
        };
        this.sendMail = this.sendMail.bind(this);
        this.service_id = "portfolio-page-emailjs";
        this.template_id = "template_WMR4M5Ia";
    }

    sendMail(ev) {
        ev.preventDefault();
        let {
            name,
            email,
            subject,
            message
        } = this.refs.form;
        this.setState({
            isShowPopUp: true
        });
        setTimeout( () => this.setState( { isShowPopUp: false } ), 2000 );
        
        // parameters: service_id, template_id, template_parameters
        emailjs.send(this.service_id, this.template_id, { 
            "from_name": name.value, 
            "from_email": email.value,
            "subject": subject.value,
            "message_html": message.value
        })
        .then( response => {
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, err => {
            console.log("FAILED. error=", err);
        });
    }

    render() {
        return(
            <form onSubmit={ this.sendMail } 
                ref="form"
                className="contact-form">

                <input className="contact-form__input" type="text" required name="name" id="name" placeholder="Your name"/>

                <input className="contact-form__input" type="email" required name="email" id="email" placeholder="Your email"/>

                <input className="contact-form__input" type="text" required name="subject" id="subject" placeholder="Subject"/>

                <textarea className="contact-form__input" id="message" required placeholder="Message" rows="7"></textarea>
                <input className="contact-form__input contact-form__submit" type="submit" value="Send"/>
                {
                    this.state.isShowPopUp ? ( 
                        <PopUp text="Thank You :)"/>
                    ) : (
                        ''
                    )
                }
                
            </form>
        )
    }
}
