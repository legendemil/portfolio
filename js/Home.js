import React from "react";

import PageHeader from "./Home/PageHeader";
import HomeHeading from "./Home/HomeHeading";
import HomeAbout from "./Home/HomeAbout";

export default class Home extends React.Component {

    render() {
        return(
            <section className="home">

                <PageHeader />
                <HomeHeading 
                    text={"Hi, I'm Emil Pausz"}/>
                <HomeHeading 
                    headingText={"About me"} 
                    text={"I'm a Front-End Developer from Poland. Why I love coding? Because It's awesome!"}/>

            </section> 
        )
    }
}
