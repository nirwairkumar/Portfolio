import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
    }
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const buttonBaseStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '64px', gap: '0.5rem', flexWrap: 'wrap', padding: '0.5rem 0' }}>
          <button
            onClick={() => scrollToSection('home')}
            style={{
              ...buttonBaseStyle,
              backgroundColor: activeTab === 'home' ? '#4f46e5' : '#f3f4f6',
              color: activeTab === 'home' ? '#ffffff' : '#374151'
            }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            style={{
              ...buttonBaseStyle,
              backgroundColor: activeTab === 'projects' ? '#4f46e5' : '#f3f4f6',
              color: activeTab === 'projects' ? '#ffffff' : '#374151'
            }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            style={{
              ...buttonBaseStyle,
              backgroundColor: activeTab === 'contact' ? '#4f46e5' : '#f3f4f6',
              color: activeTab === 'contact' ? '#ffffff' : '#374151'
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
