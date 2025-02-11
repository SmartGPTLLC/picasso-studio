import React from 'react';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/transform")}>Transform</button>
      <button onClick={() => navigate("/print")}>Print</button>
    </nav>
  );
};

export default BottomNav; 