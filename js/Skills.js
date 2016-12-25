import React from "react";

import HorizonList from './Lists/HorizonList';

export default class Skills extends React.Component {

    render() {
        let 
            currSkills = [ 'jquery', 'react', 'redux', 'sass'],
            futureSkills = [ 'reactivex', 'node', 'angularjs'];

        return(
            <section className="section--main">       
                <h3 className="section__heading section--main__heading">I can built something with</h3>
                <HorizonList items={ currSkills } />
                <h3 className="section__heading section--main__heading">But also I'd like to master</h3>
                <HorizonList items={ futureSkills } />             
            </section> 
        )
    }
}
