import React from "react";

import HorizonListItem from './HorizonList/HorizonListItem';

export default class HorizonList extends React.Component {

    render() {
        return(
            <ul className="horizon-list">
                <HorizonListItem imgSrc={"img/jquery.png"} imgAlt={"jquery"}/>
                <HorizonListItem imgSrc={"img/react.png"} imgAlt={"react"}/>
                <HorizonListItem imgSrc={"img/redux.png"} imgAlt={"redux"}/>
                <HorizonListItem imgSrc={"img/sass.png"} imgAlt={"sass"}/>
            </ul>
        )
    }
}
