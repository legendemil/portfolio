import React from "react";


export default class ContactForm extends React.Component {

    render() {
        return(
            <form className="contact-form">
                <input className="contact-form__input" type="text" required name="name" id="name" placeholder="Your name"/>

                <input className="contact-form__input" type="email" required name="email" id="email" placeholder="Your email"/>

                <input className="contact-form__input" type="text" required name="subject" id="subject" placeholder="Subject"/>

                <textarea className="contact-form__input" id="message" required placeholder="Message" rows="7"></textarea>
                <input className="contact-form__input contact-form__submit" type="submit" value="Send"/>
            </form>
        )
    }
}
