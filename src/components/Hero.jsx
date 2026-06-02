import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';
import resume from '../assets/files/Ronsia_Pathees_J_Frontend_Developer.pdf';

const roles = ["Frontend Developer", "Python Developer", "Web Developer"];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const i = loopNum % roles.length;
    const fullText = roles[i];

    if (isDeleting) {
      timer = setTimeout(() => setText(fullText.substring(0, text.length - 1)), 50);
    } else {
      timer = setTimeout(() => setText(fullText.substring(0, text.length + 1)), 100);
    }

    if (!isDeleting && text === fullText) {
      clearTimeout(timer);
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
      clearTimeout(timer);
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <div className="badge">Available for Work</div>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Ronsia Pathees J</span><br />
            <span className="typewriter-text">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="hero-subtitle delay-100 animate-fade-up">
            Results-driven Front-End Developer with hands-on experience building scalable web applications using ReactJS and modern CSS frameworks, delivering responsive and accessible user experiences.
          </p>
          <div className="hero-cta delay-200 animate-fade-up">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href={resume} download="Ronsia_Pathees_J_Frontend_Developer.pdf" className="btn btn-outline">
              Download Resume <Download size={20} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper delay-300 animate-fade-up">
          <div className="glow-effect"></div>
          <img
            src="/avatar.jpeg"
            alt="John Doe"
            className="hero-image"
          />

          {/* Floating Elements for dynamic look */}
          <div className="floating-card glass-card tech-stack">
            <div className="tech-item">React</div>
            <div className="tech-item">PHP</div>
            <div className="tech-item">Python</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
