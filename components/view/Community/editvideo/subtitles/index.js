"use client"

import React, { useState } from 'react';

function Subtitlespage() {
  const [language, setLanguage] = useState('');
  const [isDefault, setIsDefault] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        minHeight: '80vh',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: '#0f0f0f',
      }}
    >
      {/* Title */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 500, marginBottom: '30px' }}>
        Video Translations
      </h2>

      {/* Language Select Section */}
      <div style={{ marginBottom: '25px', width: '100%', maxWidth: '400px' }}>
        <label
          htmlFor="language"
          style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}
        >
          Set language
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        >
          <option value="">Select language</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      {/* Checkbox */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '25px',
          gap: '10px',
        }}
      >
        <input
          type="checkbox"
          id="default"
          checked={isDefault}
          onChange={() => setIsDefault(!isDefault)}
          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
        />
        <label
          htmlFor="default"
          style={{ fontSize: '1rem', cursor: 'pointer' }}
        >
          Make this the default for my channel
        </label>
      </div>

      {/* Confirm Button */}
      <button
        disabled={!language}
        style={{
          backgroundColor: language ? '#065fd4' : '#d0d0d0',
          color: '#fff',
          border: 'none',
          padding: '10px 24px',
          borderRadius: '6px',
          fontSize: '1rem',
          cursor: language ? 'pointer' : 'not-allowed',
          opacity: language ? 1 : 0.7,
        }}
      >
        Confirm
      </button>
    </div>
  );
}

export default Subtitlespage;
