// React
import ReactDOM from "react-dom";
import React from "react";

// React Components
import Home from "./js/Home";

// Styles
require("./sass/main.sass");

class Main extends React.Component {

    render() {
        return(
            <Home />
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("main"));