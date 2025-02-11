import "./firebase"; // Import this to initialize Firebase first
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PhotoBooth from './components/PhotoBooth';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PhotoBooth />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 