import React, { useState } from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Kitty() {
    const [name] = useState("Hello Kitty");
    const [avatarUrl] = useState("https://placekitten.com/g/64/64");
    const [text] = useState('I hope you enjoy learning React!');
    const [date] = useState(formatDate(new Date()));

    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={avatarUrl}
                    alt={name}
                />
                <div className="UserInfo-name">
                    {name}
                </div>
            </div>
            <div className="Comment-text">{text}</div>
            <div className="Comment-date">
                {date}
            </div>
        </div>
    );
}



export default Kitty;