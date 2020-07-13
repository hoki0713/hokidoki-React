import React from "react";
import {Route} from 'react-router-dom';
import {AboutMenu, PageTemplate, Company, History, Services, Location} from "./index";

function About({match}) {
    return (
        <PageTemplate>
            <section className="about">
                <Route component={AboutMenu} />
                <Route exact path="/about" component={Company} />
                <Route path="/about/history" component={History} />
                <Route path="/about/services" component={Services} />
                <Route path="/about/location" component={Location} />
            </section>
        </PageTemplate>
    );
}

export default About;