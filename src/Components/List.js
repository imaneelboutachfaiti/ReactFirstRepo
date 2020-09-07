import React from 'react';

function List(props) {
    console.log(props.data)
    return (

        <table>

            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td></tr>
            </thead>
            <tbody>
                {props.data.map((item =>
                    <tr><td >{item.FirstName}</td>
                    <td >{item.LastName}</td></tr>
                ))}
            </tbody>
        </table>
    );

}
export default List;