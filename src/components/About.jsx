import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Target className="highlight-icon" size={24} />,
      title: "Problem Solver",
      description: "Tackling complex engineering challenges with analytical thinking."
    },
    {
      icon: <Lightbulb className="highlight-icon" size={24} />,
      title: "Innovative",
      description: "Constantly learning and applying modern technologies."
    },
    {
      icon: <Users className="highlight-icon" size={24} />,
      title: "Team Player",
      description: "Collaborative approach to building scalable solutions."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text glass-card">
            <h3>My Journey</h3>
            <p>
              I am a Front-End Developer and recent Computer Science Engineering graduate with a strong passion for building
              scalable, accessible web applications. I have hands-on experience with ReactJS, PHP, Python, and MySQL,
              gained through internships and professional roles.
            </p>
            <p>
              Currently working as a Web Developer at QAds, I thrive in agile environments where I can build
              responsive UIs, integrate RESTful APIs, and deliver impactful digital experiences. I am passionate about
              clean code, performance optimization, and seamless user experiences.
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Months Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8.51</span>
                <span className="stat-label">CGPA</span>
              </div>
            </div>
          </div>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card glass-card">
                <div className="icon-wrapper">
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
