import React from 'react';
import { BookOpen, Award, Code, Database, Layout, Terminal } from 'lucide-react';
import './SkillsEducation.css';

const SkillsEducation = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Mount Zion College of Engineering and Technology",
      year: "2021 - 2025",
      grade: "CGPA: 8.51/10",
      description: "Specialized in Computer Science and Engineering with a strong foundation in full-stack web development and software engineering principles."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sahayamatha Matriculation Hr. Sec. School",
      year: "2020 - 2021",
      grade: "88%",
      description: "Completed Higher Secondary with strong academic performance."
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: <Layout />, items: ["ReactJS", "HTML", "CSS", "JavaScript", "Reactstrap", "Bootstrap"] },
    { name: "Backend Development", icon: <Terminal />, items: ["Python", "PHP", "Flask"] },
    { name: "Database & Tools", icon: <Database />, items: ["MySQL", "Git", "Postman"] },
    { name: "Concepts & Design", icon: <Code />, items: ["RESTful APIs"] }
  ];

  return (
    <section id="skills" className="skills-edu-section">
      <div className="container">
        <h2 className="section-title">Skills & Education</h2>

        <div className="skills-edu-content">
          {/* Education Timeline */}
          <div className="education-column">
            <div className="column-header">
              <BookOpen size={28} className="header-icon" />
              <h3>Education Journey</h3>
            </div>

            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-card">
                    <span className="year-badge">{item.year}</span>
                    <h4>{item.degree}</h4>
                    <div className="institution-row">
                      <span className="institution-name">{item.institution}</span>
                      <span className="institution-grade">{item.grade}</span>
                    </div>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="skills-column">
            <div className="column-header">
              <Award size={28} className="header-icon" />
              <h3>Technical Arsenal</h3>
            </div>

            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-card glass-card">
                  <div className="skill-header">
                    <div className="skill-icon">{skillGroup.icon}</div>
                    <h4>{skillGroup.name}</h4>
                  </div>
                  <div className="skill-tags">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;
