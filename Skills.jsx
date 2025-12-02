import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'Python',
    'Java',
    'DSA',
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'Tailwind',
    'Git',
    'GitHub',
    'Power BI',
    'AutoCAD'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

