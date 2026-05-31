import React, { useState } from 'react';
import { Award, ExternalLink, X, Maximize2 } from 'lucide-react';
import './Certificates.css';
import nptel from "../assets/images/nptel.jpg";
import bss from "../assets/images/bss.jpg";
import mysql from "../assets/images/mysql.png";
import python from "../assets/images/python data science.jpg";
import udemy from "../assets/images/web development.jpg";
const Certificates = () => {
  const certificates = [
    {
      title: "Web Development",
      issuer: "Udemy",
      date: "2024",
      image: udemy,
      link: "#"
    },
    {
      title: "Python Programming",
      issuer: "Bharat Sevak Samaj",
      date: "2024",
      image: bss,
      link: "#"
    },
    {
      title: "MySQL",
      issuer: "Guvi",
      date: "2024",
      image: mysql,
      link: "#"
    },
    {
      title: "Python 101 for Data Science",
      issuer: "CognitiveClass.ai (IBM)",
      date: "2024",
      image: python,
      link: "#"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2023",
      image: nptel,
      link: "#"
    }
  ];
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (image) => {
    setSelectedCert(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card glass-card">
              <div
                className="cert-image-wrapper"
                onClick={() => openModal(cert.image)}
                title="Click to view full screen"
              >
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="view-overlay">
                  <Maximize2 size={24} />
                  <span>View Full</span>
                </div>
                <div className="cert-icon-badge">
                  <Award size={24} />
                </div>
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <div className="cert-footer">
                  <span className="date">{cert.date}</span>
                  {cert.link && cert.link !== "#" ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="verify-link">
                      Verify <ExternalLink size={16} />
                    </a>
                  ) : (
                    <button onClick={() => openModal(cert.image)} className="verify-link btn-view">
                      View <Maximize2 size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <img src={selectedCert} alt="Certificate Full View" className="cert-modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
