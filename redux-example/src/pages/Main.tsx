import React from "react";
import {CountDown, MyCountDown} from "../component";

export default function Main() {
    return (
        <div>
            <MyCountDown />
            <CountDown count={0} tick={10} reset={1000}/>
        </div>
    );
}