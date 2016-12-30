import React from "react";


export default class VerticalListItem extends React.Component {

    render() {
        let { text, liveHref, gitHref } = this.props;
        return(
            <li className={"vertical-list__item"}>
                <a href={ liveHref } target="_blank">{ text }</a> 
                <a href={ gitHref } target="_blank">
                    <img alt={"git-logo"} src="img/github.png" />
                </a>
            </li>
        )
    }
}
