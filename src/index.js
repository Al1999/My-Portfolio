import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU_YZaT-inBCo5WjMhqcWIg_fNd4bfoEU",
  authDomain: "myportfolio-d6aa1.firebaseapp.com",
  projectId: "myportfolio-d6aa1",
  storageBucket: "myportfolio-d6aa1.appspot.com",
  messagingSenderId: "574801302380",
  appId: "1:574801302380:web:b7f98568c9ea2936361949",
  measurementId: "G-LMT508FM8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


