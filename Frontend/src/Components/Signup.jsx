import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

const Signup = () => {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/user/', {
                username, 
                email, 
                password
            });
            alert("Successfully registered");
        } catch (error) {
            console.error(error);
            alert('Failed to register');
        }
    };

    return (
        <div className="login-container">
            
            <form onSubmit={handleSubmit}>
            <h2>SIGN UP</h2>
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Signup</button>
                <a href="/login">Already have an account?</a>
            </form>
        </div>
    );
};

export default Signup;
