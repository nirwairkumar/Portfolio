import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  // SVG Icons
  const Icons = {
    python: <svg viewBox="0 0 128 128" width="24" height="24"><path d="M63.02 23.36c8.17 0 13.96.67 17.5 3.32 2.5 1.86 4.67 5.6 4.67 11.23v7.35H55.12V43c0-3.35 1.4-5.32 6.55-5.32l2.35.03v-3.76l-2.73-.03c-8.9 0-14.5-2.06-18.06-4.73C40.7 27.34 38.5 23.6 38.5 18V10.6c0-7.7 5.76-8.73 13.1-8.73h20.6c7.34 0 13.1 1.03 13.1 8.73v11.37h-3.9v-11.8c0-3.34-1.38-5.3-6.52-5.3H54.27c-5.14 0-6.52 1.96-6.52 5.3v7.88c5.44.13 10.63.13 15.27.13zm27.14 11.53c-1.56 0-2.83 1.27-2.83 2.83 0 1.56 1.27 2.83 2.83 2.83 1.56 0 2.83-1.27 2.83-2.83 0-1.56-1.27-2.83-2.83-2.83zm-51.65 0c-1.56 0-2.82 1.27-2.82 2.83 0 1.56 1.26 2.83 2.82 2.83 1.56 0 2.83-1.27 2.83-2.83 0-1.56-1.27-2.83-2.83-2.83zm36.42 22.8c-8.17 0-13.97-.67-17.5-3.32-2.5-1.86-4.66-5.6-4.66-11.23V35.8h30.07v2.26c0 3.36-1.4 5.33-6.54 5.33l-2.36-.03v3.76l2.74.03c8.9 0 14.5 2.06 18.05 4.73 2.53 1.85 4.72 5.6 4.72 11.23v7.35H86.4a23.7 23.7 0 0 0-3.48-.13c-7.34 0-13.1-1.03-13.1-8.73V50.25h3.9v11.8c0 3.34 1.38 5.3 6.52 5.3h20.62c5.14 0 6.5-1.96 6.5-5.3v-7.87c-5.46-.14-10.64-.14-15.3-.14zM32.8 19.3c1.57 0 2.83-1.27 2.83-2.83 0-1.56-1.26-2.83-2.83-2.83-1.55 0-2.82 1.27-2.82 2.83 0 1.56 1.27 2.83 2.82 2.83z" fill="currentColor" /></svg>,
    java: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>, // Generic Code Icon for simplicity
    html: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.325 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" /></svg>,
    css: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-9.75l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" /></svg>,
    js: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 3h18v18H3V3zm5.5 13c1.7 0 3-1.2 3.2-2.8h-1.6c-.1.7-.6 1.1-1.6 1.1-1 0-1.6-.7-1.6-1.7s.7-1.7 1.6-1.7c.9 0 1.4.5 1.5 1.1h1.6c-.3-1.6-1.7-2.6-3.1-2.6-2 0-3.3 1.5-3.3 3.2s1.3 3.4 3.3 3.4zm7.9 0c1.8 0 3.2-1.3 3.2-3.2v-5h-1.7v5c0 .9-.6 1.6-1.5 1.6-1 0-1.5-.7-1.5-1.6v-5h-1.7v5c0 2 1.3 3.2 3.2 3.2z" /></svg>,
    react: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 0c-4.1 0-7.7 2.2-9.6 5.6C.9 8.2 0 11 0 12s.9 3.8 2.4 6.4c1.9 3.4 5.5 5.6 9.6 5.6 4.1 0 7.7-2.2 9.6-5.6 1.5-2.6 2.4-5.4 2.4-6.4s-.9-3.8-2.4-6.4C19.7 2.2 16.1 0 12 0zm0 10.7c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.6-1.3 1.3-1.3zM12 2c2.8 0 5.4 1.5 6.8 3.9 1 1.7 1.6 3.6 1.6 4.2 0 1.8-3.2 4.1-8.4 4.1-5.2 0-8.4-2.3-8.4-4.1 0-.6.5-2.5 1.6-4.2C6.6 3.5 9.2 2 12 2zm0 15.9c-2.8 0-5.4-1.5-6.8-3.9-1-1.7-1.6-3.6-1.6-4.2 0-1.8 3.2-4.1 8.4-4.1 5.2 0 8.4 2.3 8.4 4.1 0 .6-.5 2.5-1.6 4.2-1.4 2.4-4 3.9-6.8 3.9z" /></svg>,
    node: <svg viewBox="0 0 32 32" width="24" height="24"><path fill="currentColor" d="M16 3L30 11v11L16 30 2 22V11L16 3zm0 2.3l-10 5.7v9l10 5.7 10-5.7v-9L16 5.3z" /></svg>,
    git: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M22.66 11.23l-9.87-9.88a1.68 1.68 0 0 0-2.37 0l-1.33 1.34L11.75 5.3a2.53 2.53 0 0 1 1.7 1.5 2.53 2.53 0 0 1-.36 2.37l2.25 2.25a2.53 2.53 0 0 1 2.37-.36 2.53 2.53 0 0 1 1.5 1.7l2.66-2.66a1.68 1.68 0 0 0 0-2.37zM6.55 12.06a2.53 2.53 0 0 1 2.37.36l2.09-2.09A2.53 2.53 0 0 1 10.7 8a2.53 2.53 0 0 1-.36-2.37l-2.66-2.66L1.34 9.34a1.68 1.68 0 0 0 0 2.37l9.88 9.87a1.68 1.68 0 0 0 2.37 0l2.66-2.66a2.53 2.53 0 0 1-1.7-1.5 2.53 2.53 0 0 1 .36-2.37L12.06 12.06a2.53 2.53 0 0 1-2.37-.36 2.53 2.53 0 0 1-1.5-1.7 2.53 2.53 0 0 1-.36 2.37l-1.28-1.28z" /></svg>,
    github: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" /></svg>,
    supabase: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M11.666 0 1.5 12h9.666v12L22.5 12h-9.666z" /></svg>,
    database: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
    terminal: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
    lightning: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
    chart: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
    pen: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
  };

  const skills = [
    { name: 'Python', icon: Icons.python },
    { name: 'Java', icon: Icons.java },
    { name: 'DSA', icon: Icons.chart },
    { name: 'HTML', icon: Icons.html },
    { name: 'CSS', icon: Icons.css },
    { name: 'JavaScript', icon: Icons.js },
    { name: 'React.js', icon: Icons.react },
    { name: 'Node.js', icon: Icons.node },
    { name: 'Express.js', icon: Icons.terminal },
    { name: 'MongoDB', icon: Icons.database },
    { name: 'Supabase', icon: Icons.supabase },
    { name: 'SQL', icon: Icons.database },
    { name: 'Tailwind', icon: Icons.css }, // Reuse CSS icon or use generic
    { name: 'Git', icon: Icons.git },
    { name: 'GitHub', icon: Icons.github },
    { name: 'Power BI', icon: Icons.chart },
    { name: 'AutoCAD', icon: Icons.pen },
    { name: 'C', icon: Icons.java } // Generic Code
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 1, once: false }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={itemVariants}
            >
              {skill.icon && <span className="skill-icon">{skill.icon}</span>}
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
