import React, {useState, useEffect} from 'react';
import './Login.css';

export default function Login() {



    return (
        <div>
            <h2>Login Form</h2>

            <form name="form">
                <div className="imgcontainer">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"/>
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input
                        id="userid"
                        type="text"
                        placeholder="Enter Username"
                        name="uname"
                        required
                    />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                    />

                    <button
                        type="submit"
                    >
                        Login
                    </button>
                    <label>
                        <input type="checkbox" checked={true} name="remember"/> Remember me
                    </label>
                </div>

                <div className="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    );
}