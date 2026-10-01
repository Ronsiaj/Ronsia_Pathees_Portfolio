import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [

    {
      title: "Vivisha Boutique",
      description: "Mobile-first e-commerce platform for browsing fashion products, managing cart and wishlist items, selecting addresses, and completing orders through an integrated checkout flow.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["ReactJS", "PHP", "MySQL", "Razorpay"],
      github: "#",
      live: "#"
    },
    {
      title: "Hospitality & Event Booking Platform",
      description: "Responsive hospitality and event-booking website for marriage halls, event spaces, lodge rooms, catering, and restaurant services, with customer enquiries, room booking, and role-based admin and staff operations.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["ReactJS", "PHP", "MySQL", "Razorpay", "JWT"],
      github: "#",
      live: "#"
    },
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