import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h1 className="hero-name">
            Nirwair Kumar Chaudhary
          </h1>
          <p className="hero-id">CE22B080</p>
          <div className="hero-education-badge">
            🎓 Bachelor in Civil Engineering @ IIT Madras
          </div>
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
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <img src="/profile.png" alt="Nirwair Kumar Chaudhary" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
