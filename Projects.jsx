import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      summary: [
        'Full-stack e-commerce platform with secure payment integration.',
        'Features user authentication, product catalog, and order management.'
      ],
      techStack: ['React', 'Node', 'MongoDB', 'Stripe']
    },
    {
      title: 'Library Management System',
      summary: [
        'Efficient library management solution built with Python.',
        'Implements data structures and algorithms for optimized book tracking and user management.'
      ],
      techStack: ['Python', 'DSA']
    },
    {
      title: 'Flood Modeling Project',
      summary: [
        'Hydrologic analysis and flood prediction system using GIS modeling.',
        'Integrates spatial data analysis for accurate flood risk assessment.'
      ],
      techStack: ['Hydrologic Modeling', 'GIS']
    }
  ];

  const handleViewProject = (projectTitle) => {
    // You can customize this to navigate to project details or external links
    console.log(`Viewing project: ${projectTitle}`);
    // Example: window.open(projectUrl, '_blank');
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-summary">
                {project.summary.map((line, lineIndex) => (
                  <p key={lineIndex} className="project-line">{line}</p>
                ))}
              </div>
              <div className="project-tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
              <button 
                className="project-button"
                onClick={() => handleViewProject(project.title)}
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

