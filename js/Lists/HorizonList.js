import React from "react";

import HorizonListItem from './HorizonList/HorizonListItem';

export default class HorizonList extends React.Component {

    render() {
        let { items } = this.props;
        items = items.map( ( item, i ) => <HorizonListItem imgSrc={ `img/${item}.png` } imgAlt={ item } key={ i }/> );
        return(
            <ul className="horizon-list">
                { items }
            </ul>
        )
    }
}
