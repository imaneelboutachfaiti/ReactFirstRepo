import React, { useState } from 'react';
import DropDown from './DropDown';
import InputForm from './Input';
import DatePicker from 'react-date-picker';
import TextArea from './TextArea';
import List from './List';
function Form(props) {
    const [LastName, setLastName] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [MobilePhone, setMobilePhone] = useState('');
    const [Gender, setGender] = useState('');
    const [SelectedDay, setSelectedDay] = useState('');
    const [Email, setEmail] = useState('');
    const [BirthDate, setBirthDate] = useState('');
    const [Data, setData] = useState([]);
    const [Message, setMessage] = useState('');

    function handleMessage(e) {
        setMessage(e.target.value);
    }
    function handleGender(e) {
        setGender(e.target.value);
    }
    function handleWorkDay(e) {
        setSelectedDay(e.target.value);
    }
    const options = [
        { value: '0', label: 'Please select..' },
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' }
    ]

    const workDays = [
        { value: '0', label: 'Please select..' },
        { value: 'M', label: 'Monday' },
        { value: 'T', label: 'Tuesday' },
        { value: 'W', label: 'Wednesday' },
        { value: 'Th', label: 'Thursday' },
        { value: 'F', label: 'Friday' }
    ]
    function handleLastName(e) {
        setLastName(e.target.value);
    }

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleMobilePhone(e) {
        setMobilePhone(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleDateTime(e) {
        setBirthDate(e.value);
    }

    function save() {
        setData([...Data, {
            FirstName: FirstName, LastName: LastName,
            MobilePhone: MobilePhone, Message: Message,
            Gender: Gender, SelectedDay: SelectedDay, Email: Email
        }])
        setFirstName('');
        setLastName('');
        setMessage('');
        setEmail('');
        setMobilePhone('');
    }

    return (
        <div>
            <label>Firt name :</label>
            <InputForm var={FirstName} handleFunction={handleFirstName} placeholder="First Name" /><br />
            <br />
            <label>Last name : </label>
            <InputForm var={LastName} handleFunction={handleLastName} placeholder="Last Name" />
            <br /> <br />
            <label>Mobile phone  :</label>
            <InputForm var={MobilePhone} handleFunction={handleMobilePhone} placeholder="Mobile Phone" />
            <br /> <br />
            <label>Email : </label>
            <InputForm var={Email} handleFunction={handleEmail} placeholder="Email" /> <br /><br />
            <DropDown label="Gender: " options={options} SelectedValue={Gender} handleChange={handleGender} />
            <br />
            <DropDown label="Work day: " options={workDays} SelectedValue={SelectedDay} handleChange={handleWorkDay} />

            {/* <DatePicker onClickDay={handleDateTime} dateFormat="YYYY/MM/DD" /> */}
            <br />
            <TextArea Message={Message} handleMessage={handleMessage} />
            <br />
            <br />
            <button className="SubmitBtn" onClick={save}>Save</button>
            <br />
            <br />
            <List data={Data} />
        </div>
    );

}
export default Form;