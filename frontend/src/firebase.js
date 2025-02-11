import { initializeApp } from "firebase/app";

// Replace the values below with your Firebase project's configuration.
// You can find these in your Firebase console under Project settings.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // or your actual API key
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp; 