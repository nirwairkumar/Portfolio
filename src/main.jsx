import React from 'react';
import ReactDOM from 'react-dom/client';

// Complete portfolio content inline - guaranteed to render
const Portfolio = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#ffffff' }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '0.75rem 1.5rem', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Home</button>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '0.75rem 1.5rem', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Projects</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '0.75rem 1.5rem', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, margin: '0 0 0.5rem 0', lineHeight: 1.2 }}>Nirwair Kumar Chaudhary</h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 1.5rem 0', opacity: 0.9 }}>CE22B080</p>
          <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', margin: '0 0 2.5rem 0', fontStyle: 'italic', opacity: 0.9 }}>curiosity-driven engineer with a builder's mindset</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '0.875rem 2rem', background: '#ffffff', color: '#667eea', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '1rem' }}>Projects</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '0.875rem 2rem', background: 'transparent', color: '#ffffff', border: '2px solid rgba(255,255,255,0.5)', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '1rem' }}>Contact</button>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" style={{ padding: '5rem 1rem', background: '#ffffff', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: '0 0 2rem 0', textAlign: 'center' }}>About Me</h2>
        <div style={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#4a4a4a' }}>
          <p style={{ margin: '0 0 1.5rem 0' }}>
            I'm a Civil Engineering student at IIT Madras with a passion for building digital solutions. 
            As a full-stack developer, I work with React, Node.js, and MongoDB to create applications that 
            solve real-world problems. My curiosity extends beyond code—I'm deeply interested in economics 
            and finance, which informs my approach to building efficient, impactful systems.
          </p>
          <p style={{ margin: 0 }}>
            A problem-solver at heart, I thrive on tackling complex challenges and turning ideas into 
            reality. My academic journey has been marked by scholarship achievements, reflecting my 
            commitment to excellence and continuous learning. Whether it's engineering solutions or 
            developing software, I bring a builder's mindset to everything I do.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: '5rem 1rem', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: '0 0 3rem 0', textAlign: 'center' }}>Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1.25rem' }}>
            {['Python', 'Java', 'DSA', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'Tailwind', 'Git', 'GitHub', 'Power BI', 'AutoCAD'].map((skill, i) => (
              <div key={i} style={{ background: '#ffffff', padding: '1.25rem 1.5rem', borderRadius: '8px', textAlign: 'center', fontSize: '1rem', fontWeight: 500, border: '2px solid #e9ecef', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: '5rem 1rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: '0 0 3rem 0', textAlign: 'center' }}>Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'E-commerce Website', summary: ['Full-stack e-commerce platform with secure payment integration.', 'Features user authentication, product catalog, and order management.'], tech: ['React', 'Node', 'MongoDB', 'Stripe'] },
              { title: 'Library Management System', summary: ['Efficient library management solution built with Python.', 'Implements data structures and algorithms for optimized book tracking and user management.'], tech: ['Python', 'DSA'] },
              { title: 'Flood Modeling Project', summary: ['Hydrologic analysis and flood prediction system using GIS modeling.', 'Integrates spatial data analysis for accurate flood risk assessment.'], tech: ['Hydrologic Modeling', 'GIS'] }
            ].map((project, i) => (
              <div key={i} style={{ background: '#F3F5F7', borderRadius: '0.5rem', padding: '1.25rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1rem 0' }}>{project.title}</h3>
                <div style={{ margin: '0 0 1.5rem 0' }}>
                  {project.summary.map((line, j) => (
                    <p key={j} style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4a4a4a', margin: '0 0 0.5rem 0' }}>{line}</p>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '0 0 1.5rem 0' }}>
                  {project.tech.map((tech, j) => (
                    <span key={j} style={{ background: '#f0f0f0', color: '#667eea', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 500 }}>{tech}</span>
                  ))}
                </div>
                <button style={{ background: '#667eea', color: '#ffffff', border: 'none', padding: '0.875rem 1.5rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>View Project</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '5rem 1rem', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: '0 0 3rem 0' }}>Get In Touch</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', margin: '0 0 3rem 0' }}>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', background: '#667eea', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>✉</div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0 0 0.25rem 0', fontWeight: 500, textTransform: 'uppercase' }}>Email</p>
                <a href="mailto:nkchaudhary431@gmail.com" style={{ fontSize: '1.125rem', color: '#1a1a1a', textDecoration: 'none', fontWeight: 500 }}>nkchaudhary431@gmail.com</a>
              </div>
            </div>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', background: '#667eea', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>📱</div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0 0 0.25rem 0', fontWeight: 500, textTransform: 'uppercase' }}>Mobile</p>
                <a href="tel:+919263087676" style={{ fontSize: '1.125rem', color: '#1a1a1a', textDecoration: 'none', fontWeight: 500 }}>+91 9263087676</a>
              </div>
            </div>
          </div>
          <button onClick={() => window.location.href = 'mailto:nkchaudhary431@gmail.com'} style={{ background: '#667eea', color: '#ffffff', border: 'none', padding: '1rem 2.5rem', borderRadius: '8px', fontSize: '1.125rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 6px rgba(102, 126, 234, 0.2)' }}>Send Message</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#111827', color: '#d1d5db', padding: '2rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.875rem', margin: 0 }}>
            © 2025 <span style={{ color: '#ffffff', fontWeight: 600 }}>Nirwair Kumar Chaudhary</span>
            {' | '}
            Built with <span style={{ color: '#60a5fa' }}>React</span> + <span style={{ color: '#22d3ee' }}>Tailwind</span>
            {' | '}
            <a href="mailto:nkchaudhary431@gmail.com" style={{ color: '#60a5fa', textDecoration: 'underline' }}>nkchaudhary431@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Portfolio />
    </React.StrictMode>
  );
} else {
  document.body.innerHTML = '<div style="padding: 2rem; font-family: sans-serif;"><h1>Error: Root element not found</h1></div>';
}
