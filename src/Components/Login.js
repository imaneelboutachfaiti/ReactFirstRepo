
import React, { useState } from 'react';
import './style.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function display() {
        console.log(username + " " + password);
    }
    return (
        <div className="login">
            <label text="">Username :</label>
            <input onChange={handleUsername} className="username" />
            <br />
            <br />
            <label text="">Password :</label>
            <input onChange={handlePassword} className="Password" />
            <br /><br />
            <button onClick={display}>Login</button>
        </div>
    )
}
export default Login;