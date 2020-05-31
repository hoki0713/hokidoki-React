import React from "react";
import "./Main.css";

import Homepage from  './Pages/Homepage'
import LoginPage from './Pages/LoginPage'


import { Route } from "react-router-dom";

const Main = () => (
  <div className="Post">
    <Route path="/home"><Homepage /></Route>
    <Route path="/login"><LoginPage /></Route>
  </div>
);

export default Main;
