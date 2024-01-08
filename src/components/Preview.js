// Preview.js
import React from 'react';
import './Preview.css';
import plus from '../images/+.svg';

const Preview = ({ title, description, image, onToggle }) => {
  return (
    <div className="preview-wrapper">
        <div className='preview-wrapper-left'>
            <img className = "preview-img" src={image} alt={title} />
            <div className='preview-text-wrapper'>
                <div className='preview-title'>{title}</div>
                <div className='preview-job-title'>{description}</div>
            </div>
        </div>
        <button onClick={onToggle} className='preview-button'>
            <img src= {plus} alt='show details'/>
        </button>
    </div>
  );
};

export default Preview;
