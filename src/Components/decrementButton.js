import './style.css';
import React from 'react';

function decrementButton(props) {
    console.log(props.counter);
    return (
        <div>
            <label >Initial value : </label>
            <input onChange={props.handleChange} value={props.counter} />
            <button className="counter" onClick={() => props.setCounter(props.counter - 1)} >-</button>
        </div>
    );
}

export default decrementButton;