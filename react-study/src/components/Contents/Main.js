import React from "react";
import "./Main.css";

import Homepage from  './Pages/Homepage'
import LoginPage from './Pages/LoginPage'
import AnimalPicturePickerPage from './Pages/AnimalPicturePickerPage'


import { Route } from "react-router-dom";

const Main = () => (
  <div className="Post">
    <Route path="/" exact ><Homepage /></Route>
    <Route path="/login"><LoginPage /></Route>
    <Route path="/animal-picture-picker"><AnimalPicturePickerPage /></Route>
  </div>
);

export default Main;
