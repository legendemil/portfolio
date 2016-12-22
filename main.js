// React
import ReactDOM from "react-dom";
import React from "react";

// React Components
import Home from "./js/Home";
import SkillsIntro from "./js/SkillsIntro";
import Skills from "./js/Skills";
import Projects from "./js/Projects";

// Styles
require("./sass/main.sass");

class Main extends React.Component {

    render() {
        return(
            <div>
                <Home />
                <SkillsIntro />
                <Skills />
                <Projects />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("main"));