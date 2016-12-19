import React from "react";

export default class HorizonListItem extends React.Component {

    render() {
        let { imgSrc, imgAlt } = this.props;
        return(
            <li className="horizon-list__item"> <img src={ imgSrc } alt={ imgAlt } /> </li>
        )
    }
}
