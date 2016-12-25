import React from "react";

import HeartLogo from './Logos/HeartLogo';

export default class SkillsIntro extends React.Component {

    constructor(props) {
        super(props);
        this.showText = this.showText.bind(this);
        this.state = {
            textStatus: false
        }
        this.startOffset = 0;
        this.heightSectionSkills = 0;
    }

    showText() {

        if(window.scrollY > this.startOffset - window.innerHeight * 1.3) {
            this.setState({
                textStatus: true
            });
            window.removeEventListener('scroll', this.showText);
        }

    }

    componentDidMount() {
        let skillsSect = document.querySelector('.skills-intro');
        this.startOffset = skillsSect.offsetTop;
        this.heightSectionSkills = skillsSect.innerHeight;
        window.addEventListener('scroll', this.showText);
    }

    render() {
        let animTextStatus = this.state.textStatus ? "end" : 'start';
        return(
            <section className="skills-intro">       
                <h2>
                I use <br /> HTML, CSS, JS <br /> to create [<span className={"lightest anim-slide-text " + animTextStatus}>awesome</span>] <br />
                webapps <span className="lighter text-smallest">Which you <HeartLogo /></span> 
                </h2>  
                
                <h3 className="lightest text-smaller">Pss... <br /> <br /> I know some PHP and Databases</h3> 
            </section> 
        )
    }
}
