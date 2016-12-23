import React from "react";

import VerticalListItem from './VerticalList/VerticalListItem';
import VerticalListHeading from './VerticalList/VerticalListHeading';

export default class VerticalList extends React.Component {

    render() {
        let listItems = this.props.items.map( (item, i) => 
            <VerticalListItem 
                text={ item.text } 
                liveHref={ item.liveHref } 
                gitHref={ item.gitHref }
                key={ i } /> 
        );
        return(
            <ul className="vertical-list">
                <VerticalListHeading />
                { listItems }
            </ul>
        )
    }
}
