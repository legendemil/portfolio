import React from "react";

import HorizonList from './Lists/HorizonList';

export default class Contact extends React.Component {

    render() {
        let 
            contactsList = [ 'linkedin', 'codepen', 'twitter', 'freecodecamp', 'gmail' ];

        return(
            <section className="section--main">       
                <h3 className="section__heading section--main__heading">You can catch me...</h3>
                <HorizonList items={ contactsList } />            
            </section> 
        )
    }
}
