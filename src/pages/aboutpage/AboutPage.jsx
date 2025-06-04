import React from 'react';
import Navigation from '../../components/layout/navbar/Navbar';
import Footer from '../../components/layout/footer/Footer';
import Experience from '../../components/specific/experience/Experience';
import Skills from '../../components/specific/skills/Skills';
import Certification from '../../components/specific/certification/Certification';
import AcademicBackground from '../../components/specific/educationlist/AcademicBackground';
import '../../styles/global.scss';
import './AboutPage.scss';

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <div className="about-page">
        <Experience />
        <Certification />
        <AcademicBackground />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
