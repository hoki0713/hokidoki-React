import React, {useState, useEffect} from "react";

function Clock() {
const [tick, setTick] = useState(new Date().toLocaleTimeString());

useEffect(() => {
    setInterval(() => setTick(new Date().toLocaleTimeString()), 1000)
});

    return (
        <div>
            <h1>Hello World</h1>
            <h2>Current Time</h2>
            <h2>{tick}</h2>
        </div>

    );
}




export default Clock;