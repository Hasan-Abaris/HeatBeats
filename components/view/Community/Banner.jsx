import React from 'react';

function Banner() {
  return (
    <div
      style={{
        width: '1200px',
        height: '462px',
        background: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)', // Dark code editor theme
        color: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '8px',
        }}
      >
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
          Learn with Us!
        </h1>
        <p style={{ fontSize: '24px', marginBottom: '20px' }}>
          Explore the latest Gaming tutorials, projects, and community challenges.
        </p>
        <button
          style={{
            padding: '12px 30px',
            fontSize: '18px',
            backgroundColor: '#4CAF50',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
          onClick={() => alert('Redirecting to coding section!')}
        >
          Start Learning Now
        </button>
        {/* Simulated code snippet background */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            opacity: '0.1',
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M10 10 H90 V90 H10 Z M20 20 H80 V80 H20 Z' fill='none' stroke='%234CAF50' stroke-width='2'/%3E%3Ctext x='50' y='50' font-family='monospace' font-size='12' fill='%234CAF50' text-anchor='middle' dominant-baseline='middle'%3Ecode%3C/text%3E%3C/svg%3E") repeat`,
            zIndex: '-1',
          }}
        />
      </div>
    </div>
  );
}

export default Banner;