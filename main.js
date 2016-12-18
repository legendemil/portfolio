import ReactDOM from "react-dom";
import React from "react";
require("./sass/main.sass");

class Main extends React.Component {

    render() {
        return(
            <h2>Tesst</h2>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("main"));