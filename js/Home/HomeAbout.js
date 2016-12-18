import React from "react";


export default class HomeAbout extends React.Component {

    render() {
        let { headingText, text } = this.props;
        return(
            <section className="home-about">
                <h2 className="home-about__header">{ headingText }</h2>
                <p className="home-about__text">{ text }</p>
            </section>
        )
    }
}
