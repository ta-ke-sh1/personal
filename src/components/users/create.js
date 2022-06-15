import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function CreatePage () {
    var [name, setName] = useState();
    var [age, setAge] = useState();
    var [position, setPosition] = useState();

    const navigate = useNavigate();

    const OnSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            age: age,
            position: position,
        }
        axios.post('http://localhost:5000/add', data)
            .catch(err => console.log(err));
        navigate('/');
    }

    return (
        <div>
            <form noValidate onSubmit={OnSubmit}>
                <input type="text" name="name" value={name} id="" onChange={e => setName(e.target.value)} />
                <br />
                <input type="number" name="age" value={age} id="" onChange={e => setAge(e.target.value)} />
                <br />
                <input type="text" name="position" value={position} id="" onChange={e => setPosition(e.target.value)} />
                <br />
                <input type="submit" value="Add Employee" />
            </form>
        </div>
    )
}