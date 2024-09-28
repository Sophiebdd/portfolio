import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function ProfileHeader() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <img 
      src={`${process.env.PUBLIC_URL}/profilePic.jpg`}
        alt="Profile" 
        style={{ borderRadius: '50%', width: '100px', height: '100px' }}
      />
      <h2>Sophie Bodard</h2>
      <p>Junior Developer</p>
      <p><FaMapMarkerAlt style={{ marginRight: '5px' }} />Lourdes, France</p>
    </div>
  );
}

export default ProfileHeader;
