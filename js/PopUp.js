import React from "react";

export default class PopUp extends React.Component {

    render() {
        return(
            <div className="pop-up">
                { this.props.text }
            </div> 
        )
    }
}
