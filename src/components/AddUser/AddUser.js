import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = {name: name, email: email};

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        e.preventDefault();
    }

    return (
        <div>
            <h2>This is Add User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} placeholder='Name' />
                <input type="email" ref={emailRef} placeholder='Email' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;