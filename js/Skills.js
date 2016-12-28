import React from "react";

import HorizonList from './Lists/HorizonList';

export default class Skills extends React.Component {

    render() {
        let 
            currSkills = ['jquery', 'react', 'redux', 'sass'].map( name => ({ name: name }) ),
            futureSkills = [ 'reactivex', 'node', 'angularjs'].map( name => ({ name: name }) );

        return(
            <section className="section--main" id="skills">       
                <h3 className="section__heading section--main__heading">I can built something with</h3>
                <HorizonList items={ currSkills } />
                <h3 className="section__heading section--main__heading">But also I'd like to master</h3>
                <HorizonList items={ futureSkills } />             
            </section> 
        )
    }
}
