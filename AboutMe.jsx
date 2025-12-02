import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <div className="about-text">
          <p>
            I'm a Civil Engineering student at IIT Madras with a passion for building digital solutions. 
            As a full-stack developer, I work with React, Node.js, and MongoDB to create applications that 
            solve real-world problems. My curiosity extends beyond code—I'm deeply interested in economics 
            and finance, which informs my approach to building efficient, impactful systems.
          </p>
          <p>
            A problem-solver at heart, I thrive on tackling complex challenges and turning ideas into 
            reality. My academic journey has been marked by scholarship achievements, reflecting my 
            commitment to excellence and continuous learning. Whether it's engineering solutions or 
            developing software, I bring a builder's mindset to everything I do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

