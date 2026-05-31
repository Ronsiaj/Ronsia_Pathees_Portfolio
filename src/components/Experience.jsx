import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      date: "Jan 2026 – Present",
      company: "QAds",
      location: "Karaikudi, Tamil Nadu",
      points: [
        "Developed scalable web applications using ReactJS, Reactstrap, PHP, and MySQL in an agile team environment.",
        "Built and maintained responsive UI components, ensuring cross-browser compatibility and optimal performance.",
        "Integrated front-end interfaces with RESTful backend APIs for efficient data handling and real-time updates.",
        "Implemented admin dashboards and business management systems, streamlining operational workflows."
      ]
    },
    {
      title: "Artificial Intelligence Intern",
      date: "Mar 2025 – May 2025",
      company: "The Mind IT Solutions",
      location: "Trichy, Tamil Nadu",
      points: [
        "Developed web applications using Python, Flask, and MySQL with scalable, production-ready backend architecture.",
        "Built and integrated a BERT-based sentiment analysis and recommendation system using PyTorch, enabling real-time predictions and data-driven insights."
      ]
    },
    {
      title: "Full Stack Python Development Intern",
      date: "Jul 2024 – Aug 2024",
      company: "OneYes Infotech Solutions",
      location: "Chennai, Tamil Nadu",
      points: [
        "Designed wireframes and interactive prototypes using Figma, improving the overall user experience and developer handoff.",
        "Integrated front-end designs with back-end Python functionalities, bridging UI and server-side logic."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience & Internships</h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index !== experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="experience-content glass-card">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3>{exp.title}</h3>
                    <h4 className="company-name">
                      <Briefcase size={16} className="exp-icon" /> {exp.company}
                    </h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-date">
                      <Calendar size={14} className="exp-icon" /> {exp.date}
                    </span>
                    <span className="exp-location">
                      <MapPin size={14} className="exp-icon" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
