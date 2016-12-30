import React from "react";

export default class HorizonListItem extends React.Component {

    render() {
        let { imgSrc, imgAlt, link } = this.props;
        let showingClass = this.props.isShowing ? 'anim-show-item' : '';
        return(
            <li className={`horizon-list__item ${showingClass}`}>
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
