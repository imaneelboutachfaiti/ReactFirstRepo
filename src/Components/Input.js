import React from 'react';
import './style.css'

function InputForm(props) {

    return (
        <input onChange={props.handleFunction} value={props.var} placeholder={props.placeholder} className="inputform" />
    );

}
export default InputForm; 