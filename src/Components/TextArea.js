import React from 'react';
import { PropertyKeys } from 'ag-grid-community';

function TextArea(props) {

    return (
        <label>Message:
            <textarea onChange={props.handleMessage} value={props.Message}/>
        </label>
    );
}

export default TextArea;