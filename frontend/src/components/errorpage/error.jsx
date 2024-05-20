import React from 'react';
import './error.css'; // Ensure you create this CSS file for styling

const ErrorPage = () => {
  const handleRedirect = () => {
    // Redirect to login or home page, replace '/login' with the correct path
    window.location.href = '/';
  };

  return (
    <div className="error_container">
      <div className="error_content">
        <h1 className="error_title">Not Authenticated</h1>
        <p className="error_message">You need to be logged in to access this page.</p>
        <button className="redirect_btn" onClick={handleRedirect}>Go to Login</button>
      </div>
    </div>
  );
};

export default ErrorPage;
