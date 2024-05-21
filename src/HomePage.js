// src/HomePage.js
import React from 'react';
import './App.css';

const HomePage = ({ logout }) => {
  return (
    <div className="container home-page">
      <h1 className="header">Home Page</h1>
      <p>Welcome to the home page!</p>
      <button className="logout-button" onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
