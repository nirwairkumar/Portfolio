import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const techProjects = [
    {
      title: "Forever E-commerce Platform",
      description: "A full-featured e-commerce platform with cart management, user authentication, and payment integration.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      link: "https://forever-ecommerce.vercel.app/collection",
      detailsLink: "#"
    },
    {
      title: "Supabase CRUD User Manager",
      description: "A responsive React app with Supabase backend to Add, Edit & Delete users with smart duplicate validation and real-time updates.",
      skills: ["React", "Supabase", "JavaScript", "CSS"],
      link: "https://nirwairkumar.github.io/supabase-first",
      detailsLink: "https://nirwairkumar/project-document-supabase",
      hasFlip: true, // Marker for flip functionality
      flipContent: {
        features: [
          "Create, Read, Update & Delete (CRUD) functionality",
          "Supabase PostgreSQL real-time database integration",
          "Smart duplicate user validation",
          "Auto-maintained serial numbering",
          "Conditional forms (Add ↔ Edit mode)",
          "Clean & responsive UI design",
          "Data refresh without reloading"
        ],
        techStack: [
          { category: "Frontend", tools: "React.js, JSX, JS, CSS3" },
          { category: "Backend", tools: "Supabase (PostgreSQL)" },
          { category: "Concepts", tools: "CRUD, API, State Mgmt" }
        ],
        purpose: "To demonstrate practical expertise in building real-time data applications using modern front-end and backend services."
      }
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills, built with React and modern CSS.",
      skills: ["React", "Vite", "CSS3"],
      link: "#",
      detailsLink: "#"
    }
  ];

  const coreProjects = [
    {
      title: "Construction Planning & Scheduling (CPM)",
      description: "Scheduled and managed 50+ activities for a multi-story building project. Supervised structural, MEP, and finishing work. Used CPM tools to predict delays and allocated resources proactively. Modeled risks by mapping dependencies.",
      skills: ["CPM", "Construction Management", "Resource Allocation", "Risk Modeling"],
      link: "#",
      detailsLink: "https://nirwairkumr.github.io/portfolio.me"
    },
    {
      title: "Urban Flood Management System",
      description: "Designed a drainage system for a model urban area using hydraulic modeling software. Analyzed rainfall data to predict flood risks and proposed sustainable mitigation strategies.",
      skills: ["Hydraulic Modeling", "Urban Planning", "Data Analysis", "Sustainability"],
      link: "#",
      detailsLink: "#"
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
      <motion.div
        className={`project-card-wrapper ${project.hasFlip ? 'flip-enabled' : ''}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: false }}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Top Trigger: Flips card when entered */}
        {project.hasFlip && (
          <div
            className="flip-trigger-top"
            onMouseEnter={() => setIsFlipped(true)}
          />
        )}

        {/* Bottom Revert Trigger: Reverts card when entered (Only active when flipped to allowing button clicks on front) */}
        {project.hasFlip && isFlipped && (
          <div
            className="flip-trigger-bottom"
            onMouseEnter={() => setIsFlipped(false)}
          />
        )}

        <div
          className="project-card-inner"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front Side */}
          <div className="project-card-front">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              {project.hasFlip && <span className="flip-hint">✨ Hover top to reveal</span>}
              <p className="project-description">{project.description}</p>
              <div className="project-skills">
                {project.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
                {project.detailsLink !== "#" && (
                  <a href={project.detailsLink} target="_blank" rel="noopener noreferrer" className="project-details-link">
                    Details
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Back Side */}
          {project.hasFlip && (
            <div className="project-card-back">
              <div className="back-content">
                <h4>✨ Key Features</h4>
                <ul className="feature-list">
                  {project.flipContent.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="tech-table">
                  {project.flipContent.techStack.map((row, i) => (
                    <div key={i} className="tech-row">
                      <strong>{row.category}:</strong> <span>{row.tools}</span>
                    </div>
                  ))}
                </div>

                <div className="purpose-section">
                  <strong>🎯 Purpose:</strong>
                  <p>{project.flipContent.purpose}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          Tech Projects
        </motion.h2>
        <div className="projects-grid">
          {techProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.h2
          className="section-title core-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          Core Engineering Projects
        </motion.h2>
        <div className="projects-grid">
          {coreProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
