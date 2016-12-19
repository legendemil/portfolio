import React from "react";

import HeartLogo from './Logos/HeartLogo';

export default class SkillsIntro extends React.Component {

    render() {
        return(
            <section className="skills-intro">       
                <h2>
                I use <br /> HTML, CSS, JS <br /> to create [<span className="lighter">awesome</span>] webapps <span className="lighter text-smallest">Which you <HeartLogo /></span> 
                </h2>  
                
                <h3 className="lighter text-smaller">Pss... <br /> <br /> I know some PHP and Databases</h3> 
            </section> 
        )
    }
}
