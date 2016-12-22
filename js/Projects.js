import React from "react";

import VerticalList from './Lists/VerticalList';

export default class Projects extends React.Component {

    render() {

        return(
            <section className="section--light">       
                <h3 className="section__heading section--light__heading">Some Projects</h3>    
                <VerticalList />                
            </section> 
        )
    }
}
