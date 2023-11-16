import React from 'react';

const Saved = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://source.unsplash.com/random/800x600")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    borderRadius:"35px"
  };

  const messageStyle = {
    textAlign: 'center',
    fontSize: '24px',
    padding: '20px',
    borderRadius: '10px',
    background: 'rgba(0, 0, 0, 0.8)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={containerStyle}>
      <div style={messageStyle}>
        <p>
          Your content has been saved! More features are coming soon. Stay tuned for updates and exciting developments.
        </p>
      
      </div>
    </div>
  );
};

export default Saved;
