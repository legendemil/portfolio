import React from "react";


export default class HomeAbout extends React.Component {

    render() {
        let { headingText, text } = this.props;
        return(
            <section className="home__about">
                <h2>{ headingText }e</h2>
                <p>{ text }</p>
            </section>
        )
    }
}
