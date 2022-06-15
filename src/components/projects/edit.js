import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// In react - router - dom - v6 you can easily use useParams() in
// functional components but when it gets to the class component 
// you have to create HOC(higher - order component) because hooks 
// don't support class components:

export default function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();

    var [name, setName] = useState(); // getter and setter
    var [age, setAge] = useState();
    var [position, setPosition] = useState();

    useEffect(() => { // onComponentDidMount of React Classes
        axios
            .get('http://localhost:5000/' + id)
            .then(res => {
                setAge(res.data.age);
                setName(res.data.name);
                setPosition(res.data.position);
            })
            .catch(err => {
                console.log(err);
            });
    },
    // eslint-disable-next-line
    []);
    
    const OnSubmit = (event) => {
        //
        event.preventDefault(); 
        // Prevent form submitting -> cancel manual GET / POST
        // -> using axios GET / POST instead
        
        const data = {
            name: name,
            age: age,
            position: position
        }
        axios.post('http://localhost:5000/edit/' + id, data)
            .catch(err => console.log(err));
        navigate('/');
    }

    return (
        <div>
            <div>
                <Link to='/' className='btn'>
                    Show User Lists
                </Link>
            </div>
            <form noValidate onSubmit={OnSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder={name}
                    id=""
                    onChange={e => setName(e.target.value)} />
                <br />
                <input type="number" name="age" value={age} placeholder={age} id="" onChange={e => setAge(e.target.value)} />
                <br />
                <select value={position} id="" onChange={e => setPosition(e.target.value)}>
                    <option value="Employee">Employee</option>
                    <option value="Manager">Manager</option>
                </select>
                <br />
                <input type="submit" value="Edit Employee" />
            </form>
        </div>
    )
}
