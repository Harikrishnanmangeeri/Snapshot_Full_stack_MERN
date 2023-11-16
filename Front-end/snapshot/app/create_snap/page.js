import React from 'react';

function Page() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  };

  const messageStyle = {
    textAlign: 'center',
    fontSize: '24px',
    color: '#333', 
    maxWidth: '600px', 
    padding: '20px',
    borderRadius: '10px',
    background: '#f0f0f0', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
  };

  return (
    <div style={containerStyle}>
      <div style={messageStyle}>
        <p>
          Welcome to our website! Exciting new features are under development.
          Stay tuned for more updates.
        </p>
      </div>
    </div>
  );
}

export default Page;
