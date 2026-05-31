import React from 'react';
import { Code, Briefcase, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content glass-card">
          <div className="contact-text">
            <h3>Let's build something awesome together!</h3>
            <p>
              I'm currently looking for new opportunities. Whether you have a question, a project idea, 
              or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:ronsiapathees166@gmail.com" className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <span className="contact-value">ronsiapathees166@gmail.com</span>
              </div>
            </a>

            <a href="tel:+919688343484" className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+91-9688343484</span>
              </div>
            </a>

            <a href="https://linkedin.com/in/j-ronsia-pathees" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon">
                <Briefcase size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">linkedin.com/in/j-ronsia-pathees</span>
              </div>
            </a>

            <a href="https://github.com/Ronsiaj" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon">
                <Code size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/Ronsiaj</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ronsia Pathees J. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
