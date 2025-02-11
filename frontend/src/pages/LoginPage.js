import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch(error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <h2>Welcome to Photobooth App</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage; 