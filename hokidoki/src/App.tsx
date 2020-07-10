import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/home/homePage";
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

class App extends React.Component<any, any> {
    public render() {
        return (
            <Router>
                <HomePage />
            </Router>
        );
    }
}

export default App;