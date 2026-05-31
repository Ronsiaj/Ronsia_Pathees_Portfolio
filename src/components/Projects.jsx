import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [

    {
      title: "Multi-Panel POS System",
      description: "Unified point-of-sale platform with four role-based panels: LED product rental, vehicle rental with fabrication workflows, print operations with expense and revenue tracking, and an event scheduler with automated admin reminders.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["ReactJS", "PHP", "MySQL", "Role-Based Access"],
      github: "#",
      live: "#"
    },
    {
      title: "Business Owner Networking Platform",
      description: "Feature-rich B2B social platform with invite-based JWT auth, interest-weighted feeds, real-time chat with read receipts, communities, events with vendor invitations, a mini CRM deal pipeline, and a full admin dashboard with audit logs.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["ReactJS", "PHP", "MySQL", "JWT Auth", "REST API"],
      github: "#",
      live: "#"
    },

    {
      title: "Property Listing Platform",
      description: "A real estate marketplace where the admin lists properties for sale, rent, or lease — and buyers can browse, filter by type, location, and price range, and submit enquiries to connect with the owner directly.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["ReactJS", "Reactstrap", "PHP", "MySQL"],
      github: "#",
      live: "#"
    },

    {
      title: "Trust Management System",
      description: "A full-stack Trust Management System digitizing donation workflows, visitor engagement, and administrative operations. Features role-based access control for admin, donor, and visitor roles with secure session management and real-time donation tracking dashboards.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["ReactJS", "Reactstrap", "PHP", "MySQL"],
      github: "#",
      live: "#"
    },


    {
      title: "Air Quality Prediction System",
      description: "End-to-end deep learning pipeline that forecasts real-time pollution levels. Built a full data pipeline covering collection, preprocessing, and model deployment — achieving a 15% accuracy improvement using deep learning techniques.",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Deep Learning", "Data Pipeline", "Predictive Modeling"],
      github: "#",
      live: "#"
    },
    {
      title: "Aspect-Based Sentiment Analysis",
      description: "NLP system that dissects customer feedback at the aspect level, extracting granular insights per product or service dimension. Identifies sentiment trends across large datasets to enable data-driven business decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "NLP", "Sentiment Analysis", "Text Mining"],
      github: "#",
      live: "#"
    },
    {
      title: "Gold Price Prediction Dashboard",
      description: "Live financial dashboard that extracts real-time and historical data from Yahoo Finance. Performs data cleaning, transformation, and trend analysis using Pandas to forecast gold prices for investor decision-making.",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Pandas", "Yahoo Finance API", "Forecasting"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.github} className="project-link-btn" title="View Code">
                    <Code size={20} />
                  </a>
                  <a href={project.live} className="project-link-btn" title="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;