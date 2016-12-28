import React from "react";

export default class HorizonListItem extends React.Component {

    render() {
        let { imgSrc, imgAlt, link } = this.props;
        return(
            <li className="horizon-list__item">
                {
                    link ? (
                        <a href={ link } target="_blank">
                            <img src={ imgSrc } alt={ imgAlt } title={ imgAlt } />
                        </a>
                    ) : (
                        <img src={ imgSrc } alt={ imgAlt } title={ imgAlt } />
                    )
                }
            </li>
        )
    }
}
