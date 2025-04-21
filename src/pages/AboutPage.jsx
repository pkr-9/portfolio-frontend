import React from 'react';
import Navigation from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/global.scss';
import Skills from '../components/specific/Skills';
import Experience from '../components/specific/Experience';
import Achievements from '../components/specific/Achievements';
import AboutSection from '../components/layout/AboutSection';
import WhyUs from '../components/layout/WhyUs';


const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <AboutSection />
      <Skills />
      <Achievements />
      <Experience />
            <WhyUs />
      
      <Footer />
    </div>
  );
};

export default AboutPage;
