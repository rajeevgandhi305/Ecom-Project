import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the JWT token from local storage
    localStorage.removeItem('jwtToken');

    // Redirect to the login page
    navigate('/');
  }, [navigate]);

  return null; // No need to render anything
};

export default Logout;
