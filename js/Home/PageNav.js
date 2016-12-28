import React from "react";

import NavBtn from "./PageNav/NavBtn";

export default class PageNav extends React.Component {

    constructor(props) {
        super(props);
        this.showMenuItems = this.showMenuItems.bind(this);
        this.state = {
            isShowList: false
        };
    }

    showMenuItems() {
        this.setState({
            isShowList: !this.state.isShowList
        });
    }

    render() {

        let isShowList = this.state.isShowList ? 'is-small' : '';
        
        return(
            <nav className="page-nav">
                <ul className={`page-nav__list ${isShowList}`}>
                    <NavBtn text={"Emil Pausz"} href={"#"}/>
                    <span onClick={this.showMenuItems} className="page-nav__btn-menu">Menu</span>
                    <NavBtn text={"Skills"} href={"#skills"}/>
                    <NavBtn text={"Projects"} href={"#projects"}/>
                    <NavBtn text={"Contact"} href={"#contact"}/>
                </ul>               
            </nav>
        )
    }
}
