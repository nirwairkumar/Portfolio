import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50 // Start 50px below
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70, /* Slightly softer spring */
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* Animated Headline */}
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 1, once: false }} // Triggers when fully visible
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Animated Text Container */}
        <motion.div
          className="about-text-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: false }} // Triggers when 30% is visible
        >
          <div className="about-text">
            <motion.p variants={itemVariants}>
              I'm a Civil Engineering student at IIT Madras with a passion for building digital solutions.
              As a full-stack developer, I work with React, Node.js, and MongoDB to create applications that
              solve real-world problems. My curiosity extends beyond code—I'm deeply interested in economics
              and finance, which informs my approach to building efficient, impactful systems.
            </motion.p>
            <motion.p variants={itemVariants}>
              A problem-solver at heart, I thrive on tackling complex challenges and turning ideas into
              reality. My academic journey has been marked by scholarship achievements, reflecting my
              commitment to excellence and continuous learning. Whether it's engineering solutions or
              developing software, I bring a builder's mindset to everything I do.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
