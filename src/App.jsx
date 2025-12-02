import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../Footer';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#ffffff' }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
