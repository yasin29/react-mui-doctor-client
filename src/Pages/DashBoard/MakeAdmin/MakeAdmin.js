import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://quiet-ridge-12637.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    console.log(data);

                }

            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{ width: '50%' }} type="email" onBlur={handleOnBlur} id="standard-basic" label="Email" variant="standard" />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin Added Successful</Alert>}
        </div>
    );
};

export default MakeAdmin;