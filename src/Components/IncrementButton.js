import React from 'react';
import './style.css';

function IncrementButton(props) {

    return (
        <div>
            <label >Initial value : </label>
            <input onChange={props.handleChange} value={props.counter} />
            <button className="counter" onClick={() => props.setCounter(props.counter + 1)} >+</button>
        </div>
    );
}
export default IncrementButton;