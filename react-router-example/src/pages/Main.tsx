import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Home, About, Events, Products, Contact, Error } from '../components'

function Main() {
    return (
        <BrowserRouter>
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Redirect from="/history" to="/about/history" />
                    <Redirect from="/services" to="/about/services" />
                    <Redirect from="/location" to="/about/location" />
                    <Route path="/events" component={Events} />
                    <Route path="/products" component={Products} />
                    <Route path="/contact" component={Contact} />
                    <Error />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Main;