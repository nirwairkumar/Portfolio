import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';
import Achievements from '../Achievements';
import Contact from '../Contact';
import Footer from '../Footer';
import Organizations from './Organizations';

const App = () => {
  return (
    <div className="app-container" style={{ minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
        <Organizations />
      </main>
      <Footer />
    </div>
  );
};

export default App;
