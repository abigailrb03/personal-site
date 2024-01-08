import React from 'react';
import './SkillsOverlay.css';

const getRandomColor = () => {
  const colors = ['#8D411F', '#0A464B', '#884954', '#B1740F'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const SkillsOverlay = ({ skillsData }) => {
  return (
    <div className="skills-overlay">
      {skillsData.map((item, index) => {
        const categoryColor = getRandomColor();
        return (
          <div key={index} className="skills-tag" style={{ backgroundColor: categoryColor }}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default SkillsOverlay;

