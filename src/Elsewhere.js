// Elsewhere.js

import React from 'react';
import './Elsewhere.css';
import git from './images/git.svg';
import linkedIn from './images/linkedin.svg';
import resume from './images/resume.png';

export default function Elsewhere() {
  const openNewTab = (url) => {
    window.open(url, '_blank');
  };

  const openResume = () => {
    window.open('/resume.pdf', 'public'); // Replace with the actual path to your resume file
  };

  return (
    <div className='elsewhere-wrapper'>
      <div className='elsewhere-text'>
        elsewhere
      </div>
      <div className='elsewhere-icons'>
        <img src={git} alt='GitHub' onClick={() => openNewTab('https://github.com/abigailrb03')} />
        <img src={linkedIn} alt='LinkedIn' onClick={() => openNewTab('https://www.linkedin.com/in/abigail03/')} />
        <img src={resume} alt='Resume' onClick={openResume} />
      </div>
    </div>
  );
}
