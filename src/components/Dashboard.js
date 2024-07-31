import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div>No user information available. Please log in.</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.user_firstname}</h2>
      <div className="user-info">
        <strong>Email:</strong> {user.user_email}
      </div>
      <div className="user-info">
        <strong>Phone:</strong> {user.user_phone}
      </div>
      <div className="user-info">
        <strong>City:</strong> {user.user_city}
      </div>
      <div className="user-info">
        <strong>Zipcode:</strong> {user.user_zipcode}
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

