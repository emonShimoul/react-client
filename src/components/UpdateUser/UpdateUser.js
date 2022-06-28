import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, []);

    const handleUpdateUser = e => {

    }

    return (
        <div>
            <h2>Update User: {user.name} - {user.email}</h2>
            <p><small>{id}</small></p>
            <form onSubmit={handleUpdateUser}>
                <input type="text" />
                <input type="email" />
            </form>
        </div>
    );
};

export default UpdateUser;