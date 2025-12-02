import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#111827',
    color: '#d1d5db',
    padding: '2rem 1rem',
    textAlign: 'center'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={{ fontSize: '0.875rem', margin: 0 }}>
          © 2025{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Nirwair Kumar Chaudhary</span>
          {' | '}
          Built with{' '}
          <span style={{ color: '#60a5fa' }}>React</span>
          {' + '}
          <span style={{ color: '#22d3ee' }}>Tailwind</span>
          {' | '}
          <a
            href="mailto:nkchaudhary431@gmail.com"
            style={{ color: '#60a5fa', textDecoration: 'underline' }}
          >
            nkchaudhary431@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
