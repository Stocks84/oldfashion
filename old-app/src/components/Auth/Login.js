import React, { useState } from "react";
import { alignPropType } from "react-bootstrap/esm/types";
import { useNavigate } from "react-router-dom"
/* import api from */

/* This is to allow the user to login */
const Login = () => {
    const [username, setUsername] = useState('');
    const [passaword, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await alignPropType.post('/auth/login/', { username, password });
            localStorage.setItem('token', response.data.token);
            navigate('/games');
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        
    )
}
