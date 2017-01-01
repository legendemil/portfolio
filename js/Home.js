import React from "react";

import PageHeader from "./Home/PageHeader";
import HomeHeading from "./Home/HomeHeading";
import HomeAbout from "./Home/HomeAbout";

export default class Home extends React.Component {

    render() {
        return(
            <section className="home">

                <PageHeader />

                <div className="row">
                    <div className="col col--6">
                        <HomeHeading 
                            text={"Hi, I'm Emil"}/>
                         <p className="home__caption">Nice to meet you</p>
                    </div>
                    
                    <HomeAbout 
                        headingText={"About me"} 
                        text={"I'm a Front-End Developer from Poland. Why I love coding? Because It's awesome!"}/>
                </div> 
            </section> 
        )
    }
}
