import React from 'react';
import Navigation from '../../components/layout/navbar/Navbar';
import Footer from '../../components/layout/footer/Footer';
import Skills from '../../components/specific/skills/Skills';
import Experience from '../../components/specific/experience/Experience';
import Achievements from '../../components/specific/achievements/Achievements';
import AboutSection from '../../components/layout/aboutsection/AboutSection';
import WhyUs from '../../components/layout/whyus/WhyUs';
import '../../styles/global.scss';
import './AboutPage.scss';

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <div className="about-page">
        <AboutSection />
        <Achievements />
        <Skills />
        <Experience />
        <WhyUs />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
