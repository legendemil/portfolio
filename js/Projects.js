import React from "react";

import VerticalList from './Lists/VerticalList';

export default class Projects extends React.Component {

    render() {

        let projects = [{
            liveHref: 'http://vetter.zse.lublin.pl/cichociemny/',
            gitHref: 'https://github.com/legendemil/cichociemny',
            text: "Page about Polish soldier"
        }, {
            liveHref: 'https://legendemil.github.io/sites/todo_app/',
            gitHref: 'https://github.com/legendemil/todo_app',
            text: 'Simple Todo App'
        },{
            liveHref: 'http://codepen.io/legendemil/full/Krqaqy/',
            gitHref: 'https://github.com/legendemil/simon_game',
            text: "Simon Game"
        }, {
            liveHref: 'http://codepen.io/legendemil/full/MeJjzm/',
            gitHref: '#',
            text: "Pomodoro Timer"
        }, {
            liveHref: 'http://codepen.io/legendemil/full/KMWbjV/',
            gitHref: 'https://github.com/legendemil/tic_tac_toe',
            text: "Tic-tac-toe"
        }, {
            liveHref: 'http://codepen.io/legendemil/full/eZQyxR/',
            gitHref: 'https://github.com/legendemil/calculator',
            text: "Calculator"
        }, {
            liveHref: 'http://codepen.io/legendemil/full/KzvVvm/',
            gitHref: 'https://github.com/legendemil/twitchtv_app',
            text: "Twitch.TV"
        }, {
            liveHref: 'http://codepen.io/legendemil/full/KzqZrQ/',
            gitHref: 'https://github.com/legendemil/wikipedia_viewer',
            text: "Wiki Viewer"
        }];

        return(
            <section className="section section--light" id="projects">       
                <h3 className="section__heading section--light__heading">Some Projects</h3>    
                <VerticalList items={ projects }/>                
            </section> 
        )
    }
}
