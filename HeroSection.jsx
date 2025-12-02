import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">
          Nirwair Kumar Chaudhary
        </h1>
        <p className="hero-id">CE22B080</p>
        <p className="hero-tagline">
          curiosity-driven engineer with a builder's mindset
        </p>
        <div className="hero-ctas">
          <button className="cta-primary" onClick={scrollToProjects}>
            Projects
          </button>
          <button className="cta-secondary" onClick={scrollToContact}>
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

