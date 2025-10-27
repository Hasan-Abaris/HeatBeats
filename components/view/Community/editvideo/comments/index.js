import React from 'react';

function Commentpage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center',
        color: '#0f0f0f',
        backgroundColor: '#fff',
      }}
    >
      <img
        src="https://www.gstatic.com/youtube/img/creator/empty_state/start_searching_light.svg"
        alt="No comments illustration"
        style={{ width: '180px', height: 'auto', marginBottom: '20px' }}
      />
      <h2 style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '10px' }}>
        No comments found
      </h2>
      <p style={{ fontSize: '1rem', color: '#606060', maxWidth: '400px' }}>
        Try searching for something else or removing filters.
      </p>
    </div>
  );
}

export default Commentpage;
