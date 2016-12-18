import React from "react";

export default class NavBtn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { href, text } = this.props;
        return(
            <a href={href} className="page-nav__btn">{text}</a>
        )
    }
}
