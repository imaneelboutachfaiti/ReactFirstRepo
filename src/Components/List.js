import React from 'react';
import './style.css';
function List(props) {
    console.log(props.data)
    return (

        <table>

            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Mobile phone</td>
                    <td>Gender</td>
                    <td>Work Day</td>
                    <td>Email</td>
                    <td>Message</td>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item =>
                    <tr><td >{item.FirstName}</td>
                        <td >{item.LastName}</td>
                        <td>{item.MobilePhone}</td>
                        <td>{item.Gender}</td>
                        <td>{item.SelectedDay}</td>
                        <td>{item.Email}</td>
                        <td>{item.Message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}
export default List;