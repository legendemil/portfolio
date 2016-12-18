import React from "react";

import PageNav from "./PageNav";

export default class PageHeader extends React.Component {

    render() {
        return(
            <header className="page-header">

                <PageNav />

            </header> 
        )
    }
}
