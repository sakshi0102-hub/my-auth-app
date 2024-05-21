// src/withAuth.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthComponent = (props) => {
    const isAuthenticated = localStorage.getItem('username') === 'admin' &&
                            localStorage.getItem('password') === 'admin123';
    return isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />;
  };
  return AuthComponent;
};

export default withAuth;
