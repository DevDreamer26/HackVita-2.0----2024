import React from 'react';

const Error = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Page Not Found !!</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#dc3545',
  },
};

export default Error;
