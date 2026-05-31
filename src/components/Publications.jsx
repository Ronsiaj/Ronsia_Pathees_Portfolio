import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      title: "Predicting and Localizing Toxic Emissions from Novel Chemical Industries",
      conference: "International Conference on Recent Trends in Engineering and Technology (ICRTET)",
      date: "2025",
      link: "#" // Link can be updated when available
    }
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <h2 className="section-title">Publications</h2>

        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div key={index} className="publication-card glass-card">
              <div className="pub-icon-wrapper">
                <FileText size={32} />
              </div>
              <div className="pub-content">
                <h3>{pub.title}</h3>
                <p className="conference">{pub.conference}</p>
                <div className="pub-footer">
                  <span className="date">{pub.date}</span>
                  {pub.link !== "#" && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="verify-link">
                      View Paper <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
