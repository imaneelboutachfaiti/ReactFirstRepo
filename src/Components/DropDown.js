import React from 'react';
import './style.css';

function DropDown(props) {

    return (
        <div>
            <label >{props.label}</label>
            <select className="dropdown" onChange={props.handleChange} defaultValue={props.options[0].value} >

                {props.options.map((data, index) =>
                    <option key={data.value} disabled={index === 0} value={data.value} >{data.label}
                    </option>)
                }
            </select>
        </div>
    );
}
export default DropDown;
