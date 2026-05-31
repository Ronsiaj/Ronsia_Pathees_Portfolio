import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SkillsEducation from './components/SkillsEducation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <SkillsEducation />
        <Projects />
        <Certificates />
        <Publications />
        <Contact />
      </main>
    </>
  );
}

export default App;
