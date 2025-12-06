import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      color: '#cbd5e1',
      padding: '2rem 1rem',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
          <a href="https://github.com/nirwairkumar" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/nirwair-kumar-b1b98a257/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn</a>
          <a href="mailto:nkchaudhary431@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>Email</a>
        </div>
        <p className="copyright" style={{ fontSize: '0.875rem', opacity: 0.8 }}>
          © {new Date().getFullYear()} Nirwair Kumar Chaudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
