import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>This is where your photobooth images would appear.</p>
      <button onClick={() => navigate("/transform")}>Upload &amp; Transform Image</button>
      <BottomNav />
    </div>
  );
};

export default Dashboard; 