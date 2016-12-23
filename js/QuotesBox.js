import React from "react";


export default class QuotesBox extends React.Component {

    render() {
        return(
            <div className="quotes-box">       
                <h4 className="quotes-box__heading">This motivates me to keep going</h4>   
                <div className="quotes-box__container">
                    <p className="quotes-box__quote">The man who has confidence in himself gains the confidence of others</p>
                    <p className="quotes-box__quote-author">Hasidic Proverb</p>
                </div>   
            </div> 
        )
    }
}
