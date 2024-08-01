import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [user_email, setEmail] = useState('');
  const [user_password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin', { user_email, user_password });
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="user_email" placeholder="Email" value={user_email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" name="user_password" placeholder="Password" value={user_password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
