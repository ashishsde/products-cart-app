import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app"
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBkIJo0ko1oIpHdKfA0MEVoETmzPWzFZWs",
  authDomain: "cart-app-e8e83.firebaseapp.com",
  projectId: "cart-app-e8e83",
  storageBucket: "cart-app-e8e83.appspot.com",
  messagingSenderId: "186919576231",
  appId: "1:186919576231:web:673bd68dd7dd81bf6eb182"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

