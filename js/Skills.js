import React from "react";

import HorizonList from './Lists/HorizonList';

export default class Skills extends React.Component {

    render() {
        return(
            <section className="section--main">       
                <h3 className="section__heading section--main__heading">Danger enough with</h3>
                <HorizonList />
            </section> 
        )
    }
}
