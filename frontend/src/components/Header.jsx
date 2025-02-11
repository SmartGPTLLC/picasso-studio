import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        Photobooth
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </header>
  );
}

export default Header; 