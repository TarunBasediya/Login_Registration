// src/pages/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, password });
      // After successful registration, navigate to login page
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </form>
  );
}

export default RegisterPage;
