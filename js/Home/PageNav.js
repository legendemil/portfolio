import React from "react";

import NavBtn from "./PageNav/NavBtn";

export default class PageNav extends React.Component {

    render() {
        
        return(
            <nav className="page-nav">
                <NavBtn text={"Emil Pausz"} href={"#"}/>
                <NavBtn text={"Skills"} href={"#skills"}/>
                <NavBtn text={"Projects"} href={"#projects"}/>
                <NavBtn text={"Contact"} href={"#contact"}/>
            </nav>
        )
    }
}
