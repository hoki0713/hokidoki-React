import React from "react";
import { Link, Route } from 'react-router-dom';
import {Clock, Counter, Hello, Kitty, ChatBot, Home} from "../oop";
import {AdvancedCounter} from '../fp';
import {RiAncientGateLine} from "react-icons/ri";

function Navigator() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link to="/" className="navbar-brand">
                    <RiAncientGateLine />
                 </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/chat" className="nav-link">Chatbot</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/greeting" className="nav-link">Welcome</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/counter" className="nav-link">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/clock" className="nav-link">Clock</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/kitty" className="nav-link">Kitty</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/advanced-counter" className="nav-link">AdvanceCounter</Link>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <Route exact path='/chat' component={ChatBot}/>
                <Route exact path='/' component={Home}/>
                <Route exact path="/greeting">
                    <Hello />
                </Route>
                <Route exact path="/counter">
                    <Counter startNumber={0}/>
                </Route>
                <Route exact path="/clock">
                    <Clock/>
                </Route>
                <Route exact path="/kitty">
                    <Kitty />
                </Route>
                <Route exact path="/advanced-counter">
                    <AdvancedCounter />
                </Route>
            </div>
        </div>

    );
}

export default Navigator;