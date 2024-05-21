// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import withAuth from './withAuth';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setIsAuthenticated(false);
  };

  const AuthenticatedHomePage = withAuth(HomePage);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage login={login} />} />
        <Route path="/" element={<AuthenticatedHomePage logout={logout} />} />
      </Routes>
    </Router>
  );
};

export default App;
