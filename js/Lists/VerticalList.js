import React from "react";

import VerticalListItem from './VerticalList/VerticalListItem';
import VerticalListHeading from './VerticalList/VerticalListHeading';

export default class VerticalList extends React.Component {

    render() {

        return(
            <ul className="vertical-list">
                <VerticalListHeading />
                <VerticalListItem text={"Page about Polish soldier"} liveHref={"#"} gitHref={"#"} />
            </ul>
        )
    }
}
