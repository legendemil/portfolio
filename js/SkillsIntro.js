import React from "react";

export default class SkillsIntro extends React.Component {

    render() {
        return(
            <section className="skills-intro">       
                <h2>
                I use HTML, CSS, JS to create [<span className="lighter">awesome</span>] webapps <span className="lighter text-smallest">Which you love</span>
                </h2>  
                
                <h3 className="lighter text-smaller">&amp; <br /> I know some PHP and Databases</h3> 
            </section> 
        )
    }
}
