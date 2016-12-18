import React from "react";

export default class HomeHeading extends React.Component {

    render() {
        return(
            <h1 className="home__heading">{this.props.text}</h1>
        )
    }
}
