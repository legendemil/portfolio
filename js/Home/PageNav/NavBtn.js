import React from "react";

export default class NavBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSmall: false
        };
        this.updateNavBtn = this.updateNavBtn.bind(this);
    }

    updateNavBtn(ev) {

        if(window.scrollY > 10) {
            this.setState({
                isSmall: true
            });
        } else {
            this.setState({
                isSmall: false
            });
        }
        
    }

    componentDidMount() {
        window.addEventListener('scroll', ev => this.updateNavBtn(ev));
    }

    componentWillUnMount() {
        window.removeEventListener('scroll', this.updateNavBtn);
    }

    render() {
        let { href, text } = this.props;
        let isSmall = this.state.isSmall ? ' is-small' : '';

        return(
            <li>
                <a href={href} className={ "page-nav__btn" + isSmall }>{text}</a>
            </li>
        )
    }
}
