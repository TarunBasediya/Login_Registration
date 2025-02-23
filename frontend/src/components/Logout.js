// src/components/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data from localStorage
    localStorage.removeItem('authToken');
    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return null;
}

export default Logout;
