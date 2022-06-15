import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';

function UserCard(props) {
    const user = props.user;
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.position}</td>
            <td>
                <Link to={`/user/edit/${user._id}`} className='btn'>
                    Edit User
                </Link>
                <br />
                <Link to={`/user/delete/${user._id}`} className='btn'>
                    Delete User
                </Link>
            </td>
        </tr>
    )
}

function Box(props) {
    const boxes = [];
    for (let i = 0; i < props.count; i++){
        boxes.push(
            <div className='box' key={`box-` + i}>
            </div>
        )
    }
    return (
        <div className='box-container'>
            {boxes}
        </div>
    );
}

const UserTable = () => {
    var [users, setUsers] = useState([]);

    useEffect(() => { // onComponentDidMount of React Classes
        axios.get('http://localhost:5000/').then(res => {
            setUsers(res.data);
        });
    }, [])

    let userList;
    if (users.length === 0) {
        userList = 'None exists';
    }
    else {
        userList = users.map((user, key) =>
            <UserCard user={user} key={key} id={user._id} />
        )
    }
    return (
        <table className='tbl'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Position</td>
                    <td>Option</td>
                </tr>
            </thead>
            <tbody>
                {userList}
            </tbody>
        </table>
    );
}

export default function Homepage() {
    return (
        <div>
            <h1>Hello world, this is homepage</h1>
            <Box count={4} />
            <UserTable />
        </div>
    )
}