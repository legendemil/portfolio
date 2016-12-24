import React from "react";

import NavBtn from "./PageNav/NavBtn";

export default class PageNav extends React.Component {

    render() {
        
        return(
            <nav className="page-nav">
                <NavBtn text={"Emil Pausz"} href={"#"}/>
                <NavBtn text={"Skills"} href={"#"}/>
                <NavBtn text={"Project"} href={"#"}/>
                <NavBtn text={"Contact"} href={"#"}/>
            </nav>
        )
    }
}
