import React from 'react';

function Editpage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <img src="/images/discover/editor.jpg" alt="Video Editing Tool" style={{ maxWidth: '100%', height: 'auto' }} />
      <p style={{ textAlign: 'center', margin: '20px 0' }}>
        Edit and apply elements on a timeline. In one place, you can edit your video, add end screens and more.
      </p>
      <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Get Started
      </button>
    </div>
  );
}

export default Editpage;