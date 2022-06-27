import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h2>Users:</h2>
            <ul>
                {
                    users.map(user => <li>{user.name} - {user.email}</li>)
                }
            </ul>
        </div>
    );
};

export default Users;