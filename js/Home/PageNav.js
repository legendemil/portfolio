import React from "react";

import NavBtn from "./PageNav/NavBtn";
import MenuHamIcon from '../Logos/MenuHamIcon';

export default class PageNav extends React.Component {

    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            isShowList: false
        };
    }

    toggleMenu() {
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
                    <MenuHamIcon onClick={this.toggleMenu}/>
                    <NavBtn text={"Skills"} href={"#skills"}/>
                    <NavBtn text={"Projects"} href={"#projects"}/>
                    <NavBtn text={"Contact"} href={"#contact"}/>
                </ul>               
            </nav>
        )
    }
}
