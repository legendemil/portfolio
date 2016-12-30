import React from "react";

import HorizonListItem from './HorizonList/HorizonListItem';
import VisibilitySensor from 'react-visibility-sensor';

export default class HorizonList extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            isShowing: false
        };

    }

    onChange(isVisible) {
        if(isVisible) {
            this.setState({
                isShowing: true
            });
        }

    }

    render() {
        let { items } = this.props;
        items = items.map( ( item, i ) => <HorizonListItem imgSrc={ `img/${item.name}.png` } imgAlt={ item.name } link={ item.link } key={ i } isShowing={ this.state.isShowing }/> );
        return(
            <div>
                <VisibilitySensor 
                    active={ !this.state.isShowing }
                    onChange={ this.onChange } 
                    delayedCall={ true }
                    intervalDelay={ 1000 } />
                <ul 
                    className="horizon-list">
                    { items }
                </ul>
            </div>
        )
    }
}
