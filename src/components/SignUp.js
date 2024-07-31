import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [user_firstname, setFirstName] = useState('');
  const [user_lastname, setLastName] = useState('');
  const [user_email, setEmail] = useState('');
  const [user_password, setPassword] = useState('');
  const [user_phone, setPhone] = useState('');
  const [user_city, setCity] = useState('');
  const [user_zipcode, setZipCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://syoft.dev/Api/userlogin/api/userregister', {
        user_firstname,
        user_lastname,
        user_email,
        user_password,
        user_phone,
        user_city,
        user_zipcode
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during sign up', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user_firstname" placeholder="First Name" value={user_firstname} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" name="user_lastname" placeholder="Last Name" value={user_lastname} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" name="user_email" placeholder="Email" value={user_email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" name="user_password" placeholder="Password" value={user_password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="text" name="user_phone" placeholder="Phone" value={user_phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="text" name="user_city" placeholder="City" value={user_city} onChange={(e) => setCity(e.target.value)} required />
        <input type="text" name="user_zipcode" placeholder="Zip Code" value={user_zipcode} onChange={(e) => setZipCode(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
