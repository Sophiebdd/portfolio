import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
    {/* <a href="https://facebook.com/votreprofil" target="_blank" rel="noopener noreferrer">
    //     <FaFacebook size={30} />
    //   </a>*/}
      <a href="https://www.linkedin.com/in/sophiebodard/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/Sophiebdd" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
    </div>
  );
}

export default SocialLinks;
