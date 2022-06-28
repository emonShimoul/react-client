import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);

    return (
        <div>
            <h2>Update User:</h2>
            <p><small>{id}</small></p>
        </div>
    );
};

export default UpdateUser;