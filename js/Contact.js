import React from "react";

import HorizonList from './Lists/HorizonList';
import ContactForm from './ContactForm';

export default class Contact extends React.Component {

    render() {
        let 
            contactsList = [{
                name: 'linkedin',
                link: 'https://www.linkedin.com/in/emil-pausz-28b379109'
            }, {
                name: 'codepen',
                link: 'http://codepen.io/legendemil/'
            }, {
                name: 'twitter',
                link: 'https://twitter.com/e_pausz'
            }, {
                name: 'freecodecamp',
                link: 'https://www.freecodecamp.com/legendemil'
            }];

        return(
            <section className="section" id="contact">       
                <h3 className="section__heading section--main__heading">You can catch me here...</h3>
                <HorizonList items={ contactsList } />     
                <h3 className="section__heading section--main__heading">Or drop me a line below</h3>   
                <ContactForm />
            </section> 
        )
    }
}
