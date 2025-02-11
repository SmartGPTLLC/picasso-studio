import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import TransformationPage from './pages/TransformationPage';
import PrintPreview from './pages/PrintPreview';

const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(usr => {
      setUser(usr);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={ user ? <Dashboard /> : <LoginPage />} />
        <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/transform" element={ user ? <TransformationPage /> : <Navigate to="/" />} />
        <Route path="/print" element={ user ? <PrintPreview /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App; 